import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  //* Define una salida para que el padre lo escuche (MainPageComponent)
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  //* Método para obtener el id del personaje
  onDeleteCharacter(id?:string): void {

    if (!id) return;

    // console.log({id});

    this.onDelete.emit(id); //* Obtener el Id y mandarlo al padre (MainPageComponent)
  }
}
