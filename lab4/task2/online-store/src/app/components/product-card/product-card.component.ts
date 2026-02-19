import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  // для галереи (thumbnail -> main)
  selectedImage?: string;

  ngOnInit() {
    this.selectedImage = this.product.image;
  }

  setImage(url: string) {
    this.selectedImage = url;
  }

  getStars(): { filled: boolean }[] {
    const rating = Math.max(0, Math.min(5, this.product.rating));
    const full = Math.floor(rating);
    return Array.from({ length: 5 }, (_, i) => ({ filled: i < full }));
  }

  openKaspi() {
    window.open(this.product.link, '_blank', 'noopener,noreferrer');
  }

  shareWhatsApp() {
    const text = `Check out this product: ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
