import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Array<{ name: string }> = [];
  constructor() {
    this.characters = [
      { name: 'Black Panther' },
      { name: 'Captain America' },
      { name: 'Ms. Marvel' }
    ];
  }

  ngOnInit() {
  }

}
