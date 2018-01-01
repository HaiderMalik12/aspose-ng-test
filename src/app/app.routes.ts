import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import {ComplaintViewComponent} from './complaint-view/complaint-view.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'complaint', component: ComplaintViewComponent },
  { path: '**', redirectTo: '' }
];
