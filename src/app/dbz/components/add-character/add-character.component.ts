import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  //* Hacer la suscripcion para estar escuchando el evento
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  //* Método para guardar el personaje

  emitCharacter():void {

    // debugger;

    //* Validación del nombre
    if (this.character.name.length === 0) return;

    // console.log(this.character);

    //* Enviar el personaje
    this.onNewCharacter.emit(this.character);

    //* Limpiar el input
    this.character = {name: '', power: 0}
  }
}
