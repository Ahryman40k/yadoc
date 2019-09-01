import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent as Homepage } from './pages/homepage/home.page';


const routes: Routes = [
  { path: '', component: Homepage, pathMatch:'full', data: {} },
  { path: 'modules', loadChildren: './pages/modules/module-list.module#ModuleListModule'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
