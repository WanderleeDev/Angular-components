import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-masonry-grid',
  templateUrl: './masonry-grid.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class MasonryGrid {
  images = signal<{ id: number; url: string; alt: string }[]>([
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1513346940221-6f673d962e97?auto=format&fit=crop&q=80&w=400&h=600',
      alt: 'Minimalist desk setup',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=400&h=300',
      alt: 'Healthy breakfast bowl',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=500',
      alt: 'Modern interior design',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400',
      alt: 'Portrait photography',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400&h=550',
      alt: 'Mobile app wireframes',
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400&h=450',
      alt: 'Team collaboration',
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&q=80&w=400&h=650',
      alt: 'Retail store shopping',
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=450',
      alt: 'Modern corporate building',
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400&h=300',
      alt: 'Sunny tropical beach',
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=400&h=550',
      alt: 'Healthy green avocado toast',
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=400&h=450',
      alt: 'Programming code on screen',
    },
    {
      id: 13,
      url: 'https://images.unsplash.com/photo-1512418490979-92798cec1380?auto=format&fit=crop&q=80&w=400&h=600',
      alt: 'Contemporary city view',
    },
  ]);
}
