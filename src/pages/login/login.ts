import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  username: string ;
   pushPage: any;

  constructor(public navCtrl: NavController) {
    this.pushPage = HomePage;
    this.username = '';
  }

  goToOtherPage(){
    this.navCtrl.push(HomePage);
  }

}
