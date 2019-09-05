import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownViewerComponent } from './markdown-viewer.component';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [ 
    MarkdownViewerComponent,
  ],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
  ],
  exports: [
    MarkdownViewerComponent,
  ]
})
export class MarkdownViewerModule { }
