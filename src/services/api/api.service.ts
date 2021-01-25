// imports
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypePokemonI } from 'src/interfaces/type-pokemon.inteface';
import {
  route_api_type,
  route_api_pokemons
} from '../../routes/routes';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}
  public getListTypes(){
    const url = route_api_type;
    return this.http.get(url).toPromise();
  }
  public getListPokemons(type){
    const url = route_api_pokemons + type;
    return this.http.get(url).toPromise();
  }
}
