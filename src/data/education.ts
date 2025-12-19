export interface Education {
	items: EducationItem[];
}

export interface EducationItem {
	institution: string;
	institution_url: string;
	degree: string;
	field_of_study: string;
	start: string;
	end?: string;
	order: number;
	current: boolean;
}