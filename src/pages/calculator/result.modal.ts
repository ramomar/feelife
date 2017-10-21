import { Component } from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

@Component({
  templateUrl: './result.modal.html'
})
export class ResultModal {

  private results;

  constructor(private params: NavParams,
              private viewCtrl: ViewController) {
    this.results = params.get('results');
  }

  private dismiss() {
    this.viewCtrl.dismiss();
  }
}