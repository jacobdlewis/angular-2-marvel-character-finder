import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnDestroy, OnInit {
  characters;
  charactersService: CharactersService;
  subscription;

  constructor(charactersService: CharactersService) {
    this.charactersService = charactersService;
    this.characters = this.charactersService.getCharacters();
  }

  ngOnInit() {
    this.subscription = this
      .charactersService
      .charactersUpdated
      .subscribe(
        () => {
          this.characters = this.charactersService.getCharacters();
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
