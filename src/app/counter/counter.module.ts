import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

// Sin el exports solo se podria utilizar CounterComponent en toda la carpeta counter,
// pero como senecesita en app se debe de exportar igualmente.
@NgModule({
    declarations: [
        CounterComponent
    ],
    exports: [
        CounterComponent
    ]
})

export class CounterModule {}
