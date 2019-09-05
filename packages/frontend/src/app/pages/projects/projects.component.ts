import { Component, OnInit } from '@angular/core';
import { DocumentationItems, IDocumentationProject } from 'src/app/shared/documentation-items.ts/documentation-items';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Observable<IDocumentationProject[]>

  constructor(
    public docItems: DocumentationItems,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.projects = this.docItems.projects()

  }

}
