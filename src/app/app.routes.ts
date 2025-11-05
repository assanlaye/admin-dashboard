import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Users } from './users/users';
import { Products } from './products/products';
import { Reports } from './reports/reports';
import { Settings } from './settings/settings';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'users', component: Users },
  { path: 'products', component: Products },
  { path: 'reports', component: Reports },
  { path: 'settings', component: Settings },
  { path: '**', redirectTo: '/dashboard' }
];