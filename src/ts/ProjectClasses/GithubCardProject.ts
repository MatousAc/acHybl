import ImageProject from 'ts/ProjectClasses/ImageProject';
import type { Direction, ProjectFlags, ProjectJson } from 'ts/ProjectClasses/ProjectTypes';

export default class GithubCardProject extends ImageProject {
	imgSrc: string;

	constructor(json: ProjectJson, side: Direction, flags: ProjectFlags) {
		super(json, side, flags);
		this.imgSrc = json.github ? `https://gh-card.dev/repos${json.github}.svg` : '';
	}
}
