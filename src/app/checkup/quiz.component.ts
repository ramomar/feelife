import { Component, ViewChild } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Slides }        from 'ionic-angular';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  //styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  @ViewChild(Slides) slides: Slides;

  mobilityQuestionAnswer: boolean    = false;
  painQuestionAnswer: number         = 0;
  temperatureQuestionAnswer: boolean = false;
  colorQuestionAnswer: boolean       = false;
  secretionQuestionAnswer: string    = 'no'; // [red,white,transparent]
  deformityQuestionAnswer: boolean   = false;

  constructor(private navCtrl: NavController) {
  }

  private nextQuestion(answer, slideNumber) {
    if (answer) {
      switch(slideNumber) {
        case 0:
          this.mobilityQuestionAnswer = answer;
          break;
        case 1:
            break;
        case 2:
            this.temperatureQuestionAnswer = answer;
            break;
        case 3:
            this.colorQuestionAnswer = answer;
            break;
        case 4:
          this.secretionQuestionAnswer = answer;
          break;
        case 5:
          this.deformityQuestionAnswer = answer;
          break;
      }
    }

    // TODO: review why values don't update
    console.log([this.mobilityQuestionAnswer,
      this.painQuestionAnswer,
      this.temperatureQuestionAnswer,
      this.colorQuestionAnswer,
      this.secretionQuestionAnswer,
      this.deformityQuestionAnswer].join(','));

    this.slides.slideNext();
  }

  private endOfQuiz() {
    this.navCtrl.pop();
  }
}
