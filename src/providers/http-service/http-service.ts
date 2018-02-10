import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../config/config';


/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {


  constructor(public http: HttpClient,
    public config: ConfigProvider) {
    console.log('Hello HttpServiceProvider Provider');
  }

  getResult(url, callback) {
    let apiUrl = this.config.apiUrl + url;
    this.http.get(apiUrl).subscribe(
      data => {
        console.log(data);
        callback(data);
      },
      (err) => {
        console.log('err => ' + JSON.stringify(err, null, 4));
      });
  }
}
