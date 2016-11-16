import { Component } from '@angular/core';
import {ItunesService} from './itunes.service';

@Component({
  // moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItunesService]
})
export class AppComponent {
  title="Hello";
}
