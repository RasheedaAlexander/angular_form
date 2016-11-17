import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {ItunesService} from './itunes.service';

import 'rxjs/add/operator/map';


@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ ItunesService ]
})
export class AppComponent {
  title   = 'Itunes Search';
  fetches = 'Fetches after each keystroke';
  items: Observable<string[]>;

  search (term: string) {
    this.items = this.itunesService.search(term);
  }
  constructor (private itunesService: ItunesService) { }
}
