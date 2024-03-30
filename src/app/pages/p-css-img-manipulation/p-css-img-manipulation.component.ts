import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-p-css-img-manipulation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './p-css-img-manipulation.component.html',
  styleUrl: './p-css-img-manipulation.component.css',
})
export class PCssImgManipulationComponent {
  brWidth = new FormControl('');
  brColor = new FormControl('');
  brRadius = new FormControl('');
  sepiaFilter = new FormControl(0);
}
