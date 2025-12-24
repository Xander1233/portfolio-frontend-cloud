import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Base } from "./base.service";

@Injectable({ providedIn: 'root' })
export abstract class AdminBase extends Base {
	
	constructor(http: HttpClient, basePath: string, baseUrl: string) {
		super(http, basePath, baseUrl);
	}

	public login() {
		return this.get<void>('/login');
	}
}