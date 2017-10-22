import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StudiesPage } from '../studies/studies';

@Component({
  selector: 'page-tam',
  templateUrl: 'tam.html'
})
export class TamPage {

  studiesPage: any;

  constructor(public navCtrl: NavController) {
    this.studiesPage = StudiesPage;
  }

}

