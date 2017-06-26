import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class DataProvider {

  constructor(public storage: Storage) {}

  getData() {
    return this.storage.get('lists');
  }

  save(data) {
    let saveData = [];

    // remove observables
    data.forEach(list => {
      saveData.push({
        title: list.title,
        items: list.items,
        creation: list.creation
      });
    });

    let newData = JSON.stringify(saveData);
    this.storage.set('lists', newData);
  }

}
