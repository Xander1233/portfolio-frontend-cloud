export interface Section<T> {
	id: number;
	section_type: string;
	updated_at: number;
	data: T;
}