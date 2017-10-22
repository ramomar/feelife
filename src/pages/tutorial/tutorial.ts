import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { QuizPage } from '../quiz/quiz';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {

  quizPage: any;

  constructor(private navCtrl: NavController) {
    this.quizPage = QuizPage;
  }

  private endOfTutorial() {
    this.navCtrl.push(QuizPage);
  }
}