import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  constructor(private navCtrl: NavController) {
  }

  private endOfTutorial() {
    this.navCtrl.pop();
  }
}