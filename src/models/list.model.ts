import { Observable } from 'rxjs/Observable';

export class ListModel {
  list: any;
  listObserver: any;

  constructor(public title: string, public items: any[], public creation: String = new Date().toISOString()) {
    this.items = items;

    this.list = Observable.create(observer => {
      this.listObserver = observer;
    });
  }

  onAddItem(item) {
    this.items.push({
      title: item,
      checked: false
    });
    this.listObserver.next(true);
  }

  onRemoveItem(item) {
    let index = this.items.indexOf(item);
    if(index > -1) {
      this.items.splice(index, 1);
    }
    this.listObserver.next(true);
  }

  onRenameItem(item, title) {
    let index = this.items.indexOf(item);
    if(index > -1) {
      this.items[index].title = title;
    }
    this.listObserver.next(true);
  }

  onSetTitle(title) {
    this.title = title;
    this.listObserver.next(true);
  }

  onToggleItem(item) {
    item.checked = !item.checked;
    this.listObserver.next(true);
  }
}
