import Project from 'ts/ProjectClasses/Project';
import type { Direction, ProjectFlags, ProjectJson } from 'ts/ProjectClasses/ProjectTypes';

export default class ImageProject extends Project {
	imgSrc: string;

	constructor(json: ProjectJson, side: Direction, flags: ProjectFlags) {
		super(json, side, flags);
		this.imgSrc = json.imgSrc ? '/portfolio/images/' + json.imgSrc : '';
	}

	getBody(): HTMLElement {
		let wrapper: HTMLDivElement = document.createElement('div');
		let img: HTMLImageElement = document.createElement('img');
		img.src = this.imgSrc;
		img.style.width = '100%';
		wrapper.appendChild(img);
		return wrapper;
	}
}
