import { Routes } from '@angular/router';
import { AdventureComponent } from './components/pages/adventure/adventure.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'adventure', component: AdventureComponent },
  { path: '**', component: NotFoundComponent }
];
