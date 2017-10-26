import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CalculatorPage } from '../calculator/calculator';
import { QuizPage } from '../quiz/quiz';
import { TutorialPage } from '../tutorial/tutorial';
import { TamPage } from '../tam/tam';
import { InfoPage } from '../info/info';
import { ObservationsPage } from '../observations/observations';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  calculatorPage: any;
  quizPage: any;
  tutorialPage: any;
  tamPage: any;
  infoPage: any;
  observationsPage: any;

  constructor(public navCtrl: NavController) {
    this.calculatorPage   = CalculatorPage;
    this.quizPage         = QuizPage;
    this.tutorialPage     = TutorialPage;
    this.tamPage          = TamPage;
    this.infoPage         = InfoPage;
    this.observationsPage = ObservationsPage;
  }

}
