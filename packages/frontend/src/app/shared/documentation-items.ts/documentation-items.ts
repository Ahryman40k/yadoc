import {Injectable} from '@angular/core';

export interface DocModule {
  id: string;
  name: string;
  summary?: string;
}


export interface DocModules {
  summary: string;
  modules: DocModule[];
}


const MODULES = {
  summary: 'Hvs doc of everything', 
  modules: [{
  id: 'abcd-efgh-ijkl',
  name: 'module doc 1',
  summary: 'It is about something unbelievable'
},{
  id: 'abcd-efdf-ijkl',
  name: 'module doc 2',
  summary: 'Another unbelievable fact'
}]
}


@Injectable()
export class DocumentationItems {
  getModules(): DocModules {
    return MODULES;
  }


}
