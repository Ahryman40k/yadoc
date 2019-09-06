import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableOfContentsComponent } from './table-of-contents.component';


@NgModule({
  declarations: [
      TableOfContentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    TableOfContentsComponent,
  ],
  entryComponents:[
      TableOfContentsComponent,
  ]
})
export class TableOfContentsModule { }
