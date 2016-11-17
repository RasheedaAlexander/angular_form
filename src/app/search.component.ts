import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {SearchPipe} from './search.pipe';


import {ItunesService} from './itunes.service';

import 'rxjs/add/operator/map';


@Component({
  selector: 'search',
  templateUrl: 'search.component.html',
  providers: [ ItunesService ]
})
export class SearchComponent {
  title   = 'Itunes Search';
  fetches = 'Fetches after each keystroke';
  items: Observable<string[]>;

  search (term) {
    this.itunesService.search(term).then(result => {
      // Clear previous items
      this.items = null;
      if(result.results.length > 0){
        this.items = result.results;
      } else{
        this.fetches = "No results for \"" + term + "\"";
      }
    });
  }

  constructor (private itunesService: ItunesService) { }

}
