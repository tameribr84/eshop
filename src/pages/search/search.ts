import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, AlertController } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { StorageProvider } from '../../providers/storage/storage';

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
  @ViewChild(Content) content: Content;

  public search_list = ['Clothing', 'Shoes', 'Electronics', 'E-Readers'];
  public flag: boolean; // if true then show search result
  public list = [];
  public searchQuery = '';
  public searchResult = [];
  public page = 1;
  public pageSize = 10;
  public hasData = true;
  public historyList = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public config: ConfigProvider,
    public httpServiceProvider: HttpServiceProvider,
    public storageService: StorageProvider,
    public alertCtrl: AlertController
  ) {
    this.flag = false;
    // Get search history
    this.getHistory();
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
  onItem() {
    console.log('Item clicked');
  }



  getSearchResult(infiniteScroll) {
    this.flag = true;

    // Load the search page for the first time, when "Search" button clicked;
    if (!infiniteScroll) {
      this.page = 1;
      this.hasData = true;
      this.content.scrollToTop(0);

      /* call save search history */
      this.saveHistory();
    }
    console.log('Search Keyword => ' + this.searchQuery);
    let apiUrl = 'api/plist?search=' + this.searchQuery + '&pageSize=' + this.pageSize + '&page=' + this.page;
    console.log('Search apiUrl => ' + apiUrl);
    this.httpServiceProvider.getResult(apiUrl, (data) => {
      // console.log('Search Result => ' + JSON.stringify(data, null, 4))
      if (this.page == 1) {
        this.searchResult = data.result;
      } else {
        this.searchResult = this.searchResult.concat(data.result);
      }

      if (infiniteScroll) {
        infiniteScroll.complete();
        if (data.result.length < 10) {
          console.log('infiniteScroll set to false');
          this.hasData = false;
        }
      }
      this.page++;
    });

  }

  // Load More Date 
  loadMore(infiniteScroll) {
    console.log('loadMore called');
    this.getSearchResult(infiniteScroll);
  }

  // Save search history
  saveHistory() {
    // get local history data
    let history = this.storageService.get('historyData');
    if (history) {
      if (history.indexOf(this.searchQuery) == -1) {
        history.push(this.searchQuery);
        this.storageService.set('historyData', history);
      }
    } else {
      this.historyList.push(this.searchQuery);
      this.storageService.set('historyData', this.historyList);
    }
  }

  // Get search history
  getHistory() {
    let history = this.storageService.get('historyData');
    if (history) {
      this.historyList = history;
    }
  }

  //////// Event Methods ////////
  /* Tap search history to search */
  goSearch(keyword) {
    this.searchQuery = keyword;
    this.getSearchResult('');
  }

  /* Press search history item to delete it */
  removeHistory(keyword) {
    console.log('delete ' + keyword);
    let confirm = this.alertCtrl.create({
      title: 'Confirm to delete?',
      message: 'Are you sure to delete this record?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => console.log('Cancel clicked')
        },
        {
          text: 'Confirm',
          handler: () => {
            // remove from historylist
            this.historyList.splice(this.historyList.indexOf(keyword), 1);
            // remove from localStroage
            this.storageService.set('historyData', this.historyList);
          }
        }
      ]
    });
    confirm.present();


  }

}
