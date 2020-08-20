import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent, ChartComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, ChartComponent],
})
export class ComponentsModule {}
