import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ChipsComponent } from './chips/chips.component';
import { TableresComponent } from './tableres/tableres.component';
import { TableColpComponent } from './table-colp/table-colp.component';
import { AsplitComponent } from './asplit/asplit.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { DraggableComponent } from './draggable/draggable.component';
import { LibComponent } from './lib/lib.component';
import { NavscrollComponent } from './navscroll/navscroll.component';
import { GittabComponent } from './gittab/gittab.component';

const routes: Routes = [
{
  path: '',
  component: LayoutComponent,
  children: [
    {path:'chips',component:ChipsComponent},
    {path:'table',component:TableresComponent},
    {path:'table_col',component:TableColpComponent},
    {path:'asplit',component:AsplitComponent},
    {path:'host-listener',component:KeyboardComponent},
    {path:'drag',component:DraggableComponent},
    {path:'lib',component:LibComponent},
    {path:'git',component:GittabComponent},
    {path:'navscroll',component:NavscrollComponent}
  ]
}
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
