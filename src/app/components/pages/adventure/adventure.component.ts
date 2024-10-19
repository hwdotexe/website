import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdventureStep } from '../../../models/adventure-step.interface';

@Component({
  selector: 'app-adventure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adventure.component.html',
  styleUrl: './adventure.component.css'
})
export class AdventureComponent {
  initialStep: AdventureStep = {
    stepID: 'initial_step',
    label:
      'While you were browsing the web, you stumbled down a dark forest path. Your phone is out of battery, so your GPS and flashlight app are of no use. What do you do?',
    buttons: [
      {
        label: 'Call out for help',
        actionID: '1_call_out'
      },
      {
        label: 'Listen for sounds',
        actionID: '1_listen'
      }
    ]
  };

  steps: AdventureStep[];
  unlockedSteps: AdventureStep[];

  constructor(private router: Router) {
    this.steps = [];
    this.unlockedSteps = [];

    this.unlockedSteps.push(this.initialStep);

    this.prepareSteps();
  }

  advanceStep(currentStep: AdventureStep, actionID: string) {
    var nextStep = structuredClone(this.steps.find(s => s.stepID === actionID));

    if (nextStep) {
      if (nextStep.stepID === '6_end') {
        this.router.navigate(['/']);
      } else {
        currentStep.buttons = [];
        this.unlockedSteps.push(nextStep);
      }
    }
  }

  private prepareSteps() {
    this.steps.push({
      stepID: '1_call_out',
      label: 'You call out into the thick forest. "Hello?" Not so much as an echo for a reply.',
      buttons: [
        {
          label: 'Yell again',
          actionID: '2_yell_louder'
        }
      ]
    });

    this.steps.push({
      stepID: '1_listen',
      label: "You steady your breathing and listen for any sounds to guide your path. The forest is quiet and peaceful, and you don't hear anything.",
      buttons: [
        {
          label: 'Yell for help',
          actionID: '1_call_out'
        }
      ]
    });

    this.steps.push({
      stepID: '2_yell_louder',
      label:
        'The dense thicket you find yourself in swallows up your calls for help. It looks like you will need to find your way home some other way.',
      buttons: [
        {
          label: 'Check your pockets',
          actionID: '3_check_pockets'
        },
        {
          label: 'Check your surroundings',
          actionID: '3_check_surroundings'
        }
      ]
    });

    this.steps.push({
      stepID: '3_check_pockets',
      label: "Resigning to check your pockets for tools, your hand bumps into an object on your waist. It's a Sony Walkman cassette player.",
      buttons: [
        {
          label: 'Press Play',
          actionID: '4_listen'
        },
        {
          label: 'Inspect the device',
          actionID: '4_inspect'
        }
      ]
    });

    this.steps.push({
      stepID: '3_check_surroundings',
      label:
        "You extend your arms in front of you and begin searching your surroundings. Your hand wraps around something around. It's a bicycle horn.",
      buttons: [
        {
          label: 'Squeak the horn',
          actionID: '4_squeak'
        },
        {
          label: 'Take the horn apart',
          actionID: '4_take_apart'
        }
      ]
    });

    this.steps.push({
      stepID: '4_listen',
      label:
        "The cassette player clicks on. You start to hear static noise coming through the headphones. It's a bit disappointing, maybe this tape is damaged?",
      buttons: [
        {
          label: 'Open the Sony Walkman',
          actionID: '4_open'
        },
        {
          label: 'Keep listening',
          actionID: '4_keep_listening'
        }
      ]
    });

    this.steps.push({
      stepID: '4_inspect',
      label:
        'A relic of the ancient past, this device could play sounds stored on a long strip of magnetic tape. People would use this to play music before streaming was invented.',
      buttons: [
        {
          label: 'Listen to the tape',
          actionID: '4_listen'
        },
        {
          label: 'See what else is around here',
          actionID: '3_check_surroundings'
        }
      ]
    });

    this.steps.push({
      stepID: '4_squeak',
      label: 'The horn makes an amusing "honk" sound when you squeak it. It reminds you of circus clowns and elephants, though you aren\'t sure why.',
      buttons: [
        {
          label: 'Honk the horn again',
          actionID: '4_squeak'
        },
        {
          label: 'Take the horn apart',
          actionID: '4_take_apart'
        }
      ]
    });

    this.steps.push({
      stepID: '4_take_apart',
      label: 'You take the horn apart. Inside the billows, you find a whistle.',
      buttons: [
        {
          label: 'Blow the whistle',
          actionID: '5_blow_whistle'
        },
        {
          label: 'Check your pockets instead',
          actionID: '3_check_pockets'
        }
      ]
    });

    this.steps.push({
      stepID: '4_open',
      label: 'You open the Sony Walkman, and you find an unmarked cassette tape. It was playing the B-side.',
      buttons: [
        {
          label: 'Try the A-side',
          actionID: '4_keep_listening'
        }
      ]
    });

    this.steps.push({
      stepID: '4_keep_listening',
      label: 'The static continues to play. Suddenly, a slow and raspy voice breaks through. "Lost... click... forest..."',
      buttons: [
        {
          label: 'Keep listening',
          actionID: '5_keep_listening'
        }
      ]
    });

    this.steps.push({
      stepID: '5_keep_listening',
      label: '"rewind... leave..."',
      buttons: [
        {
          label: 'Press the Rewind button',
          actionID: '5_rewind'
        }
      ]
    });

    this.steps.push({
      stepID: '5_blow_whistle',
      label: 'You blow the whistle. Suddenly, the path forward is illuminated, and you can find your way out of the forest.',
      buttons: [
        {
          label: 'Leave the forest',
          actionID: '6_end'
        }
      ]
    });

    this.steps.push({
      stepID: '5_rewind',
      label: 'You press the Rewind button, and you find yourself back at the entrance to the forest.',
      buttons: [
        {
          label: 'Leave the forest',
          actionID: '6_end'
        }
      ]
    });

    this.steps.push({
      stepID: '6_end',
      label: 'Thanks for playing!',
      buttons: []
    });
  }
}
