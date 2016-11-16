// Imports
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

// Import RxJs required methods for observables(subscribe) manually
import 'rxjs/Rx';
// import 'rxjs/add/operator/catch';


@Injectable()
// Itunes service fetches
export class ItunesService {
  private searchUrl: string;

  constructor(private _http:Http) { }


  searchMusic(str){
    let searchUrl  = 'https://itunes.apple.com/search?term='+str+'&country=us';
    return this._http.get(searchUrl).map(res =>res.json());
  }
}
