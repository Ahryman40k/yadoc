import { Component, OnInit } from '@angular/core';
import { DocumentationItems, IDocumentationProgram } from 'src/app/shared/documentation-items.ts/documentation-items';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnInit {

  programObservable: Observable<IDocumentationProgram[]>

  constructor(
    public docItems: DocumentationItems,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.programObservable = this.docItems.Programs()

  }
}
