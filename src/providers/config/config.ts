import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {
  public apiUrl = 'http://39.108.159.135/';

  constructor(public http: HttpClient) {
    console.log('Hello ConfigProvider Provider');
  }

}
