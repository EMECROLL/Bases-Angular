import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  //* Agregar personaje
  addCharacter(character: Character):void {

    const newCharacter: Character = {...character, id: uuid()}

    this.characters.push(newCharacter);
  }

  //* Eliminar personaje por indice
  onDeleteCharacter(index: number){
    this.characters.splice(index,1);
  }

  //* Eliminar personaje por Id
  deleteCharacterById(id: string){
    //? Regresa los personajes despues de filtrar que el id del caracter sea diferente al id seleccionado
    this.characters = this.characters.filter( character => character.id !== id);
  }

}
