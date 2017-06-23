import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onAddNewList() {}
  onViewList(list: any) {}
  onRenameList(list: any) {}
  onRemoveList(list: any) {}
}
