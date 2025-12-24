import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PrimeNGModule } from "../primeng/primeng.module";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HeadlineComponent } from "./headline/headline.component";
import { ExperienceComponent } from "./experience/experience.component";
import { TechnologieItemComponent } from "./technologie-item/technologie-item.component";

const components: any[] = [
	TopBarComponent,
	HeadlineComponent,
	ExperienceComponent,
	TechnologieItemComponent
];

@NgModule({
	declarations: components,
	exports: [components],
	imports: [BrowserAnimationsModule, PrimeNGModule, RouterModule, CommonModule]
})
export class ComponentsModule { }