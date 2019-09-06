import { Component, OnInit } from '@angular/core';
import { IDocumentationProgram, DocumentationItems, IDocumentationProject } from 'src/app/shared/documentation-items.ts/documentation-items';
import { ActivatedRoute } from '@angular/router';
import { ProjectNavigatorService, IChapter } from '../project-navigator.service';

@Component({
  selector: 'app-project-viewer',
  templateUrl: './project-viewer.component.html',
  styleUrls: ['./project-viewer.component.scss']
})
export class ProjectViewerComponent implements OnInit {

  markdown: string;
  chapters: IChapter[];

  project: IDocumentationProject;

  constructor(
    private route: ActivatedRoute,
    private contentProvider: ProjectNavigatorService,
    private docItems: DocumentationItems,
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const { projectId } = params;

      this.docItems.projectDetails(projectId).subscribe(project => {

        if (project) {
          this.project = project;

          this.loadMarkdown({ file: 'index.md', url: '' });

          this.contentProvider.chapters({ program: project._ownerId, project: project.name }).subscribe(chapters => {
            console.log(chapters);
            this.chapters = chapters;
          })
        }

      });

    });

  }

  loadMarkdown(c: IChapter) {
    this.contentProvider.markdown({ program: this.project._ownerId, project: this.project.name, chapter: c.file  }).subscribe(md => {
      console.log(md);
      this.markdown = md;
    })
  }

}
