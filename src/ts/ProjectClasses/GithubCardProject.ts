import Project from 'ts/ProjectClasses/Project';
import type { Direction, ProjectFlags, ProjectJson } from 'ts/ProjectClasses/ProjectTypes';

export default class GithubCardProject extends Project {
	imgSrc: string;

	constructor(json: ProjectJson, side: Direction, flags: ProjectFlags) {
		super(json, side, flags);
		this.imgSrc = `https://gh-card.dev/repos${json.github}.svg`;
	}

	getBody(): HTMLElement {
		let wrapper: HTMLDivElement = document.createElement('div');
		let img: HTMLImageElement = document.createElement('img');
		img.src = this.imgSrc;
		wrapper.appendChild(img);
		return wrapper;
	}
}
