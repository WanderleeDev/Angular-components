import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

interface FAQItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-grid',
  imports: [],
  templateUrl: './faq-grid.html',
  styleUrl: './faq-grid.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FAQGrid {
  protected readonly faqs = signal<FAQItem[]>([
    {
      question: 'Are these components compatible with SSR?',
      answer: 'Yes, all modules are fully optimized for Server-Side Rendering (SSR) and Hydration out of the box, with hydration guards protecting browser-only behaviors.',
    },
    {
      question: 'How do I customize the default themes?',
      answer: 'We utilize standard CSS variables. You can easily override colors, fonts, and borders by targeting the tokens inside your themes stylesheet or Tailwind config.',
    },
    {
      question: 'Do they meet WCAG AA requirements?',
      answer: 'Absolutely. We enforce focus management, correct ARIA attributes, semantic HTML tags, and pass all AXE checks to ensure compliance with AA accessibility.',
    },
    {
      question: 'Can I use them without Tailwind CSS?',
      answer: 'Yes. Every component includes a native vanilla CSS version stylesheet that operates independently of any specific CSS frameworks or build pipelines.',
    },
  ]);

  // Set of currently open FAQ indexes
  protected readonly openIndexes = signal<number[]>([]);

  protected toggleFAQ(index: number): void {
    this.openIndexes.update(indexes =>
      indexes.includes(index) ? indexes.filter(i => i !== index) : [...indexes, index]
    );
  }

  protected isFAQOpen(index: number): boolean {
    return this.openIndexes().includes(index);
  }
}
