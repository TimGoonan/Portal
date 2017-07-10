import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-visit',
  templateUrl: 'visit.html'
})
export class VisitPage {
  rootPage:any = VisitPage;
  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController) {

  }
}