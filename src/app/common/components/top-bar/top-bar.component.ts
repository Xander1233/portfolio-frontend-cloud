import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../../services/api.service';
import { PersonalInfoLink } from '../../../../data/personalInformation';

@Component({
	selector: 'top-bar',
	templateUrl: './top-bar.component.html',
	styleUrl: './top-bar.component.scss',
	standalone: false
})
export class TopBarComponent implements OnInit {

	items: PersonalInfoLink[] = [];

	constructor(public api: APIService) {

	}

	ngOnInit(): void {
		this.api.getPersonalInformation().subscribe((info) => {
			this.items = info.data.links;
		});
	}

}
