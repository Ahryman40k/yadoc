import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { MatCardModule, MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ProjectsRoutingModule,
  ],
  exports: [
    ProjectsComponent,
  ]
})
export class ProjectsModule { }
