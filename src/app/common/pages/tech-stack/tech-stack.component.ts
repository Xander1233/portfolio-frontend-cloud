import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../../services/api.service';
import { Skills } from '../../../../data/skills';

@Component({
	selector: 'tech-stack',
	templateUrl: './tech-stack.component.html',
	styleUrl: './tech-stack.component.scss',
	standalone: false
})
export class TechStackComponent implements OnInit {

	stack: Skills = {
		items: []
	};

	constructor(public api: APIService) {

	}

	ngOnInit(): void {
		this.api.getSkills().subscribe((stack) => {
			this.stack = stack.data;

			this.stack.items.sort((a, b) => {
				return b.level - a.level;
			});
		});
	}

}
