import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from "./list/list.component";

// Como en heroes se estaba usando las directivas de if y se creo el modulo de heroes se debe de importar: CommonModule

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})

export class HeroesModule {}
