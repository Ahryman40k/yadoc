import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule } from '@angular/material';
import { DocumentationItems } from 'src/app/shared/documentation-items.ts/documentation-items';
import { ProgramListComponent } from './program-list.component';
import { ProgramComponent } from './program.component';
import { ProgramsRoutingModule } from './programs-routing.module';
import { HttpClientModule } from '@angular/common/http';



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
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    ProgramsRoutingModule,    
  ]
})
export class ProgramsModule { }
