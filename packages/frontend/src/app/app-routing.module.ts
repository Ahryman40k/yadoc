import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent as Homepage } from './pages/homepage/home.page';


const routes: Routes = [
  { path: '', component: Homepage, pathMatch:'full', data: {} },
  { path: 'programs', loadChildren: './pages/programs/programs.module#ProgramsModule'},
  { path: 'programs/:id/:projectId', loadChildren: './pages/project/project.module#ProjectModule'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
