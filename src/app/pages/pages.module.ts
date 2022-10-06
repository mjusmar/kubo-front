import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import {MatIconModule} from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    MatIconModule,
    FormsModule
  ]
})
export class PagesModule { }
