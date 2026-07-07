import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeSelectService } from 'ngx-theme-stack';
import { ThemeCardComp } from 'app/modules/components/cards/theme-card/theme-card';

interface ThemeInfo {
  id: string;
  name: string;
  background: string;
  cardBg: string;
  text: string;
  border: string;
  accent: string;
}

@Component({
  selector: 'app-themes-view',
  imports: [ThemeCardComp],
  template: `
    <div class="flex flex-col gap-8 max-w-7xl mx-auto w-full">
      <!-- Header -->
      <div class="flex flex-col gap-2">
        <h1
          class="text-3xl font-extrabold tracking-tight font-krona bg-gradient-to-r from-app-accent to-purple-500 bg-clip-text text-transparent">
          Theme Gallery
        </h1>
        <p
          class="text-app-text/60 max-w-2xl text-sm md:text-base leading-relaxed">
          Explore and choose from our curated collection of custom visual
          palettes. Each theme changes the typography, contrast, and overall
          personality of the application.
        </p>
      </div>

      <!-- Themes Grid -->
      @if (theme.isHydrated()) {
        <div
          class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          @for (themeInfo of themesList; track themeInfo.id) {
            <app-theme-card-comp
              (click)="selectTheme(themeInfo.id)"
              [themeName]="themeInfo.name"
              [background]="themeInfo.background"
              [cardBg]="themeInfo.cardBg"
              [text]="themeInfo.text"
              [border]="themeInfo.border"
              [accent]="themeInfo.accent"
              [isActive]="theme.selectedTheme() === themeInfo.id"
              [buttonText]="
                theme.selectedTheme() === themeInfo.id ? 'Applied' : 'Apply'
              " />
          }
        </div>
      } @else {
        <!-- Skeleton loader of 12 cards to avoid CLS -->
        <div
          class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          @for (i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; track i) {
            <div
              class="h-[230px] rounded-2xl bg-app-card border border-app-border/20 p-5 flex flex-col justify-between animate-pulse">
              <div>
                <div class="h-4 bg-slate-800 rounded w-1/3 mb-4"></div>
                <div
                  class="w-full h-24 bg-slate-800/50 rounded-xl mb-4 border border-slate-800"></div>
              </div>
              <div
                class="flex items-center justify-between pt-3 border-t border-slate-800">
                <div class="flex gap-1.5">
                  <div class="w-5 h-5 rounded-full bg-slate-800"></div>
                  <div class="w-5 h-5 rounded-full bg-slate-800"></div>
                  <div class="w-5 h-5 rounded-full bg-slate-800"></div>
                </div>
                <div class="w-16 h-7 bg-slate-800 rounded-lg"></div>
              </div>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ThemesView {
  protected readonly theme = inject(ThemeSelectService);

  protected readonly themesList: ThemeInfo[] = [
    {
      id: 'system',
      name: 'System Theme',
      background: 'linear-gradient(135deg, #f8fafc 50%, #070a13 50%)',
      cardBg: 'linear-gradient(135deg, #ffffff 50%, #0b0f19 50%)',
      text: '#3b82f6',
      border: 'rgba(15, 23, 42, 0.08)',
      accent: '#3b82f6',
    },
    {
      id: 'light',
      name: 'Light Theme',
      background: '#f8fafc',
      cardBg: '#ffffff',
      text: '#0f172a',
      border: 'rgba(15, 23, 42, 0.08)',
      accent: '#3b82f6',
    },
    {
      id: 'dark',
      name: 'Dark Theme',
      background: '#070a13',
      cardBg: '#0b0f19',
      text: '#f8fafc',
      border: 'rgba(255, 255, 255, 0.08)',
      accent: '#38bdf8',
    },
    {
      id: 'angular',
      name: 'Angular Red',
      background: '#0c0812',
      cardBg: '#140d1f',
      text: '#ffffff',
      border: 'rgba(226, 28, 52, 0.15)',
      accent: '#e21c34',
    },
    {
      id: 'nordic-light',
      name: 'Nordic Light',
      background: '#f1f5f9',
      cardBg: '#ffffff',
      text: '#1e293b',
      border: 'rgba(30, 41, 59, 0.08)',
      accent: '#0284c7',
    },
    {
      id: 'peach-blossom',
      name: 'Peach Blossom',
      background: '#fffaf5',
      cardBg: '#ffffff',
      text: '#2d1a12',
      border: 'rgba(45, 26, 18, 0.08)',
      accent: '#f43f5e',
    },
    {
      id: 'neo-mint',
      name: 'Neo Mint',
      background: '#f0fdf4',
      cardBg: '#ffffff',
      text: '#064e3b',
      border: 'rgba(6, 78, 59, 0.12)',
      accent: '#0d9488',
    },
    {
      id: 'cyberpunk-dark',
      name: 'Cyberpunk Neon',
      background: '#0f051d',
      cardBg: '#1a0b2e',
      text: '#f8fafc',
      border: 'rgba(255, 0, 127, 0.25)',
      accent: '#ff007f',
    },
    {
      id: 'emerald-abyss',
      name: 'Emerald Abyss',
      background: '#040d0e',
      cardBg: '#0b1c1e',
      text: '#e6f4f1',
      border: 'rgba(16, 185, 129, 0.15)',
      accent: '#10b981',
    },
    {
      id: 'brutalist-light',
      name: 'Neo-Brutalist Light',
      background: '#f4f4f5',
      cardBg: '#ffffff',
      text: '#000000',
      border: '#000000',
      accent: '#facc15',
    },
    {
      id: 'brutalist-dark',
      name: 'Neo-Brutalist Dark',
      background: '#000000',
      cardBg: '#18181b',
      text: '#ffffff',
      border: '#ffffff',
      accent: '#a855f7',
    },
    {
      id: 'aero-light',
      name: 'Glassmorphism Aero Light',
      background: '#f0f9ff',
      cardBg: 'rgba(255, 255, 255, 0.7)',
      text: '#0c4a6e',
      border: 'rgba(56, 189, 248, 0.25)',
      accent: '#22c55e',
    },
    {
      id: 'aero-dark',
      name: 'Glassmorphism Aero Dark',
      background: '#082f49',
      cardBg: 'rgba(15, 23, 42, 0.6)',
      text: '#e0f2fe',
      border: 'rgba(14, 165, 233, 0.3)',
      accent: '#0ea5e9',
    },
    {
      id: 'pixel-light',
      name: 'Retro Pixel Light',
      background: '#c0c0c0',
      cardBg: '#ffffff',
      text: '#000000',
      border: '#000000',
      accent: '#000080',
    },
    {
      id: 'pixel-dark',
      name: 'Retro Terminal Pixel Dark',
      background: '#000000',
      cardBg: '#051005',
      text: '#39ff14',
      border: '#39ff14',
      accent: '#39ff14',
    },
  ];

  protected selectTheme(themeId: string): void {
    this.theme.select(themeId);
  }

  protected selectThemeFromBtn(event: Event, themeId: string): void {
    event.stopPropagation();
    this.theme.select(themeId);
  }
}
