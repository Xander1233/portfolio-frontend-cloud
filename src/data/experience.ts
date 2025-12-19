export interface Experience {
	items: ExperienceItem[];
}

export interface ExperienceItem {
	company: string;
	company_url: string;
	current: boolean;
	start: string;
	end?: string;
	order: number;
	career: ExperienceCareer[];
}

export interface ExperienceCareer {
	position: string;
	location: string;
	start: string;
	end?: string;
	current: boolean;
	order: number;
	description: string[];
}