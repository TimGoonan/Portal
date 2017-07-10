import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SummaryPage } from '../pages/myHealth/summary/summary';
import { VisitPage } from '../pages/myHealth/visit/visit';
import { MedicationPage } from '../pages/myHealth/medication/medication';
import { HistoryFormPage } from '../pages/myHealth/historyForm/historyForm';
import { DocumentPage } from '../pages/myHealth/document/document';
import { AccessLogPage } from '../pages/myHealth/accessLog/accessLog';

import { SchedulePage } from '../pages/appointments/schedule/schedule';
import { RequestPage } from '../pages/appointments/request/request';

import { InformationPage } from '../pages/profile/information/information';
import { InsurancePage } from '../pages/profile/insurance/insurance';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SummaryPage,
    VisitPage,
    MedicationPage,
    HistoryFormPage,
    DocumentPage,
    AccessLogPage,
    SchedulePage,
    RequestPage,
    InformationPage,
    InsurancePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage, 
    SummaryPage,
    VisitPage,
    MedicationPage,
    HistoryFormPage,
    DocumentPage,
    AccessLogPage,
    SchedulePage,
    RequestPage,
    InformationPage,
    InsurancePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
