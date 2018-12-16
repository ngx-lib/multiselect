import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'dashboard', component: DashboardComponent },
      {path: '**', redirectTo: '/dashboard'}
    ], {useHash: true})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
