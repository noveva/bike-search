import { Routes } from '@angular/router';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { BikesDetailsComponent } from './bikes-details/bikes-details.component';

export const routes: Routes = [
  {
    path: '',
    component: BikesListComponent
  },
  {
    path: 'bikes/:id',
    component: BikesDetailsComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
