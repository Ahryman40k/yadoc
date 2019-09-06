import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import { concatMap, flatMap, map, tap } from 'rxjs/operators';
import { Converter, Metadata } from 'showdown';


export interface IChapter {
  file: string;
  url: string;

  metadata?: Metadata;
}


@Injectable({
  providedIn: 'root'
})
export class ProjectNavigatorService {

  constructor(private httpClient: HttpClient) {

  }


  markdown(path: { program: string, project: string, chapter?: string }): Observable<string> {
    const options: Object = { responseType: 'text' };
    return this.httpClient.get<string>(`/assets/doc/${path.program}/${path.project}/${path.chapter ? path.chapter : 'index.md'}`, options);
  }



  chapters(path: { program: string, project: string }): Observable<IChapter[]> {
    const options: Object = { responseType: 'text' };

    /*
return of(`/assets/doc/${path.program}/${path.project}/_chapters.json`).pipe(
      concatMap(url => this.httpClient.get<string[]>(url)), // map do
      map(response => response.map(r => `/assets/doc/${path.program}/${path.project}/${r}`)),
      flatMap(urls => forkJoin(urls.map(url => this.httpClient.get<string>(url, options)))),
      // tap(responses => console.log(responses)),
      map(responses => responses.map(md => {

        const conv = new Converter({ metadata: true });
        const html = conv.makeHtml(md);
        const metadata = conv.getMetadata(); // returns an object with the document metadata

        const title = typeof (metadata) === "object" ? metadata.title : metadata;

        return title ? title : 'Metadata is missing';
      })
      ),
      // tap(metadata => console.log(metadata))
    )

    */

    const chapters = of(`/assets/doc/${path.program}/${path.project}/_chapters.json`);

    const details = chapters.pipe(
      concatMap(url => this.httpClient.get<string[]>(url)),
      map(response => response.map(r => {
        return <IChapter>{
          file: r,
          url: `/assets/doc/${path.program}/${path.project}/${r}`
        }
      })),
      tap(obj => console.log(obj))
    );

    const metadata = chapters.pipe(
      concatMap(url => this.httpClient.get<string[]>(url)),
      map(response => response.map(r => `/assets/doc/${path.program}/${path.project}/${r}`)),
      flatMap(urls => forkJoin(urls.map(url => this.httpClient.get<string>(url, options)))),
      map(responses => responses.map(md => {

        const conv = new Converter({ metadata: true });
        const html = conv.makeHtml(md);
        return conv.getMetadata(); // returns an object with the document metadata
      })),
      tap(obj => console.log(obj))
    );

    return combineLatest(
      details,
      metadata,
      (d: IChapter[], m: string[]) => {
        let result = [];
        for (let detailIdx = 0; detailIdx < d.length; ++detailIdx) {
          result.push({
            file: d[detailIdx].file,
            url: d[detailIdx].url,
            metadata: m[detailIdx]
          })
        }
        return <IChapter[]>result;
      }
    );

  }

}
