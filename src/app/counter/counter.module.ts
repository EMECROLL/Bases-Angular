import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  //* Declaramos los componentes
  declarations: [
    CounterComponent
  ],
  //* Exportamos para que se pueda usar donde sea
  exports: [
    CounterComponent
  ]
})
export class CounterModule {}
