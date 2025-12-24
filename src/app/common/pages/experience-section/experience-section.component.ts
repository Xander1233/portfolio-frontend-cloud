import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../../services/api.service';
import { Experience } from '../../../../data/experience';

@Component({
	selector: 'experience-section',
	templateUrl: './experience-section.component.html',
	styleUrl: './experience-section.component.scss',
	standalone: false
})
export class ExperienceSectionComponent implements OnInit {

	experiences: Experience = {
		items: []
	};

	constructor(public api: APIService) {

	}

	ngOnInit(): void {
		this.api.getExperience().subscribe((experiences) => {
			this.experiences = experiences.data;

			this.experiences.items.sort((a, b) => {
				return a.order - b.order;
			});
		});
	}

}
