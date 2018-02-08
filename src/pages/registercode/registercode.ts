import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterpasswordPage } from '../registerpassword/registerpassword';

/**
 * Generated class for the RegistercodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registercode',
  templateUrl: 'registercode.html',
})
export class RegistercodePage {
  public regPwdPage = RegisterpasswordPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistercodePage');
  }

  goPwd() {
  
    console.log('Go Pwd Pressed');
    this.navCtrl.push(this.regPwdPage);
    
  }

}
