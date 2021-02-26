import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { filter, map, switchMap, take, tap } from "rxjs/operators";
import { PageCategory } from "../models/page-category.interface";
import { Page } from "../models/page.interface";

@Injectable({
    providedIn: 'root'
  })
export class ScrollsService {
    private pageList$: Observable<Page[]>;
    private categoryList$: Observable<PageCategory[]>;
    private defaultPage: Page;
    
    constructor(http: HttpClient) {
        let pages$ = http.get('../assets/scrolls/pageData.json');
        let categories$ = http.get('../assets/scrolls/pageCategoryData.json');

        this.pageList$ = pages$.pipe(
            map(responsePayload => {
                return responsePayload as Page[];
            }),
            take(1)
        );

        this.categoryList$ = categories$.pipe(
            map(responsePayload => {
                return responsePayload as PageCategory[];
            }),
            take(1)
        );

        this.defaultPage = {
            "fragment": "",
            "category": "",
            "displayName": "Welcome",
            "pageUrl": "../assets/scrolls/pages/welcome.md"
        }
    }

    public getPages(): Observable<Page[]> {
        return this.pageList$;
    }

    public getCategories(): Observable<PageCategory[]> {
        return this.categoryList$;
    }

    public getPageFromFragment(fragment: string): Observable<Page> {
        let page = this.pageList$.pipe(
            map(pages => {
                for (var item of pages) {
                    if (item.fragment === fragment) {
                        return item;
                    }
                }

                return this.defaultPage;
            })
        );

        return page;
    }
}