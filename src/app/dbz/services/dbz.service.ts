import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

//console.log(uuid());

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  // La idea de este servicio es que aca tengamos la data que se va a nabehar.

  // Se debe de pensar en donde se debe mantener esta información la DATA,
  // Y la logica para editar estos personajes igual no se debe de mantener aca,
  // porque puede serque otro componente requiere de ver estos personajes y sería muy complicadocompartir esta información.
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter( character: Character ): void {
    //console.log('MainPage');
    //console.log(character);
    // Cuando se esta emitiendo tenemos nuestro nuevo personaje aca, y es aca donde lo adicionamos a la lista
    // Ingresarlo al final del arreglo: this.characters.push
    // Ingresarlo al inicio del arreglo: this.characters.unshift

    // debugger;

    const newCharacter: Character = { id: uuid(), ...character }

    this.characters.push(newCharacter); // Se agrega al final.
  }

  // Verificar si emite el borrado de una Personaje
 /*  onDeleteCaracter( index: number ): void {
    this.characters.splice(index, 1);
  } */

  deleteCharacterById( id: string):void {
    this.characters = this.characters.filter( character => character.id !== id );
  }

  constructor() { }
}
