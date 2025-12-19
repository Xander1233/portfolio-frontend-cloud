import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

const pipes: any[] = [

];

@NgModule({
	imports: [CommonModule],
	declarations: pipes,
	exports: pipes
})
export class PipesModule { }