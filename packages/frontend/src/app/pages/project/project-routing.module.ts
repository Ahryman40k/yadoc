import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectViewerComponent } from './project-viewer/project-viewer.component';


const routes: Routes = [
  { path: '', component: ProjectViewerComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
