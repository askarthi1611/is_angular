import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';

import { CoreRoutingModule } from './core-routing.module';
import { ChipsComponent } from './chips/chips.component';
import { TableresComponent } from './tableres/tableres.component';
import { DataTablesModule } from 'angular-datatables';
import { TableColpComponent } from './table-colp/table-colp.component';
import { AsplitComponent } from './asplit/asplit.component';
import { AngularSplitModule } from 'angular-split';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { DraggableComponent } from './draggable/draggable.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { LibComponent } from './lib/lib.component';
import { NavscrollComponent } from './navscroll/navscroll.component';
import { GittabComponent } from './gittab/gittab.component';
@NgModule({
  declarations: [ 
    ChipsComponent,
    TableresComponent,
    TableColpComponent,
    AsplitComponent,
    KeyboardComponent,
    DraggableComponent,
    LibComponent,
    NavscrollComponent,
    GittabComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    DataTablesModule,
    AngularSplitModule,
    AngularDraggableModule,
    TabViewModule
  ]
})
export class CoreModule { }
