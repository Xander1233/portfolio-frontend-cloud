import { NgModule } from "@angular/core";
import { LandingComponent } from "./landing/landing.component"
import { ComponentsModule } from "../components/components.module";
import { PrimeNGModule } from "../primeng/primeng.module";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { AppRoutingModule } from "../../app.routes";
import { ForbiddenComponent } from "./errors/forbidden.component/forbidden.component";
import { RouterModule } from "@angular/router";
import { InternalServerErrorComponent } from "./errors/internal-server-error/internal-server-error.component";

const pages: any[] = [
	LandingComponent,
	NotFoundComponent,
	ForbiddenComponent,
	InternalServerErrorComponent
];

@NgModule({
	imports: [ComponentsModule, PrimeNGModule, RouterModule],
	exports: [],
	declarations: pages
})
export class PagesModule { }