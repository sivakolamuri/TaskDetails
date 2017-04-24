import 'zone.js/dist/zone';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './container/app/app.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';

import { ROUTES } from './routes/app.routes';
import { items } from './stores/items.store';
import { selectedItem } from './stores/selectedItem.store';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent,
    ItemsComponent,
    ItemDetailComponent,
    ItemsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.provideStore({ items, selectedItem }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
