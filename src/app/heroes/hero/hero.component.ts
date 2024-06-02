import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  // Los get se ven como propiedades. el llamado de ellos se hace sin parentesis.
  get capitalizedname():string {
    return this.name.toUpperCase();
  }

  // Este es un metodo, y el llamado es con los parentesis.
  // Si este metodo se define como private no se puede usar en el html
  //private getHeroDescription():string {
  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age  = 45;
  }

}
