import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { InfiniteScroll } from 'ionic-angular/components/infinite-scroll/infinite-scroll';
import { ConfigProvider } from '../../providers/config/config';

/**
 * Generated class for the ProductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productlist',
  templateUrl: 'productlist.html',
})
export class ProductlistPage {
  public prodList = [];
  public page = 1;
  public cid ='';


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public httpServiceProvider: HttpServiceProvider,
    public config: ConfigProvider) {
    this.cid = this.navParams.get('cid');

    console.log('cid => ' + this.cid);
    this.getProdList('');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductlistPage');
  }

  getProdList(infiniteScroll){
    let apiUrl = 'api/plist?cid=' + this.cid + '&pageSize=10&page=' + this.page;
    console.log('apiUrl => ' + apiUrl);

    this.httpServiceProvider.getResult(apiUrl, (data) => {
      console.log('ProdList => ' + JSON.stringify(data, null, 4));

      // Concatenate data to product list
      this.prodList = this.prodList.concat(data.result); 
      if(infiniteScroll){
        console.log('inifinite scroll start');
        infiniteScroll.complete();

        // Disable the infinite scroll from actively trying 
        // to receive new data while scrolling when the length
        // of rest data is less than 10
        if(data.result.length < 10) {
          infiniteScroll.enable(false);
        }
      } else {
        console.log('no infinite scroll');
      }
      this.page++;
    });

  }


  // Load more data when scroll down to the bottom of the page
  loadMore(infiniteScroll: InfiniteScroll){
    this.getProdList(infiniteScroll);

  }


}
