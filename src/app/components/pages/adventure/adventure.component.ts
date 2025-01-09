import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, take, takeUntil } from 'rxjs';
import { AdventureStep } from '../../../models/adventure-step.interface';
import { AdventureService } from '../../../services/adventure-service/adventure.service';
import { LoadingService } from '../../../services/loading-service/loading.service';

@Component({
  selector: 'app-adventure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adventure.component.html',
  styleUrl: './adventure.component.css'
})
export class AdventureComponent implements OnInit, OnDestroy {
  steps: AdventureStep[];
  unlockedSteps: AdventureStep[];

  isLoading$: BehaviorSubject<boolean>;
  unsubscribe$ = new Subject<void>();

  constructor(private router: Router, private adventureService: AdventureService, private loadingService: LoadingService) {
    this.steps = [];
    this.unlockedSteps = [];
    this.isLoading$ = this.loadingService.isLoading$;
  }

  ngOnInit(): void {
    this.adventureService
      .fetchAdventures$()
      .pipe(take(1), takeUntil(this.unsubscribe$))
      .subscribe(steps => {
        this.steps = steps;
        this.unlockedSteps.push(steps[0]);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  advanceStep(
    currentStep: AdventureStep,
    button: {
      label: string;
      stepID: string;
      route?: string;
    }
  ) {
    if (!!button.route) {
      this.router.navigate([button.route]);
    } else {
      var nextStep = structuredClone(this.steps.find(s => s.stepID === button.stepID));

      if (nextStep) {
        currentStep.buttons = [];
        this.unlockedSteps.push(nextStep);
      }
    }
  }
}
