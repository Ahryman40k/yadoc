import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Converter } from 'showdown';

@Injectable({
  providedIn: 'root'
})
export class ProjectNavigatorService {

  constructor( private httpClient: HttpClient ){
    
  }
  

  markdown( path:{program: string, project: string, content?:string}): Observable<string> {
    const options: Object = {responseType: 'text'};
    return this.httpClient.get<string>( `/assets/doc/${path.program}/${path.project}/${ path.content? path.content : 'index.md' }`, options );
  }

  chapters(path:{program: string, project: string}): Observable<string[]> {

    const md = `
---
title: Blogging Like a Hacker
---

# PATI Backend Server

All our fuckin' knowledges about this server
`;

    const conv = new Converter({metadata: true});
    const html = conv.makeHtml(md);
    const metadata = conv.getMetadata(); // returns an object with the document metadata
    return of([metadata as string]) ;
  }


}
