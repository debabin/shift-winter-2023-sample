import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

@Injectable()
export class CharacterService {
  public baseUrl = 'https://rickandmortyapi.com/api';
  constructor(private httpClient: HttpClient) {}

  public getCharacters() {
    return this.httpClient.get<Result<Character>>(`${this.baseUrl}/character`);
  }
}
