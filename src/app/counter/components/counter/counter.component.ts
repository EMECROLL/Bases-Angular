import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <!-- <h1>Hola Counter</h1> -->

  <h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent  {
  public counter: number = 10;

  //* Método para incrementar/decrementar el counter
  increaseBy(value: number):void {
    this.counter += value;
  }

  //* Método para reset
  resetCounter(){
    this.counter = 10;
  }
}
