import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-p-pass-message',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './p-pass-message.component.html',
  styleUrl: './p-pass-message.component.css',
})
export class PPassMessageComponent {
  form = new FormGroup({
    message: new FormControl(''),
  });
  sentMessage = '';

  sendMessage() {
    this.sentMessage = this.form.value.message || '';
  }

  resetForm() {
    if (this.sentMessage) {
      this.sentMessage = '';
      this.form.controls['message'].setValue('');
    }
    if (this.form.value) {
      this.form.controls['message'].setValue('');
    }
  }
}
