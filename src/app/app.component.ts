import { Component } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {selector} from 'rxjs/operator/publish';
import {AppService} from './service/app.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title = 'app';
  searchText = '';
  temp: any;
  showData: any;
  constructor(private _appservice: AppService ) {}
  getSearchData() {
    this.showData = '';
    this.temp = [];
    this._appservice.getDetails().subscribe(result => {
      console.log('result', JSON.stringify(result));
      result['list'].forEach(data => {
      this.temp.push(data.main);
      });
      console.log('this.temp', this.temp);
     });
  }

  getDetails(t) {
    this.showData = {};
    this.showData = t;
    console.log('showData', this.showData);
  }
}
