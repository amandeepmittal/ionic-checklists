import { AlertController, NavController, Platform } from 'ionic-angular';

import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { ListModel } from "../../models/list.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lists: ListModel[] = [];

  constructor(public navCtrl: NavController, public dataService: DataProvider, public alertCtrl: AlertController, public platform: Platform) {

  }

  onAddNewList() {
    let alert = this.alertCtrl.create({
      title: 'New List',
      message: 'Enter the name of your list',
      inputs: [
        { name: 'name' }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: dataService => {
            let newList = new ListModel(dataService.name, []);
            this.lists.push(newList);

            newList.list.subscribe(update => {
              this.onSave();
            });
            this.onSave();
          }
        }
      ]
    });
    alert.present();
  }

  onViewList(list) {}

  onRenameList(list) {
    let alert = this.alertCtrl.create({
      title: 'Rename List',
      message: 'Enter the new name of your list',
      inputs: [
        { name: 'name' }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: dataService => {
            let index = this.lists.indexOf(list);
            if(index > -1) {
              this.lists[index].onSetTitle(dataService.name);
              this.onSave();
            }
          }
        }
      ]
    });
  }
  onRemoveList(list) {
    let index = this.lists.indexOf(list);
    if( index > -1) {
      this.lists.splice(index, 1);
      this.onSave();
    }
  }
  onSave() {}
}
