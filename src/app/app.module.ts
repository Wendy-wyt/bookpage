import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistlistComponent } from './wishlistlist/wishlistlist.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookcardComponent } from './bookcard/bookcard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    WishlistComponent,
    WishlistlistComponent,
    BooklistComponent,
    BookcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
