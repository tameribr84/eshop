import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  
  public cateList = [];
  public popList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    for(let i=0;i<20;i++){
      this.cateList.push('cate ' + i);
    }

    for(let i=0;i<10;i++){
      this.popList.push({
        pic: 'assets/imgs/0' +i+ '.jpg',
        title: i+'th'
      });
    } 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

}
