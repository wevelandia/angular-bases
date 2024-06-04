import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  // Este objeto character lo debemos emitir para que el padre lo reciba
  // Aca debemos emitir ese personaje y va con el decorador de Output
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  // Creo un nuevo metodo
  emitCharacter(): void {

    // Para depurar la aplicación.
    //debugger;

    //console.log( this.character );

    // Aca se hace una validación de que digiten algo en el nombre, no permitir grabar nombres vacios
    if ( this.character.name.length === 0 ) return;

    // Pero si tiene un nombre sigue con estas instrucciones.
    //this.onNewCharacter.emit(this.character);  // Con esta forma no funciona
    this.onNewCharacter.emit({...this.character}); // Esta forma si funciona y me asigna bien el personaje a la lista

    // Cuando se envian los datos se desea volver a mis valores predeterminados
    //this.character.name = '';
    //this.character.power = 0;

    // Lo anterior se puede hacer en una linea cuando se tiene pocas variables del objeto
    this.character = { name: '', power: 0 };

  }

}
