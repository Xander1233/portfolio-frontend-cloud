import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Card } from "primeng/card";
import { Tag } from "primeng/tag";
import { PrimeNGModule } from "../primeng/primeng.module";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HeadlineComponent } from "./headline/headline.component";

const components: any[] = [
	TopBarComponent,
	HeadlineComponent
];

@NgModule({
	declarations: components,
	exports: [components],
	imports: [BrowserAnimationsModule, PrimeNGModule, RouterModule, CommonModule]
})
export class ComponentsModule { }