import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

export interface ProductColor {
  name: string;
  value: string;
  gradient: string;
  colorName: string;
}

@Component({
  selector: 'app-product-card-comp',
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block h-full',
  },
})
export class ProductCardComp {
  readonly name = 'AeroGlide Pro';
  readonly category = 'Running Shoes';
  readonly basePrice = 149.99;
  
  readonly colors: ProductColor[] = [
    { name: 'Sunset Crimson', value: '#ef4444', gradient: 'from-red-500 to-orange-500', colorName: 'red' },
    { name: 'Deep Cobalt', value: '#3b82f6', gradient: 'from-blue-600 to-cyan-500', colorName: 'blue' },
    { name: 'Aurora Neon', value: '#10b981', gradient: 'from-emerald-500 to-teal-400', colorName: 'emerald' },
  ];

  readonly selectedColor = signal<ProductColor>(this.colors[0]);
  readonly selectedSize = signal<string>('9');
  readonly isAdded = signal<boolean>(false);
  readonly isAdding = signal<boolean>(false);
  readonly quantity = signal<number>(0);

  readonly sizes = ['8', '9', '10', '11'];
  
  readonly priceDisplay = computed(() => {
    const sizeOffset = this.selectedSize() === '11' ? 10 : 0;
    return (this.basePrice + sizeOffset).toFixed(2);
  });

  selectColor(color: ProductColor): void {
    this.selectedColor.set(color);
  }

  selectSize(size: string): void {
    this.selectedSize.set(size);
  }

  addToCart(): void {
    if (this.isAdded() || this.isAdding()) return;
    this.isAdding.set(true);
    setTimeout(() => {
      this.isAdding.set(false);
      this.isAdded.set(true);
      this.quantity.update(q => q + 1);
      
      setTimeout(() => {
        this.isAdded.set(false);
      }, 2000);
    }, 1000);
  }
}
