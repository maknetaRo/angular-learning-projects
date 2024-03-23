import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { IMAGES } from '../../../constants';

@Component({
  selector: 'app-p-simple-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './p-simple-search.component.html',
  styleUrl: './p-simple-search.component.css',
})
export class PSimpleSearchComponent {
  keyword = new FormControl('');
  images = IMAGES;
  filteredImages = IMAGES;

  filterImages() {
    const param = this.keyword.value?.toLowerCase() || '';
    console.log(param);
    this.filteredImages = this.images.filter((image) => {
      const match = image.title.toLowerCase().includes(param);
      return match;
    });
  }
}
