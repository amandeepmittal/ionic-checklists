import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  list: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public dataService: DataProvider) {
    this.list = this.navParams.get('list');
  }

  onUncheckAllItems() {}
  onAddItem() {
    let alert = this.alertCtrl.create({
      title: 'New Item?',
      message: 'Enter here',
      inputs: [
        {
          name: 'name'
        },
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add',
          handler: dataService => {
            this.list.addItem(dataService.name);
          }
        }
      ]
    });
    alert.present();
  }
  onToggleItem(item) {}
  onRenameItem(item) {}
  onRemoveItem(item) {}

}
