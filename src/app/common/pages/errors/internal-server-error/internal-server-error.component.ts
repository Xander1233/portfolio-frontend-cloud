import { Component } from '@angular/core';

@Component({
	selector: 'internal-server-error',
	templateUrl: './internal-server-error.component.html',
	styleUrl: './internal-server-error.component.scss',
	standalone: false
})
export class InternalServerErrorComponent {

	message: string;

	public constructor() {
		const queryParams = new URLSearchParams(window.location.search);
		this.message = queryParams.get('message') || 'An unknown error occurred.';
	}

}
