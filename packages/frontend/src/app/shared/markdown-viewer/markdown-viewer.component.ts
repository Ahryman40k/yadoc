import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Converter, ShowdownExtension, } from 'showdown';


   
   
  
@Component({
  selector: 'app-markdown-viewer',
  templateUrl: './markdown-viewer.component.html',
  styleUrls: ['./markdown-viewer.component.scss']
})
export class MarkdownViewerComponent implements OnInit, OnChanges {

  @Input()
  data: string = '';

  html: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    const { data } = changes;
    if (data) {
      const conv = new Converter({ metadata: true });
      // conv.addExtension( myext );

      this.html = conv.makeHtml(data.currentValue);
    }
  }

}
