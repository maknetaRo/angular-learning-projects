import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PHomeComponent } from './pages/p-home/p-home.component';
import { OHeaderComponent } from './components/shared/organisms/o-header/o-header.component';
import { OFooterComponent } from './components/shared/organisms/o-footer/o-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PHomeComponent,
    OHeaderComponent,
    OFooterComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learning-projects';
}
