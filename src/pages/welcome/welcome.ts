import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CalculatorPage } from '../calculator/calculator';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  calculatorPage: any;

  constructor(public navCtrl: NavController) {
    this.calculatorPage = CalculatorPage;
  }

}
