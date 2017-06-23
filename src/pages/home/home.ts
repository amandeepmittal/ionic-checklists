import { AlertController, ItemSliding, NavController, Platform, reorderArray } from 'ionic-angular';

import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { ListModel } from "../../models/list.model";
import { ListPage } from '../list/list';

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
      title: 'A New CheckList',
      message: 'Enter a name for Your List',
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

  onViewList(list) {
    this.navCtrl.push(ListPage, {
      list: list
    });
  }

  onRenameList(list, listItemSliding: ItemSliding) {
    let alert = this.alertCtrl.create({
      title: 'Rename Your CheckList',
      message: 'Enter a NEW name of Your List',
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
              listItemSliding.close();
            }
          }
        }
      ]
    });
    alert.present();
  }
  onRemoveList(list) {
    let index = this.lists.indexOf(list);
    if( index > -1) {
      this.lists.splice(index, 1);
      this.onSave();
    }
  }
  onSave() {}

  onReorderItems(indexes) {
    this.lists = reorderArray(this.lists, indexes);
  }
}
