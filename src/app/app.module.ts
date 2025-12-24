import { EnvironmentInjector, InjectionToken, NgModule, provideEnvironmentInitializer } from "@angular/core";
import { AppComponent } from "./app.component";
import { PagesModule } from "./common/pages/pages.module";
import { PipesModule } from "./common/pipes/pipes.module";
import { ComponentsModule } from "./common/components/components.module";
import { BrowserModule, Title } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app.routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PrimeNGModule } from "./common/primeng/primeng.module";
import { AutoCompleteModule } from "primeng/autocomplete";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { PercentPipe } from "@angular/common";
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterLink } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Nora from '@primeng/themes/nora';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import PROVIDERS from '../services';
import { environment } from "../environments/environment";

export const API_BASE_URL = new InjectionToken<string>("API_BASE_URL");
export const CDN_BASE_URL = new InjectionToken<string>("CDN_BASE_URL");

@NgModule({
	declarations: [AppComponent],
	imports: [
		PagesModule,
		PipesModule,
		ComponentsModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		PrimeNGModule,
		AutoCompleteModule,
		ScrollingModule,
		RouterLink
	],
	providers: [
		Title,
		PercentPipe,
		provideAnimationsAsync(),
		providePrimeNG({
			theme: {
				preset: Nora
			}
		}),
		provideHttpClient(withInterceptorsFromDi()),
		provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
		{ provide: API_BASE_URL, useValue: environment.apiBaseUrl },
		{ provide: CDN_BASE_URL, useValue: environment.cdnBaseUrl },
		...PROVIDERS
	],
	bootstrap: [AppComponent]
})
export class AppModule { }