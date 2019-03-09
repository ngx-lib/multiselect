import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocComponent } from './doc/doc.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: 'home', component: HomeComponent },
        { path: 'docs/:topic', component: DocComponent },
        { path: 'docs', redirectTo: 'docs/getting-started' },
        { path: '**', redirectTo: '/home' }
      ],
      { useHash: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
