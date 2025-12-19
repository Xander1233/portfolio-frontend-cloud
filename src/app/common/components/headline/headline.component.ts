import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../../services/api.service';
import { MenuItem } from 'primeng/api';
import { forkJoin, pipe } from 'rxjs';

@Component({
	selector: 'top-bar',
	templateUrl: './headline.component.html',
	styleUrl: './headline.component.scss',
	standalone: false
})
export class HeadlineComponent implements OnInit {

	personalInformation: any;
	about: any;

	constructor(public service: APIService) {}

	ngOnInit(): void {
		forkJoin([
			this.service.getAbout(),
			this.service.getPersonalInformation()
		]).subscribe(([aboutData, personalInfoData]) => {
			this.about = aboutData.data;
			this.personalInformation = personalInfoData.data;
		});
	}

}
