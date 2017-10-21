import { NgModule, CUSTOM_ELEMENTS_SCHEMA }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizComponent } from './quiz.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ ],
  exports: [],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class CheckupModule { }