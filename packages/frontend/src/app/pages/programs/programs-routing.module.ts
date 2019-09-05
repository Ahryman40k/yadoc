import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramListComponent } from './program-list/program-list.component';
import { ProgramComponent } from './program/program.component';


const routes: Routes = [
  { path: '', component: ProgramListComponent, pathMatch:'full', data: {} },
  { path: ':id', component: ProgramComponent, pathMatch:'full', data: {} },
  
  // { path: ':id/:projectId', loadChildren:   '../project/project.module#ProjectModule' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
