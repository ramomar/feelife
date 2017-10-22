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

  massQuestionAnswer: boolean        = false;
  mobilityQuestionAnswer: boolean    = false;
  painQuestionAnswer: number         = 0;
  affectedBreast: string             = null; //[left,right]
  angle: number                      = 12; // [1,2,..,12]
  zone: string                       = null; // [R,A,B,C]
  temperatureQuestionAnswer: boolean = false;
  colorQuestionAnswer: boolean       = false;
  secretionQuestionAnswer: string    = 'no'; // [red,white,transparent]

  constructor(private navCtrl: NavController) {
  }

  private nextQuestion(answer, question) {
    if (answer) {
      switch(question) {
        case 'mass':
          this.massQuestionAnswer = answer;
          break;
        case 'mobility':
          this.mobilityQuestionAnswer = answer;
          break;
        case 'breastMarker':
          break;
        case 'pain':
            break;
        case 'temperature':
            this.temperatureQuestionAnswer = answer;
            break;
        case 'color':
            this.colorQuestionAnswer = answer;
            break;
        case 'secretion':
          this.secretionQuestionAnswer = answer;
          break;
      }
    }

    this.serializeQuiz();
    this.slides.slideNext();
  }

  private endOfQuiz() {
    this.navCtrl.popToRoot();
  }

  private serializeQuiz() {
    let answers = {
      'mass':           this.mobilityQuestionAnswer,
      'mobility':       this.mobilityQuestionAnswer,
      'affectedBreast': this.affectedBreast,
      'angle':          this.angle,
      'zone':           this.zone,
      'pain':           this.painQuestionAnswer,
      'temperature':    this.temperatureQuestionAnswer,
      'color':          this.colorQuestionAnswer,
      'secretion':      this.secretionQuestionAnswer
    };

    console.log(answers);
  }
}
