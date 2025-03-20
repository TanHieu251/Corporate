import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: false,

  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  @Input() product: any;
}
  