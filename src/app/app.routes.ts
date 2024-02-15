import { Routes } from '@angular/router';
import { BikesListComponent } from './bikes-list/bikes-list.component';

export const routes: Routes = [
  {
    path: '',
    component: BikesListComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
