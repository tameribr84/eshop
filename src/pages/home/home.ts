import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import Pages
import { SearchPage } from '../search/search';
import { PcontentPage } from '../pcontent/pcontent';


import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { ConfigProvider } from '../../providers/config/config';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public Pcontent = PcontentPage;

  public popList = [];
  public popListWidth = '';
  public searchPage = SearchPage;
  public slideList = [];
  public prodList = [];



  constructor(
    public navCtrl: NavController,
    public httpSeriveProvider: HttpServiceProvider,
    public config: ConfigProvider) {
    var url = this.config.apiUrl;
    this.getFocue();
    this.getAllProd();
    this.getPop();



    // for (let i = 0; i < 10; i++) {
    //   this.popList.push({
    //     pic: 'assets/imgs/0' + i + '.jpg',
    //     title: i + 'th'
    //   });
    // }
    


  }

  onTap() {
    console.log('Search Bar Tapped');
    this.navCtrl.push(this.searchPage);
  }

  //Get the slide product info
  getFocue() {
    this.httpSeriveProvider.getResult('api/focus', (data) => {
      console.log('data =>' + JSON.stringify(data, null, 4));
      this.slideList = data.result;
    });
  }

  //Get all products
  getAllProd() {
    this.httpSeriveProvider.getResult('api/plist',
      (data) => {
        console.log('plist data =>' + JSON.stringify(data, null, 4));
        this.prodList = data.result;
      });
  }

  // Get Popular products
  getPop() {
    this.httpSeriveProvider.getResult('api/plist?is_best=1',
      (data) => {
        console.log('Best product => ' + JSON.stringify(data, null, 4));
        this.popList = data.result;
        this.popListWidth = this.popList.length * 92 + 'px';
        console.log('popListWidth = ' + this.popListWidth);
      })
  }



}
