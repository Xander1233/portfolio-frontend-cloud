import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Base } from "./base.service";

@Injectable({ providedIn: 'root' })
export abstract class AdminBase extends Base {
	
	constructor(http: HttpClient, basePath: string) {
		super(http, basePath);
	}

	public login() {
		return this.get<void>('/login');
	}
}