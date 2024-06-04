import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  // Todo lo que se definio aca inicialmente se paso al servicio dbz.service

  // Esto hace una inyección de dependencias. Esto me habilita toda la información en mi MainPageComponent los datos que tengo en el service.
  // Esto debe de ser privado, son buenas practicas. Y por ello se definen los get
  constructor( private dbzService: DbzService ) {}

  get characters(): Character[] {
    // Se se usa así y se modifica la data se modifican los valores en el service.
    //return this.dbzService.characters;
    // Es mejor hacer una copia de los personajes como se defien a continuación, esto no es obligatorio, porque los datos pueden venir de una db, solo se hace por el ekemplo.
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ): void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ): void {
    this.dbzService.addCharacter( character );
  }

}

