import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http, Response } from '@angular/http';

@Injectable()
export class ObservationsService {
  constructor(private storage: Storage,
              private http: Http) {
  }

  save(observation: Observation) {
    this.storage.get('observations').then((observations) => {
      console.log(observations);
      if (Array.isArray(observations)) {
        let obs = observations.push(observation);
        this.storage.set('observations', obs);
      }
      else {
        this.storage.set('observations', [ observation ]);
      }
    });
  }

  get(): Promise<Observation[]> {
    return this.storage.get('observations');
  }

}

export interface Observation {
  mass: boolean;
  mobility: boolean;
  affectedBreast: string;
  angle: number;
  zone: string;
  pain: number;
  temperature: boolean;
  color: boolean;
  secretion: string;
  date: string;
}