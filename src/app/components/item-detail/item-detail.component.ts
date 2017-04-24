import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent {
  originalName: string;
  selectedItem: Item;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set item(value: Item) {

    if (value) this.originalName = value.title;
    this.selectedItem = Object.assign({}, value);
  }
}
