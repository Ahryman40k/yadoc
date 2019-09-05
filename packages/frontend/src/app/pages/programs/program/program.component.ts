import { Component, OnInit } from '@angular/core';
import { IDocumentationProgram, DocumentationItems } from 'src/app/shared/documentation-items.ts/documentation-items';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  program: IDocumentationProgram;

  constructor(private route: ActivatedRoute,
    private docItems: DocumentationItems) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

 
      this.docItems.programDetails(id).subscribe( v => {

        this.program = v;
      } );

    });


  }

}
