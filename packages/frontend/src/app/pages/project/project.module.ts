import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectViewerComponent } from './project-viewer/project-viewer.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectNavigatorService } from './project-navigator.service';
import { MarkdownViewerModule } from 'src/app/shared/markdown-viewer/markdown-viewer.module';
import { MatIconModule, MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [
    ProjectViewerComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MarkdownViewerModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [
    ProjectNavigatorService,
  ]
})
export class ProjectModule { }
