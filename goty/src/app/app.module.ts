import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { GotyComponent } from './pages/goty/goty.component';
import { LandingComponent } from './pages/landing/landing.component';

@NgModule({
  declarations: [AppComponent, LandingComponent, GotyComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
