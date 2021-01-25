import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  typePokemon: string;
  pokemons: any[] = [];
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }
  updateData(typePokemon: string) {
    this.typePokemon = typePokemon;
    this.getListPokemons(typePokemon);
  }
  async getListPokemons(typePokemon){
    const data: any = await this.apiService.getListPokemons(typePokemon);
    this.pokemons = data.cards;
    console.log(data);
  }
}
