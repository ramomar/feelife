import { Component } from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";

@Component({
  templateUrl: './observation.modal.html'
})
export class ObservationModal {

  private observation;

  constructor(private params: NavParams,
              private viewCtrl: ViewController) {
    this.observation = params.get('observation');
  }

  private dismiss() {
    this.viewCtrl.dismiss();
  }
}