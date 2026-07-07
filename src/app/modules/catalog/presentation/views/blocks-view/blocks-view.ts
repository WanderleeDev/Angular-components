import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Accordion } from 'app/modules/components/blocks/accordion/accordion';
import { BentoGrid } from 'app/modules/components/blocks/bento-grid/bento-grid';
import { PricingGrid } from 'app/modules/components/blocks/pricing-grid/pricing-grid';
import { TimelineBlock } from 'app/modules/components/blocks/timeline-block/timeline-block';
import { StatsGrid } from 'app/modules/components/blocks/stats-grid/stats-grid';
import { ComparisonTable } from 'app/modules/components/blocks/comparison-table/comparison-table';
import { TabsShowcase } from 'app/modules/components/blocks/tabs-showcase/tabs-showcase';
import { TestimonialsGrid } from 'app/modules/components/blocks/testimonials-grid/testimonials-grid';
import { FeatureSpotlight } from 'app/modules/components/blocks/feature-spotlight/feature-spotlight';
import { TeamGrid } from 'app/modules/components/blocks/team-grid/team-grid';
import { FAQGrid } from 'app/modules/components/blocks/faq-grid/faq-grid';
import { ProfileBento } from 'app/modules/components/blocks/profile-bento/profile-bento';
import { OnboardingSteps } from 'app/modules/components/blocks/onboarding-steps/onboarding-steps';
import { PartnerMarquee } from 'app/modules/components/blocks/partner-marquee/partner-marquee';
import { HeroBanner } from 'app/modules/components/blocks/hero-banner/hero-banner';
import { Window } from 'app/modules/catalog/presentation/components/window/window';

@Component({
  selector: 'app-blocks-view',
  imports: [
    RouterLink,
    Accordion,
    BentoGrid,
    PricingGrid,
    TimelineBlock,
    StatsGrid,
    ComparisonTable,
    TabsShowcase,
    TestimonialsGrid,
    FeatureSpotlight,
    TeamGrid,
    FAQGrid,
    ProfileBento,
    OnboardingSteps,
    PartnerMarquee,
    HeroBanner,
    Window,
  ],
  template: `
    <div class="flex flex-col gap-8 max-w-7xl mx-auto w-full">
      <!-- Header -->
      <header class="flex flex-col gap-2">
        <h1
          class="text-3xl font-extrabold tracking-tight font-krona bg-linear-to-r from-app-accent to-purple-500 bg-clip-text text-transparent">
          Blocks
        </h1>
        <p
          class="text-app-text/60 max-w-2xl text-sm md:text-base leading-relaxed">
          Custom UI blocks, grids, and layout elements.
        </p>
      </header>

      <!-- Showcase List -->
      <div class="flex flex-col gap-8">
        <!-- Hero Banner Section -->
        <app-window
          nameComponent="Hero Banner"
          cssPath="hero-banner/css"
          [cssFiles]="['hero-banner.ts', 'hero-banner.html', 'hero-banner.css']">
          <div class="w-full py-4">
            <app-hero-banner />
          </div>
        </app-window>

        <!-- Bento Grid Section -->
        <app-window
          nameComponent="Bento Grid"
          cssPath="bento-grid/css"
          [cssFiles]="['bento-grid.ts', 'bento-grid.html', 'bento-grid.css']">
          <div class="w-full py-4">
            <app-bento-grid />
          </div>
        </app-window>

        <!-- Pricing Grid Section -->
        <app-window
          nameComponent="Pricing Grid"
          cssPath="pricing-grid/css"
          [cssFiles]="['pricing-grid.ts', 'pricing-grid.html', 'pricing-grid.css']">
          <div class="w-full py-4">
            <app-pricing-grid />
          </div>
        </app-window>

        <!-- Accordion Section -->
        <app-window
          nameComponent="Accordion"
          cssPath="accordion/css"
          [cssFiles]="['accordion.ts', 'accordion.html', 'accordion.css']">
          <div class="w-full py-4">
            <app-accordion />
          </div>
        </app-window>

        <!-- Timeline Block Section -->
        <app-window
          nameComponent="Timeline Block"
          cssPath="timeline-block/css"
          [cssFiles]="['timeline-block.ts', 'timeline-block.html', 'timeline-block.css']">
          <div class="w-full py-4">
            <app-timeline-block />
          </div>
        </app-window>

        <!-- Stats Grid Section -->
        <app-window
          nameComponent="Stats Grid"
          cssPath="stats-grid/css"
          [cssFiles]="['stats-grid.ts', 'stats-grid.html', 'stats-grid.css']">
          <div class="w-full py-4">
            <app-stats-grid />
          </div>
        </app-window>

        <!-- Comparison Table Section -->
        <app-window
          nameComponent="Comparison Table"
          cssPath="comparison-table/css"
          [cssFiles]="['comparison-table.ts', 'comparison-table.html', 'comparison-table.css']">
          <div class="w-full py-4">
            <app-comparison-table />
          </div>
        </app-window>

        <!-- Tabs Showcase Section -->
        <app-window
          nameComponent="Tabs Showcase"
          cssPath="tabs-showcase/css"
          [cssFiles]="['tabs-showcase.ts', 'tabs-showcase.html', 'tabs-showcase.css']">
          <div class="w-full py-4">
            <app-tabs-showcase />
          </div>
        </app-window>

        <!-- Testimonials Grid Section -->
        <app-window
          nameComponent="Testimonials Grid"
          cssPath="testimonials-grid/css"
          [cssFiles]="['testimonials-grid.ts', 'testimonials-grid.html', 'testimonials-grid.css']">
          <div class="w-full py-4">
            <app-testimonials-grid />
          </div>
        </app-window>

        <!-- Feature Spotlight Section -->
        <app-window
          nameComponent="Feature Spotlight"
          cssPath="feature-spotlight/css"
          [cssFiles]="['feature-spotlight.ts', 'feature-spotlight.html', 'feature-spotlight.css']">
          <div class="w-full py-4">
            <app-feature-spotlight />
          </div>
        </app-window>

        <!-- Team Grid Section -->
        <app-window
          nameComponent="Team Grid"
          cssPath="team-grid/css"
          [cssFiles]="['team-grid.ts', 'team-grid.html', 'team-grid.css']">
          <div class="w-full py-4">
            <app-team-grid />
          </div>
        </app-window>

        <!-- FAQ Grid Section -->
        <app-window
          nameComponent="FAQ Grid"
          cssPath="faq-grid/css"
          [cssFiles]="['faq-grid.ts', 'faq-grid.html', 'faq-grid.css']">
          <div class="w-full py-4">
            <app-faq-grid />
          </div>
        </app-window>

        <!-- Profile Bento Section -->
        <app-window
          nameComponent="Profile Bento"
          cssPath="profile-bento/css"
          [cssFiles]="['profile-bento.ts', 'profile-bento.html', 'profile-bento.css']">
          <div class="w-full py-4">
            <app-profile-bento />
          </div>
        </app-window>

        <!-- Onboarding Steps Section -->
        <app-window
          nameComponent="Onboarding Steps"
          cssPath="onboarding-steps/css"
          [cssFiles]="['onboarding-steps.ts', 'onboarding-steps.html', 'onboarding-steps.css']">
          <div class="w-full py-4">
            <app-onboarding-steps />
          </div>
        </app-window>

        <!-- Partner Marquee Section -->
        <app-window
          nameComponent="Partner Marquee"
          cssPath="partner-marquee/css"
          [cssFiles]="['partner-marquee.ts', 'partner-marquee.html', 'partner-marquee.css']">
          <div class="w-full py-4">
            <app-partner-marquee />
          </div>
        </app-window>
      </div>

      <!-- Back to Catalog Link -->
      <div class="flex justify-start">
        <a
          routerLink="/catalog"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-app-accent/10 border border-app-accent/20 text-app-accent hover:bg-app-accent hover:text-white transition-all duration-200 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-app-accent/50 cursor-pointer">
          <span class="material-icons text-lg">arrow_back</span>
          Back to Catalog
        </a>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BlocksView {}
