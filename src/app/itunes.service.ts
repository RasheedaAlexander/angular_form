// Imports
import {Injectable} from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

import 'rxjs/Rx';


@Injectable()
// Itunes service fetches
export class ItunesService {constructor(private jsonp: Jsonp) {}
  search (term: string) {

let searchUrl = 'https://itunes.apple.com/search?term=' + term + '&country=us&callback=JSONP_CALLBACK';

    return this.jsonp
               .get(searchUrl)
               .map(response => <string[]> response.json()[1]);

 }
}
