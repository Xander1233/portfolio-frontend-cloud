import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../../services/api.service';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'top-bar',
	templateUrl: './top-bar.component.html',
	styleUrl: './top-bar.component.scss',
	standalone: false
})
export class TopBarComponent implements OnInit {

	user: {} | null = null;
	image: string = "";
	label: string = "";

	items: MenuItem[] = [];

	constructor() {

	}

	ngOnInit(): void {

	}

}
