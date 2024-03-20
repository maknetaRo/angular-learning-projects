import { Component, Input } from '@angular/core';

@Component({
  selector: 'p-counter',
  standalone: true,
  imports: [],
  templateUrl: './p-counter.component.html',
  styleUrl: './p-counter.component.css',
})
export class PCounterComponent {
  @Input() number = 0;

  addOne() {
    this.number++;
  }
  minusOne() {
    this.number--;
  }
}
