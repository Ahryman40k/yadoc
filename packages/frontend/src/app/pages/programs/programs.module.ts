import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule } from '@angular/material';
import { DocumentationItems } from 'src/app/shared/documentation-items.ts/documentation-items';
import { ProgramListComponent } from './program-list/program-list.component';
import { ProgramComponent } from './program/program.component';
import { ProgramsRoutingModule } from './programs-routing.module';



@NgModule({
  declarations: [  
  ProgramListComponent, 
  ProgramComponent
],
providers: [
  DocumentationItems
],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    ProgramsRoutingModule,    
    HttpClientModule
  ]
})
export class ProgramsModule { }
