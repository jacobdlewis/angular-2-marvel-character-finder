import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { stringify } from 'qs';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { PUBLIC_KEY } from './constants';

@Injectable()
export class CharactersService {
  http: Http;
  // how can I have a Character type?
  // I think TS has a 'rubric/blueprint' feature for this
  private characters = [];
  private character;
  charactersUpdated = new Subject<void>();
  characterUpdated = new Subject<void>();

  constructor(http: Http) {
    this.http = http;
  }

  generateQueryParams(query = {}) {
    return stringify({
      apikey: PUBLIC_KEY,
      ...query
    });
  }

  getCharacters() {
    return this.characters;
  }

  getCharacter() {
    return this.character;
  }

  searchCharacter(id) {
    const params = this.generateQueryParams();
    this.http
      .get(`http://gateway.marvel.com/v1/public/characters/${id}?${params}`)
      .map((response: Response) => {
        const data = response.json().data;
        return data;
      })
      .subscribe(
        (data) => {
          console.log('character search success', data);
          this.character = data.results[0];
          this.characterUpdated.next();
        },
        (error) => {
          console.log('character search error', error);
        },
        () => {
          console.log('search character response ended');
        }
      );
  }

  searchCharacters(query) {
    const params = this.generateQueryParams(query);
    this.http
      .get(`http://gateway.marvel.com/v1/public/characters?${params}`)
      .map((response: Response) => {
        const data = response.json().data;
        return data;
      })
      .subscribe(
        (data) => {
          console.log('characters search success', data);
          this.characters = data.results;
          this.charactersUpdated.next();
        },
        (error) => {
          console.log('characters search error', error);
        },
        () => {
          console.log('search characters response ended');
        }
      );
  }
}
