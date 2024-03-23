import { Component, Input } from '@angular/core';
import { IMAGES } from '../../../constants';

@Component({
  selector: 'p-slider',
  standalone: true,
  imports: [],
  templateUrl: './p-slider.component.html',
  styleUrl: './p-slider.component.css',
})
export class PSliderComponent {
  images = IMAGES;
  index = 0;
  image = this.images[0].url;
  alt = this.images[0].title;

  nextImage() {
    this.index = (this.index + 1) % this.images.length;
    this.image = this.images[this.index].url;
    this.alt = this.images[this.index].title;
  }
  previousImage() {
    // reminder of a negative number can be negative in Javascript, that's why we're adding the image length before applying the modulus. It ensures that the value will be always positive.
    this.index = (this.index - 1 + this.images.length) % this.images.length;
    console.log(this.index);
    this.image = this.images[this.index].url;
    this.alt = this.images[this.index].title;
  }
}
