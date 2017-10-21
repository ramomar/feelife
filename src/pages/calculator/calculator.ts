import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { ResultModal } from './result.modal';

@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html'
})
export class CalculatorPage {

  ages = [];

  hasMother: boolean   = false;
  hasSister: boolean   = false;
  hasDaughter: boolean = false;

  motherAge: number   = 0;
  sisterAge: number   = 0;
  daughterAge: number = 0;

  constructor(private navCtrl: NavController,
              private modalCtrl: ModalController) {
  }

  ngAfterViewInit() {
    for (let i=3;i<=90;i++) {
      this.ages.push(i);
    }
  }

  showResults() {
    let results = { probability: 60 };
    if (this.hasMother || this.hasSister || this.hasDaughter) {
      this.modalCtrl
        .create(ResultModal, {results: results})
        .present();
    }
  }
}

class Results {}
