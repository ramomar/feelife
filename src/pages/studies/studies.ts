import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-studies',
  templateUrl: 'studies.html'
})
export class StudiesPage {

  constructor(public navCtrl: NavController) {
  }

  endOfStudies() {
    this.navCtrl.pop();
  }
}
