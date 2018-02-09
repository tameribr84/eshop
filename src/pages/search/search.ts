import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  public search_list = ['Clothing','Shoes','Electronics','E-Readers'];
  public flag : boolean; // if true then show search result
  public list = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i=0;i<10;i++){
      this.list.push({
        pic: 'assets/imgs/0' +i+ '.jpg',
        title: i+'th'
      });
    } 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  getItems(event: any){
    let val = event.target.value;
    
    // if the value is empty string then don't show search result
    if(val && val.trim() != '') {
      this.flag = true;

    } else {
      this.flag = false;
    }

    
  }
  onItem(){
    console.log('Item clicked');
  }

}
