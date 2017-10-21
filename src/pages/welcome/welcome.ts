import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CalculatorPage } from '../calculator/calculator';
import { QuizPage } from '../quiz/quiz';
import { TutorialPage } from '../tutorial/tutorial';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  calculatorPage: any;
  quizPage: any;
  tutorialPage: any;

  constructor(public navCtrl: NavController) {
    this.calculatorPage = CalculatorPage;
    this.quizPage       = QuizPage;
    this.tutorialPage   = TutorialPage;
  }

}
