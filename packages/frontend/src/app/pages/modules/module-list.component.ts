import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DocumentationItems } from 'src/app/shared/documentation-items.ts/documentation-items';
import { Observable, Subscription, combineLatest } from 'rxjs';


@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleList implements OnInit, OnDestroy {
  params: Observable<Params>;
  routeParamSubscription: Subscription;
  _categoryListSummary: string;

  constructor(
    public docItems: DocumentationItems,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.routeParamSubscription.unsubscribe();
  }
}