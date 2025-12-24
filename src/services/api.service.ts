import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Base } from "./abstract/base.service";
import { Observable } from "rxjs";
import { Experience } from "../data/experience";
import { Section } from "../data/section";
import { Skills } from "../data/skills";
import { Education } from "../data/education";
import { About } from "../data/about";
import { PersonalInformation } from "../data/personalInformation";
import { API_BASE_URL } from "../app/app.module";

@Injectable({ providedIn: 'root' })
export class APIService extends Base {
	
	constructor(http: HttpClient, @Inject(API_BASE_URL) baseUrl: string) {
		super(http, '/api', baseUrl);
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

	getAbout(): Observable<Section<About>> {
		return this.get<Section<About>>('/about');
	}

	getPersonalInformation(): Observable<Section<PersonalInformation>> {
		return this.get<Section<PersonalInformation>>('/personal_information');
	}
}