import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ChipsComponent } from './chips/chips.component';
import { TableresComponent } from './tableres/tableres.component';
import { DataTablesModule } from 'angular-datatables';
import { TableColpComponent } from './table-colp/table-colp.component';


@NgModule({
  declarations: [
    
  
    ChipsComponent,
            TableresComponent,
            TableColpComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    DataTablesModule,
  ]
})
export class CoreModule { }
