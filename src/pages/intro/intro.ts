import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
