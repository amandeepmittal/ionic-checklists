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

  onUncheckAllItems() {
    this.list.items.forEach(item => {
      if(item.checked) {
        this.list.onToggleItem(item);
      }
    });
  }

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
            this.list.onAddItem(dataService.name);
          }
        }
      ]
    });
    alert.present();
  }

  onToggleItem(item) {
    this.list.onToggleItem(item);
  }

  onRenameItem(item) {
    let alert = this.alertCtrl.create({
      title: 'Rename an item?',
      message: 'Enter the new name for itme',
      inputs: [
        { name: 'name' }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: dataService => {
            this.list.onRenameItem(item, dataService.item);
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveItem(item) {
    this.list.onRemoveItem(item);
  }

}
