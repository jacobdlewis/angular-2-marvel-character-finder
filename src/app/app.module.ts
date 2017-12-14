import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterListItemComponent } from './character-list-item/character-list-item.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HeaderComponent } from './header/header.component';
import { CharacterFinderComponent } from './character-finder/character-finder.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharactersService } from './characters.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CharacterListComponent,
    CharacterListItemComponent,
    PaginationComponent,
    HeaderComponent,
    CharacterFinderComponent,
    CharacterDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CharactersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
