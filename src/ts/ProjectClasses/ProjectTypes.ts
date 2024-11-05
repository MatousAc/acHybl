export enum Direction {
	left = 'l',
	right = 'r'
}

export const getNextSide = (side: Direction): Direction => {
	return side === Direction.left ? Direction.right : Direction.left;
};

export enum ProjectCategory {
	academic = 'academic',
	work = 'work',
	other = 'other'
}

export enum BodyType {
	image = 'image',
	unitplayground = 'unitplayground',
	githubCard = 'githubCard',
	description = 'description',
	component = 'component'
}

export enum Month {
	Jan = 'Jan',
	Feb = 'Feb',
	Mar = 'Mar',
	Apr = 'Apr',
	May = 'May',
	Jun = 'Jun',
	Jul = 'Jul',
	Aug = 'Aug',
	Sep = 'Sep',
	Oct = 'Oct',
	Nov = 'Nov',
	Dec = 'Dec'
}

export function isMonth(value: any): value is Month {
	return Object.values(Month).includes(value);
}

export const toMonth = (m: number | string): Month => {
	// mapping month representations to Month enum values
	const monthMappings: { [key: string | number]: Month } = {
		1: Month.Jan,
		Jan: Month.Jan,
		January: Month.Jan,
		2: Month.Feb,
		Feb: Month.Feb,
		February: Month.Feb,
		3: Month.Mar,
		Mar: Month.Mar,
		March: Month.Mar,
		4: Month.Apr,
		Apr: Month.Apr,
		April: Month.Apr,
		5: Month.May,
		May: Month.May,
		6: Month.Jun,
		Jun: Month.Jun,
		June: Month.Jun,
		7: Month.Jul,
		Jul: Month.Jul,
		July: Month.Jul,
		8: Month.Aug,
		Aug: Month.Aug,
		August: Month.Aug,
		9: Month.Sep,
		Sep: Month.Sep,
		September: Month.Sep,
		10: Month.Oct,
		Oct: Month.Oct,
		October: Month.Oct,
		11: Month.Nov,
		Nov: Month.Nov,
		November: Month.Nov,
		12: Month.Dec,
		Dec: Month.Dec,
		December: Month.Dec
	};

	// make case-insensitive
	m = m === 'string' ? m.trim().toUpperCase() : m;

	// use mapping || default to Month.Jan
	return monthMappings[m] || Month.Jan;
};

export const monthToNumberMap: { [key in Month]: number } = {
	[Month.Jan]: 1,
	[Month.Feb]: 2,
	[Month.Mar]: 3,
	[Month.Apr]: 4,
	[Month.May]: 5,
	[Month.Jun]: 6,
	[Month.Jul]: 7,
	[Month.Aug]: 8,
	[Month.Sep]: 9,
	[Month.Oct]: 10,
	[Month.Nov]: 11,
	[Month.Dec]: 12
};

export type ProjectJson = {
	category: ProjectCategory;
	title: string;
	description: string;
	website?: string;
	github?: string;
	year: number;
	month: string | number | Month;
	timeRange?: string;
	tags: string[];
	bodyType: BodyType;
	imgSrc?: string;
	library?: string;
	componentName?: string;
};

export type ProjectFlags = {
	swap: boolean;
	first: boolean;
	last: boolean;
};
