import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export abstract class Base {

	private base = 'https://api.david-neidhart.de';
	
	constructor(private http: HttpClient, private basePath: string, baseUrl: string) {
		this.basePath = this.basePath.replace(/^\/+|\/+$/g, '');
		this.basePath = `/${this.basePath}`;

		this.base = baseUrl.replace(/\/+$/g, '');
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