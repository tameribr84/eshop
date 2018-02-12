import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { ConfigProvider } from '../../providers/config/config';
import { ProductlistPage } from '../productlist/productlist';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  public productlistPage = ProductlistPage;
  
  public cateList = [];
  public popList = [];
  public prodListByCate = [];
  public selected: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public httpSerivceProvider: HttpServiceProvider,
    public config: ConfigProvider) {

      // Get Category List
      this.getCateList();
    
    // for(let i=0;i<20;i++){
    //   this.cateList.push('cate ' + i);
    // }

    // for(let i=0;i<10;i++){
    //   this.popList.push({
    //     pic: 'assets/imgs/0' +i+ '.jpg',
    //     title: i+'th'
    //   });
    // } 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  getCateList() {
    var apiUrl = 'api/pcate';
    this.httpSerivceProvider.getResult(apiUrl, (data)=> {
      console.log('Cate List => ' + JSON.stringify(data, null, 4));
      this.cateList = data.result;    
      console.log('Cate List => ' + JSON.stringify(this.cateList, null, 4));
      this.getProdByCate(this.cateList[0]['_id']);
    })
  }

  getProdByCate(cid) {
    let apiUrl = 'api/pcate?pid=' + cid;
    this.selected = cid;

    this.httpSerivceProvider.getResult(apiUrl, (data) => {
      console.log('Product list by cate => ' + JSON.stringify(data, null, 4));
      this.prodListByCate = data.result;
    });
  }

}
