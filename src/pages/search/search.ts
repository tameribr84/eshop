import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

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
  public searchQuery = '';
  public searchResult = [];
  public page = 1;
  public pageSize = 5;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public config: ConfigProvider,
    public httpServiceProvider: HttpServiceProvider) {
      this.flag = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  // getItems(event: any){
  //   let val = event.target.value;
    
  //   // if the value is empty string then don't show search result
  //   if(val && val.trim() != '') {
  //     this.flag = true;

  //   } else {
  //     this.flag = false;
  //   }  
  // }
  onItem(){
    console.log('Item clicked');
  }

  

  getSearchResult(infiniteScroll) {
    this.flag = true;

    // Load the search page for the first time, when "Search" button clicked;
    if (!infiniteScroll) {
        this.page = 1;
    }
    console.log('Search Keyword => ' + this.searchQuery);
    let apiUrl = 'api/plist?search=' + this.searchQuery +  '&pageSize=' + this.pageSize + '&page=' + this.page;
    console.log('Search apiUrl => ' + apiUrl);
    this.httpServiceProvider.getResult(apiUrl, (data) => {
      console.log('Search Result => ' + JSON.stringify(data, null, 4))
      if(this.page == 1) {
        this.searchResult = data.result; 
      } else {
        this.searchResult = this.searchResult.concat(data.result);
      }
      
      if(infiniteScroll){
          infiniteScroll.complete();
          if(data.result.length < 10){
            infiniteScroll.enable(false);
          }
      }
      this.page++;
    });
    
  }

  // Load More Date 
  loadMore(infiniteScroll) {
    this.getSearchResult(infiniteScroll);
  }

}
