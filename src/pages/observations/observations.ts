import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { ObservationModal } from './observation.modal';

import { ObservationsService, Observation } from "../../app/observations.service";

@Component({
  selector: 'page-observations',
  templateUrl: 'observations.html'
})
export class ObservationsPage {

  observations: Observation[] = [];

  constructor(private observationsService: ObservationsService,
              private modalCtrl: ModalController) {
    observationsService
      .get()
      .then((obs) => {
        if (Array.isArray(obs)) {
          this.observations = obs;
        }
      });
  }

  viewObservation(observation: Observation) {
    this.modalCtrl
      .create(ObservationModal, {observation: observation})
      .present();
  }
}
