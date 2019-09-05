import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { first, filter, map, tap, mergeAll } from 'rxjs/operators';

export interface IDocumentationProject {
  _id: string;
  _ownerId: string;
  name: string;
  summary: string;
  repository: string;
  docPath?: string;
}


export interface IDocumentationProgram {
  name: string;
  id: string;
  summary: string;
  projects: IDocumentationProject[];
}



@Injectable()
export class DocumentationItems {

  private programs = new BehaviorSubject<IDocumentationProgram[]>([]);


  constructor(private httpClient: HttpClient) {
    this.httpClient.get<IDocumentationProgram[]>('/assets/doc/_deepdoc.json').subscribe(data => {
      this.programs.next(data);
    })
  }

  Programs(): Observable<IDocumentationProgram[]> {
    return this.programs.asObservable();
  }

  programDetails(id: string): Observable<IDocumentationProgram> {
    return this.programs.pipe(
      map(ps => ps.find(p => p.id === id))
    )
  }

  projects(): Observable<IDocumentationProject[]> {
    return this.programs.pipe(
      map(ps => {
        const projects = ps.map(p => p.projects);
        return [].concat(...projects);
      })
    )
  }


  projectDetails(id: string): Observable<IDocumentationProject> {
    return this.programs.pipe(
      map(programs => {
        const program = programs.find(program => program.projects.filter(p => p._id === id).length > 0 );
        return program ? program.projects.find(p => p._id === id): undefined;
      }),
      tap(item => {
        console.log(item)
      })
    )
  }
}
