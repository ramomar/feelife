import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { WelcomePage } from '../pages/welcome/welcome';
import { CalculatorPage } from '../pages/calculator/calculator';
import { ResultModal } from '../pages/calculator/result.modal';
import { QuizPage } from '../pages/quiz/quiz';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { TamPage } from '../pages/tam/tam';
import { StudiesPage } from '../pages/studies/studies';
import { InfoPage } from '../pages/info/info';
import { ObservationsPage } from '../pages/observations/observations';

import { ObservationModal } from '../pages/observations/observation.modal';

import { QuizComponent } from './checkup/quiz.component';
import { CheckupModule } from './checkup/checkup.module';
import { HttpModule } from '@angular/http';


import { ObservationsService } from './observations.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    WelcomePage,
    CalculatorPage,
    QuizPage,
    TutorialPage,
    TamPage,
    StudiesPage,
    ResultModal,
    InfoPage,
    ObservationsPage,
    ObservationModal,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    CheckupModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    WelcomePage,
    CalculatorPage,
    QuizPage,
    TutorialPage,
    TamPage,
    StudiesPage,
    ResultModal,
    InfoPage,
    ObservationsPage,
    ObservationModal,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ObservationsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
