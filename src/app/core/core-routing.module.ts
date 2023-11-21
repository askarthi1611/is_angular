import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ChipsComponent } from './chips/chips.component';
import { TableresComponent } from './tableres/tableres.component';
import { TableColpComponent } from './table-colp/table-colp.component';
import { AsplitComponent } from './asplit/asplit.component';

const routes: Routes = [
{
  path: '',
  component: LayoutComponent,
  children: [
    {path:'chips',component:ChipsComponent},
    {path:'table',component:TableresComponent},
    {path:'table_col',component:TableColpComponent},
    {path:'asplit',component:AsplitComponent}
  ]
}
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
