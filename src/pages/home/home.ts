import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public popList = [];
  public popListWidth='';
  public searchPage = SearchPage;
  

  constructor(public navCtrl: NavController) {

    for(let i=0;i<10;i++){
      this.popList.push({
        pic: 'assets/imgs/0' +i+ '.jpg',
        title: i+'th'
      });
    } 
    this.popListWidth = this.popList.length*92 + 'px';
    console.log('popListWidth = ' + this.popListWidth);
  }

  onTap() {
    console.log('Search Bar Tapped');
    this.navCtrl.push(this.searchPage);
  }

}
