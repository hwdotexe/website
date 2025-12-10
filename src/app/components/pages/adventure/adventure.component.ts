import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, take, takeUntil } from 'rxjs';
import { AdventureButton } from '../../../models/adventure-button.interface';
import { AdventureItem } from '../../../models/adventure-item.interface';
import { AdventureStep } from '../../../models/adventure-step.interface';
import { AdventureService } from '../../../services/adventure-service/adventure.service';
import { LoadingService } from '../../../services/loading-service/loading.service';

@Component({
    selector: 'app-adventure',
    imports: [CommonModule],
    templateUrl: './adventure.component.html',
    styleUrl: './adventure.component.css'
})
export class AdventureComponent implements OnInit, OnDestroy {
  steps: AdventureStep[];
  unlockedSteps: AdventureStep[];
  items: AdventureItem[];
  unlockedItems: AdventureItem[];

  isLoading$: BehaviorSubject<boolean>;
  unsubscribe$ = new Subject<void>();

  stepsToShow = 3;

  constructor(private router: Router, private adventureService: AdventureService, private loadingService: LoadingService) {
    this.steps = [];
    this.unlockedSteps = [];
    this.items = [];
    this.unlockedItems = [];
    this.isLoading$ = this.loadingService.isLoading$;
  }

  ngOnInit(): void {
    this.adventureService
      .fetchAdventures$()
      .pipe(take(1), takeUntil(this.unsubscribe$))
      .subscribe(model => {
        this.steps = model.steps;
        this.items = model.items;

        this.pushStep(model.steps[0].stepID);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  advanceStep(currentStep: string, button: AdventureButton) {
    if (!!button.route) {
      this.router.navigate([button.route]);
    } else {
      this.pushSelfMessage(button.label);

      if (button.inventory?.requires) {
        for (var requiredItem of button.inventory.requires) {
          if (!this.unlockedItems.find(ui => ui.itemID === requiredItem.itemID)) {
            this.pushSelfMessage(requiredItem.error);
            this.pushStep(currentStep);

            return;
          }
        }
      }

      if (button.inventory?.add) {
        for (var addItem of button.inventory.add) {
          if (!this.unlockedItems.find(ui => ui.itemID === addItem)) {
            var newItem = this.items.find(ni => ni.itemID === addItem);

            if (newItem) {
              this.unlockedItems.push(newItem);
            }
          }
        }
      }

      if (button.inventory?.remove) {
        for (var removeItem of button.inventory.remove) {
          var oldItem = this.unlockedItems.find(ui => ui.itemID === removeItem);

          if (oldItem) {
            this.unlockedItems.splice(this.unlockedItems.indexOf(oldItem), 1);
          }
        }
      }

      this.pushStep(button.stepID);
    }
  }

  private pushSelfMessage(message: string) {
    this.unlockedSteps.push({
      stepID: '',
      label: message,
      self: true,
      buttons: []
    });
  }

  private pushStep(stepID: string) {
    var nextStep = structuredClone(this.steps.find(s => s.stepID === stepID));

    if (nextStep) {
      setTimeout(() => {
        this.unlockedSteps.push(nextStep!);

        if (this.unlockedSteps.length > this.stepsToShow) {
          this.unlockedSteps.splice(0, this.unlockedSteps.length - this.stepsToShow);
        }
      }, 1000);
    }
  }
}
