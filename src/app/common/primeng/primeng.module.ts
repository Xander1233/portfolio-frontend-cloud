import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { TimelineModule } from "primeng/timeline";

const components = [
	ButtonModule,
	TimelineModule
]

@NgModule({
	exports: components,
	imports: components
})
export class PrimeNGModule { }