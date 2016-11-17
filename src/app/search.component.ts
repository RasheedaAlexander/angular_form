import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import {SearchPipe} from './search.pipe';


import {ItunesService} from './itunes.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'search',
  templateUrl: 'search.component.html',
  // styleUrls: ['search.component.css'],
  providers: [ ItunesService ]
})
export class SearchComponent {
  title   = 'Itunes Search';
  fetches = 'Search Itunes for your favorite music. Press "Enter" to submit.';
  public items: Observable<string[]>;

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
