import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';

/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onUncheckAllItems() {}
  onAddItem() {}
  onToggleItem(item) {}
  onRenameItem(item) {}
  onRemoveItem(item) {}

}
