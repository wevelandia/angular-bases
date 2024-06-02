import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = [ 'Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor' ];
  public deleteHero?: string;

  // Creamos metodo para eliminar el ultimo elemento
  removeLastHero():void {
    this.deleteHero = this.heroNames.pop();
    //console.log({ deleteHero });
  }

}
