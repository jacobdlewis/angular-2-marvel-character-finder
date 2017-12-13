import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class CharactersService {
  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  searchCharacters(query) {
    console.log('query', query);
    this.http.get('https://gateway.marvel.com/v1/public/characters')
      .subscribe(
        (data) => {
          console.log('data', data);
        },
        (error) => {
          console.log('error', error);
        },
        () => {
          console.log('repsponse ended');
        }
      );
  }
}
