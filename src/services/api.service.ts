import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Base } from "./abstract/base.service";
import { Observable } from "rxjs";
import { Experience } from "../data/experience";
import { Section } from "../data/section";
import { Skills } from "../data/skills";
import { Education } from "../data/education";

@Injectable({ providedIn: 'root' })
export class APIService extends Base {
	
	constructor(http: HttpClient) {
		super(http, '/api');
	}

	getExperience(): Observable<Section<Experience>> {
		return this.get<Section<Experience>>('/experience');
	}

	getSkills(): Observable<Section<Skills>> {
		return this.get<Section<Skills>>('/skills');
	}

	getEducation(): Observable<Section<Education>> {
		return this.get<Section<Education>>('/education');
	}

	getAbout(): Observable<Section<any>> {
		return this.get<Section<any>>('/about');
	}

	getPersonalInformation(): Observable<Section<any>> {
		return this.get<Section<any>>('/personal_information');
	}
}