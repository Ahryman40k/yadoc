import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-markdown-viewer',
  templateUrl: './markdown-viewer.component.html',
  styleUrls: ['./markdown-viewer.component.scss']
})
export class MarkdownViewerComponent implements OnInit {

  @Input()
  data: string = '';

  constructor() { }

  ngOnInit() {
  }

}
