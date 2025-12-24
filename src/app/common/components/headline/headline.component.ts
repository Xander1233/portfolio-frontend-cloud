import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../../services/api.service';
import { forkJoin } from 'rxjs';
import { PersonalInformation } from '../../../../data/personalInformation';
import { About } from '../../../../data/about';

@Component({
	selector: 'headline',
	templateUrl: './headline.component.html',
	styleUrl: './headline.component.scss',
	standalone: false
})
export class HeadlineComponent implements OnInit {

	personalInformation: PersonalInformation = {
		first_name: "",
		last_name: "",
		birthdate: 0,
		email: "",
		location: "",
		location_city: "",
		links: []
	};
	about: About = {
		headline: "",
		content: "",
		cv_link: ""
	};

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
