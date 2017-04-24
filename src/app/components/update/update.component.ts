import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item.model';
import { Store } from '@ngrx/store';
import { AppStore } from '../../models/appstore.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  providers: [ItemsService]
})
export class UpdateComponent {

  selectedItem: Observable<Item>;

  constructor(private itemsService: ItemsService,
    private store: Store<AppStore>) {

    this.selectedItem = store.select('selectedItem');
    this.selectedItem.subscribe(v => console.log(v));
  }

  saveItem(item: Item) {
    this.itemsService.saveItem(item);
    this.resetItem();
  }

  resetItem() {
    let emptyItem: Item = { id: null, title: '', description: '' };
    this.store.dispatch({ type: 'SELECT_ITEM', payload: emptyItem });
  }
}
