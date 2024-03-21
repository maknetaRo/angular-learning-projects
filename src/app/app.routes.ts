import { Routes } from '@angular/router';
import { PHomeComponent } from './pages/p-home/p-home.component';
import { PCounterComponent } from './pages/p-counter/p-counter.component';
import { PSliderComponent } from './pages/p-slider/p-slider.component';
import { PSimpleSearchComponent } from './pages/p-simple-search/p-simple-search.component';

export const routes: Routes = [
  { path: '', component: PHomeComponent },
  { path: 'counter', component: PCounterComponent },
  { path: 'slider', component: PSliderComponent },
  { path: 'simple-search', component: PSimpleSearchComponent },
];
