import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleList } from './module-list.component';


const routes: Routes = [
  { path: '', component: ModuleList, pathMatch:'full', data: {} },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleListRoutingModule { }
