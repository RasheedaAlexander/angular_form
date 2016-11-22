// Imports
import {Injectable} from '@angular/core';
import { Jsonp } from '@angular/http';

import 'rxjs/Rx';
// @Injectable decorator tells Angular that this class is meant to be used as a provider to other components
@Injectable()
// Itunes service fetches
export class ItunesService {
  constructor(private jsonp: Jsonp) {
  }

  search (term: string) {
    //ITunes search url
    //includes callback
    let searchUrl = "https://itunes.apple.com/search?term=" + term + "&country=us&limit=10&callback=JSONP_CALLBACK";  // the user's search value
    // console.log(searchUrl + " Search URL");
    // console.log(URLSearchParams + " URL Search Params");

    return this.jsonp.request(searchUrl).map(response => {
      return response.json();
    }).toPromise();
  }

  //log error
  logError(error){
    console.log("Whoops! Something went wrong");
  }
}
