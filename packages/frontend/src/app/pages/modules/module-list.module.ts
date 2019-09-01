import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleListRoutingModule } from './module-list-routing.module';
import { ModuleList } from './module-list.component';
import { MatCardModule } from '@angular/material';



@NgModule({
  declarations: [  
    ModuleList,
  ],
  imports: [
    CommonModule,
    ModuleListRoutingModule,
    MatCardModule,
    
  ]
})
export class ModuleListModule { }
