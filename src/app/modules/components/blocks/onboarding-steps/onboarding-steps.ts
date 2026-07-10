import {
  Component,
  signal,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';

interface StepDetail {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-onboarding-steps',
  imports: [],
  templateUrl: './onboarding-steps.html',
  styleUrl: './onboarding-steps.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingSteps {
  protected readonly currentStep = signal<number>(0);

  protected readonly steps = signal<StepDetail[]>([
    {
      title: 'Initialize Module',
      subtitle: 'Step 01',
      description:
        'Choose your desired template category and run the schematic sync command inside your workspace directory to download assets.',
      icon: 'downloading',
    },
    {
      title: 'Theme Customization',
      subtitle: 'Step 02',
      description:
        'Configure standard CSS variables matching your design system. We support dynamic light, dark, and custom custom themes.',
      icon: 'palette',
    },
    {
      title: 'Deploy to Edge',
      subtitle: 'Step 03',
      description:
        'Build your bundles and distribute them across edge node locations. Experience lightning-fast load times and full hydration caching.',
      icon: 'rocket_launch',
    },
  ]);

  protected readonly progressPercent = computed(() => {
    return ((this.currentStep() + 1) / this.steps().length) * 100;
  });

  protected readonly activeStep = computed(() => {
    return this.steps()[this.currentStep()];
  });

  protected nextStep(): void {
    if (this.currentStep() < this.steps().length - 1) {
      this.currentStep.update(s => s + 1);
    }
  }

  protected prevStep(): void {
    if (this.currentStep() > 0) {
      this.currentStep.update(s => s - 1);
    }
  }

  protected setStep(index: number): void {
    if (index >= 0 && index < this.steps().length) {
      this.currentStep.set(index);
    }
  }
}
