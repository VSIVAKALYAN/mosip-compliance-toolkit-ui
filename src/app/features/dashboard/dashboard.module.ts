import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProjectsDashboardComponent } from './projects-dashboard/projects-dashboard.component';
import { BreadcrumbModule, BreadcrumbService  } from 'xng-breadcrumb';
import { MaterialModule } from '../../core/material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    ProjectsDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BreadcrumbModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BreadcrumbService]
})
export class DashboardModule { }