import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor() {
    console.log('Hello DataProvider Provider');
  }

}
