import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list-item',
  templateUrl: './character-list-item.component.html',
  styleUrls: ['./character-list-item.component.css']
})
export class CharacterListItemComponent implements OnInit {
  @Input() character;
  activeClass: string;

  constructor() { }

  ngOnInit() { }

  toggleActiveClass(event) {
    this.activeClass = event.type === 'mouseover' ? 'active' : '';
  }
}
