import { Routes } from '@angular/router';
import { TableComponent } from './components/table-component/table-component';
import { FormComponent } from './components/form-component/form-component';
import { LandingComponent } from './components/landing-component/landing-component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: LandingComponent },
  { path: 'table', component: TableComponent },
  { path: 'form', component: FormComponent },
];
