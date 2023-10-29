import {
	isMonth,
	Month,
	type Direction,
	type ProjectCategory,
	type ProjectFlags,
	type ProjectJson
} from 'ts/ProjectClasses/ProjectTypes';

export default abstract class Project {
	category: ProjectCategory;
	title: string;
	description: string;
	website?: string;
	github?: string;
	tags: string[];
	year: number;
	month: Month;
	side: Direction;
	flags: ProjectFlags;

	constructor(json: ProjectJson, side: Direction, flags: ProjectFlags) {
		this.category = json.category;
		this.title = json.title;
		this.description = json.description;
		if (json.website) this.website = json.website;
		if (json.github) this.github = json.github;
		this.tags = json.tags;
		this.year = json.year;
		if (isMonth(json.month)) {
			this.month = json.month;
		} else {
			this.month = Month.Jan;
		}
		this.side = side;
		this.flags = flags;
	}

	abstract getBody(): HTMLElement;
}
