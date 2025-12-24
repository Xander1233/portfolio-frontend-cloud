import { Component, Input, OnInit } from '@angular/core';
import { ExperienceCareer, ExperienceItem } from '../../../../data/experience';

@Component({
	selector: 'experience',
	templateUrl: './experience.component.html',
	styleUrl: './experience.component.scss',
	standalone: false
})
export class ExperienceComponent implements OnInit {

	@Input() item!: ExperienceItem;

	get career(): ExperienceCareer {
		if (this.item.career.length !== 1) {
			throw new Error("Experience item has multiple career entries, which is not supported in this component.");
		}

		return this.item.career[0];
	}

	constructor() {}

	ngOnInit(): void {

	}

}
