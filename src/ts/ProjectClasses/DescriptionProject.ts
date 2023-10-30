import Project from 'ts/ProjectClasses/Project';
import type { Direction, ProjectFlags, ProjectJson } from 'ts/ProjectClasses/ProjectTypes';

export default class ImageProject extends Project {
	descriptionBody: string;

	constructor(json: ProjectJson, side: Direction, flags: ProjectFlags) {
		super(json, side, flags);
		this.descriptionBody = this.description;
		this.description = '';
	}

	getBody(): HTMLElement {
		let wrapper: HTMLDivElement = document.createElement('div');
		// give it the same margin as the header and footer
		wrapper.classList.add('py-3');
		wrapper.classList.add('px-5');
		let p: HTMLParagraphElement = document.createElement('p');
		p.innerHTML = this.descriptionBody;
		wrapper.appendChild(p);
		return wrapper;
	}
}
