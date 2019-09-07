import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectViewerComponent } from './project-viewer/project-viewer.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectNavigatorService } from './project-navigator.service';
import { MarkdownViewerModule } from 'src/app/shared/markdown-viewer/markdown-viewer.module';
import { MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { TableOfContentsModule } from 'src/app/shared/table-of-contents/table-of-contents.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProjectViewerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ProjectRoutingModule,
    MarkdownViewerModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    TableOfContentsModule,
  ],
  providers: [
    ProjectNavigatorService,
  ]
})
export class ProjectModule { }
