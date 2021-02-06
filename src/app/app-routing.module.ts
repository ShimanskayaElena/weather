import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DomainComponent } from './domain/domain.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '', component: DomainComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
