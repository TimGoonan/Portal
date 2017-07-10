import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*import { BillPage } from '../bill/bill'
import { MessagesPage } from '../messages/messages'*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rootPage:any = HomePage;
  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController) {
/*      navCtrl.setRoot(HomePage);
      this.tab1 = MessagesPage;
      this.tab2 = BillPage;*/
  }
}
