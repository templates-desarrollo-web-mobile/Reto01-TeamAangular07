import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TypePokemonI } from 'src/interfaces/type-pokemon.inteface';
import { ApiService } from 'src/services/api/api.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() updateDataEvent: EventEmitter<string>;
  typesPokemons: string[] = [];
  constructor(
    private apiService: ApiService,
  ) { 
    this.updateDataEvent = new EventEmitter<string>();
  }
  ngOnInit(): void {
    this.getListTypes();
  }
  changeType(type){
    this.updateDataEvent.emit(type);
  }
  async getListTypes(){
    const data: any = await this.apiService.getListTypes();
    this.typesPokemons = data.types;
    this.changeType(this.typesPokemons[0]);
  }
}
