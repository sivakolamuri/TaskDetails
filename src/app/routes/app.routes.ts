import { UpdateComponent } from '../components/update/update.component';
import { Routes } from '@angular/router';
import { ItemsComponent } from '../components/items/items.component';
import { AddComponent } from '../components/add/add.component';


export const ROUTES: Routes =
  [
    { path: '', component: ItemsComponent },
    { path: 'items', component: ItemsComponent },
    { path: 'add', component: AddComponent },
    { path: 'edit', component: UpdateComponent },
    { path: '*', component: ItemsComponent }
  ];

