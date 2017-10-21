import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {WelcomePage} from "../welcome/welcome";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AboutPage;
  tab2Root = WelcomePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
