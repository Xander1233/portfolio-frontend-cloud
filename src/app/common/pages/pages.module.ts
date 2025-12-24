import { NgModule } from "@angular/core";
import { LandingComponent } from "./landing/landing.component"
import { ComponentsModule } from "../components/components.module";
import { PrimeNGModule } from "../primeng/primeng.module";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { ForbiddenComponent } from "./errors/forbidden.component/forbidden.component";
import { RouterModule } from "@angular/router";
import { InternalServerErrorComponent } from "./errors/internal-server-error/internal-server-error.component";
import { ExperienceSectionComponent } from "./experience-section/experience-section.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TechStackComponent } from "./tech-stack/tech-stack.component";

const pages: any[] = [
	LandingComponent,
	ExperienceSectionComponent,
	TechStackComponent
];

const errorPages: any[] = [
	NotFoundComponent,
	ForbiddenComponent,
	InternalServerErrorComponent
];

@NgModule({
	imports: [ComponentsModule, PrimeNGModule, RouterModule, BrowserAnimationsModule],
	exports: [],
	declarations: [...pages, ...errorPages]
})
export class PagesModule { }