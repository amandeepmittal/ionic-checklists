import { AlertController, IonicPage, ItemSliding, NavController, NavParams, ToastController, reorderArray } from 'ionic-angular';

import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  list: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public dataService: DataProvider, public toastCtrl: ToastController) {
    this.list = this.navParams.get('list');
  }

  onUncheckAllItems() {
    const toast = this.toastCtrl.create({
      message: 'You list was reset.',
      duration: 1800,
      position: 'bottom'
    });

    this.list.items.forEach(item => {
      if(item.checked) {
        this.list.onToggleItem(item);
        toast.present();
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

  onRenameItem(item, itemSliding: ItemSliding) {
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
            this.list.onRenameItem(item, dataService.name);
            itemSliding.close();
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveItem(item) {
    this.list.onRemoveItem(item);
  }

  onReorderItems(indexes) {
    this.list.items = reorderArray(this.list.items, indexes);
  }
}
