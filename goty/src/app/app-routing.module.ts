import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GotyComponent } from './pages/goty/goty.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'goty', component: GotyComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'landing' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
