import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnDestroy, OnInit {
  character;
  activatedRoute: ActivatedRoute;
  charactersService: CharactersService;
  subscription;

  constructor(activatedRoute: ActivatedRoute, charactersService: CharactersService) {
    this.activatedRoute = activatedRoute;
    this.charactersService = charactersService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.charactersService.searchCharacter(params.id);
      }
    );
    this.subscription = this
    .charactersService
    .characterUpdated
    .subscribe(
      () => {
        this.character = this.charactersService.getCharacter();
        console.log('this character', this.character);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
