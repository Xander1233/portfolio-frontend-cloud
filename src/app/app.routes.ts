import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './common/components/components.module';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './common/pages/landing/landing.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './common/pages/errors/not-found/not-found.component';
import { ForbiddenComponent } from './common/pages/errors/forbidden.component/forbidden.component';
import { InternalServerErrorComponent } from './common/pages/errors/internal-server-error/internal-server-error.component';

export const routes: Routes = [
	{
		path: '',
		component: LandingComponent
	},
	{
		path: 'error',
		children: [
			{
				path: '404',
				component: NotFoundComponent
			},
			{
				path: '403',
				component: ForbiddenComponent
			},
			{
				path: '500',
				component: InternalServerErrorComponent
			}
		]
	},
	{
		path: '**',
		redirectTo: '/error/404'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {}), ComponentsModule, CommonModule],
	exports: [RouterModule]
})
export class AppRoutingModule { }
