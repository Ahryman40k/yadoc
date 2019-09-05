import { Component, OnInit } from '@angular/core';
import { IDocumentationProgram, DocumentationItems } from 'src/app/shared/documentation-items.ts/documentation-items';
import { ActivatedRoute } from '@angular/router';
import { ProjectNavigatorService } from '../project-navigator.service';

@Component({
  selector: 'app-project-viewer',
  templateUrl: './project-viewer.component.html',
  styleUrls: ['./project-viewer.component.scss']
})
export class ProjectViewerComponent implements OnInit {

  markdown: string;
  projectId: string;

  constructor(
    private route: ActivatedRoute, 
    private contentProvider: ProjectNavigatorService) { 

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const {id, projectId } = params;

      this.projectId = projectId;

      this.contentProvider.markdown({ program: id, project: projectId}).subscribe ( md => {
        console.log(md);
        this.markdown = md;
      })
 
      this.contentProvider.chapters({ program: id, project: projectId}).subscribe ( md => {
        console.log(md);

      })

    });


  }

}
