import { Component } from '@angular/core';
import {ItunesService} from '../itunes.service';


@Component({
  // sets base for module-relative loading of templateUrl
  // moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  providers: [ItunesService]
})
export class SearchComponent {
searchStr: string;
public searchRes: string;

  constructor(private itunesService:ItunesService) {
  }

  // Search based on users input

      searchMusic(){
          this.itunesService.searchMusic(this.searchStr)
              .subscribe(res => {
                  this.searchRes = res.artists.items;
              })
      }

}
