import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SummaryPage } from '../myHealth/summary/summary';
import { VisitPage } from '../myHealth/visit/visit';
import { MedicationPage } from '../myHealth/medication/medication';
import { HistoryFormPage } from '../myHealth/historyForm/historyForm';
import { DocumentPage } from '../myHealth/document/document';
import { AccessLogPage } from '../myHealth/accessLog/accessLog';

import { SchedulePage } from '../appointments/schedule/schedule';
import { RequestPage } from '../appointments/request/request';

import { InformationPage } from '../profile/information/information';
import { InsurancePage } from '../profile/insurance/insurance';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToOtherPage(key: string){
    if(key === 'summary'){
      this.navCtrl.push(SummaryPage);
    }
    else if(key === 'visit'){
      this.navCtrl.push(VisitPage);
    }
    else if(key === 'medication'){
      this.navCtrl.push(MedicationPage);
    }
    else if(key === 'historyForm'){
      this.navCtrl.push(HistoryFormPage);
    }
    else if(key === 'document'){
      this.navCtrl.push(DocumentPage);
    }
    else if(key === 'accessLog'){
      this.navCtrl.push(AccessLogPage);
    }
    else if(key === 'scheduled'){
      this.navCtrl.push(SchedulePage);
    }
    else if(key === 'request'){
      this.navCtrl.push(RequestPage);
    }
    else if(key === 'information'){
      this.navCtrl.push(InformationPage);
    }
    else if(key === 'insurance'){
      this.navCtrl.push(InsurancePage);
    }    
  }
}
