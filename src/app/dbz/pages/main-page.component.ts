import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  //? Se pone privado para que no se exponga la data al publico
  constructor (private dbzService: DbzService ){
  }

  //? Se
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void{
    this.dbzService.addCharacter(character);
  }
}
