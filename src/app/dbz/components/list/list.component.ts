import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // Debemos de recibir desde el padre (MainpageComponent) al hijo (ListComponent) los personajes para ello se usa:
  // el decorador @input

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  // Emitimos el ID para poderlo borrar
  @Output()
  // Como se emite es ahora un string se cambia esta linea
  // public onDelete: EventEmitter<number> = new EventEmitter();
  public onDelete: EventEmitter<string> = new EventEmitter();

  /* onDeleteCharacter(index: number): void {
    // TODO: Emitir el ID del Personaje
    this.onDelete.emit(index);
  } */

  onDeleteCharacter( id?: string ): void {
    // Dejamos opcional el id, si no existe nunca lo manda llamar.
    if ( !id ) return;

    console.log({ id });

    // TODO: Emitir el ID del Personaje
    this.onDelete.emit(id);
  }

}
