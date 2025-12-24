import { Component, Input, OnInit } from '@angular/core';
import { SkillItem } from '../../../../data/skills';

@Component({
	selector: 'technologie-item',
	templateUrl: './technologie-item.component.html',
	styleUrl: './technologie-item.component.scss',
	standalone: false
})
export class TechnologieItemComponent implements OnInit {

	@Input() item!: SkillItem;
	
	constructor() {}

	ngOnInit(): void {

	}

}
