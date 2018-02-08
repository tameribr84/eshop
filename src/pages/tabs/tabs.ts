import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

// Import New Tabs
import { CategoriesPage } from '../categories/categories';
import { CartPage } from '../cart/cart';
import { MyPage } from '../my/my'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  //tab2Root = AboutPage;
  //tab3Root = ContactPage;
  tab2Root = CategoriesPage;
  tab3Root = CartPage;
  tab4Root = MyPage;

  constructor() {

  }
}
