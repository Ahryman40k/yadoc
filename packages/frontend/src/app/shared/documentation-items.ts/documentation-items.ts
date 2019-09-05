import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import {  first, filter, map } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export interface IDocumentationProject {
  _id: string;
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
  

  constructor( private httpClient: HttpClient ){
    this.httpClient.get<IDocumentationProgram[]>( '/assets/doc/_deepdoc.json').subscribe( data => {
      this.programs.next( data );
    })
  }

  Programs(): Observable<IDocumentationProgram[]> {
    return this.programs.asObservable();
  }

  programDetails( id: string): Observable<IDocumentationProgram> {
    return this.programs.asObservable().pipe(
      map( ps => ps.find( p => p.id === id  ) )
    ) 
  }

  projects() {

  }


  projectDetails() {
    
  }
}
