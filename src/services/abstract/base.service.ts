import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { API_BASE_URL } from "../../app/app.module";

@Injectable({ providedIn: 'root' })
export abstract class Base {

	private base = 'http://localhost:8000';
	
	constructor(private http: HttpClient, private basePath: string) {
		this.basePath = this.basePath.replace(/^\/+|\/+$/g, '');
		this.basePath = `/${this.basePath}`;
	}

	protected get<T>(path: string) {
		return this.http.get<T>(`${this.getFullPath(path)}`, {
			withCredentials: true,
			headers: new HttpHeaders({ 'X-Requested-With': 'XMLHttpRequest' })
		});
	}

	protected post<T>(path: string, body: any) {
		return this.http.post<T>(`${this.getFullPath(path)}`, body, {
			withCredentials: true,
			headers: new HttpHeaders({ 'X-Requested-With': 'XMLHttpRequest' })
		});
	}

	protected put<T>(path: string, body: any) {
		return this.http.put<T>(`${this.getFullPath(path)}`, body, {
			withCredentials: true,
			headers: new HttpHeaders({ 'X-Requested-With': 'XMLHttpRequest' })
		});
	}

	protected delete<T>(path: string) {
		return this.http.delete<T>(`${this.getFullPath(path)}`, {
			withCredentials: true,
			headers: new HttpHeaders({ 'X-Requested-With': 'XMLHttpRequest' })
		});
	}

	protected patch<T>(path: string, body: any) {
		return this.http.patch<T>(`${this.getFullPath(path)}`, body, {
			withCredentials: true,
			headers: new HttpHeaders({ 'X-Requested-With': 'XMLHttpRequest' })
		});
	}

	protected postFormData<T>(path: string, formData: FormData) {
		return this.http.post<T>(`${this.getFullPath(path)}`, formData, {
			withCredentials: true,
			headers: new HttpHeaders({ 'X-Requested-With': 'XMLHttpRequest' })
		});
	}

	private getFullPath(path: string) {

		// Remove all leading and trailing slashes
		path = path.replace(/^\/+|\/+$/g, '');
		path = `/${path}`;

		return `${this.base}${this.basePath}${path}`;
	}
}