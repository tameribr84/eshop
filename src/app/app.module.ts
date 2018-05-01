import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

// Import Http Module
import { HttpClientModule } from '@angular/common/http';


// Import New Tabs
import { CategoriesPage } from '../pages/categories/categories';
import { CartPage } from '../pages/cart/cart';
import { MyPage } from '../pages/my/my';


// Import New Pages
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { RegistercodePage } from '../pages/registercode/registercode';
import { RegisterpasswordPage} from '../pages/registerpassword/registerpassword';

// Import Search Page
import { SearchPage } from '../pages/search/search';
import { PcontentPage } from '../pages/pcontent/pcontent';

// Import Product List Page
import { ProductlistPage } from '../pages/productlist/productlist';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigProvider } from '../providers/config/config';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { StorageProvider } from '../providers/storage/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CategoriesPage,
    CartPage,
    MyPage,
    LoginPage,
    RegisterPage,
    RegistercodePage,
    RegisterpasswordPage,
    SearchPage,
    ProductlistPage,
    PcontentPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //IonicModule.forRoot(MyApp)
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true' // Hide Taps on sub pages
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CategoriesPage,
    CartPage,
    MyPage,
    LoginPage,
    RegisterPage,
    RegistercodePage,
    RegisterpasswordPage,
    SearchPage,
    ProductlistPage,
    PcontentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
    HttpServiceProvider,
    StorageProvider
  ]
})
export class AppModule {}
