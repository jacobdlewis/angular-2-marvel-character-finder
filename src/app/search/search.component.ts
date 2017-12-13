import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  charactersService: CharactersService;

  constructor(charactersService: CharactersService) {
    this.charactersService = charactersService;
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    this.charactersService.searchCharacters(formData.value);
  }
}
