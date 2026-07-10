import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  featured?: boolean;
}

@Component({
  selector: 'app-testimonials-grid',
  imports: [],
  templateUrl: './testimonials-grid.html',
  styleUrl: './testimonials-grid.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsGrid {
  protected readonly reviews = signal<Testimonial[]>([
    {
      name: 'Sarah Connor',
      role: 'Lead Architect',
      company: 'Cyberdyne Systems',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      quote:
        'The modular standalone structure of these components completely refactored our interface codebase. Uptime and performance scaled immediately without bloating our runtime bundle.',
      featured: true,
    },
    {
      name: 'Marcus Wright',
      role: 'Staff Engineer',
      company: 'Resistance Devs',
      avatar:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      quote:
        'Integrates like native elements. The properties panel made custom theme testing incredibly straightforward for our design operations teams.',
    },
    {
      name: 'Elena Rostova',
      role: 'Product Designer',
      company: 'Novgorod Tech',
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      rating: 4,
      quote:
        'Exceptional attention to visual detail. The glassmorphism borders and custom SVG sparklines elevate simple data lists into premium showcases.',
    },
    {
      name: 'John Connor',
      role: 'DevOps Director',
      company: 'Future Ops',
      avatar:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      quote:
        'Outstanding accessibility. Every component complies with AXE checks out of the box, saving our QA departments weeks of auditing time and ensuring fully inclusive user flows.',
    },
  ]);
}
