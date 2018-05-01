import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { ConfigProvider } from '../../providers/config/config';

/**
 * Generated class for the PcontentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pcontent',
  templateUrl: 'pcontent.html',
})
export class PcontentPage {

  public tabs = 'plist';
  public item = {};
  public baseUrl = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpServiceProvider,
    public config: ConfigProvider
  ) {
    this.baseUrl = this.config.apiUrl;
    this.getData()
    // console.log()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PcontentPage');
    console.log('navParams => ' + this.navParams.get('id'));
  }

  getData() {
    const id = this.navParams.get('id');
    const url = 'api/pcontent?id=' + id;
    this.http.getResult(url, (data) => {
      // console.log('getData =>' + JSON.stringify(data, null, 4));
      this.item = data['result'];
    });
  }
}
