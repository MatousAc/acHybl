import Project from 'ts/ProjectClasses/Project';
import type { Direction, ProjectFlags, ProjectJson } from 'ts/ProjectClasses/ProjectTypes';
import UnitPlayground from 'unitplayground';

export default class UPProject extends Project {
	constructor(json: ProjectJson, side: Direction, flags: ProjectFlags) {
		super(json, side, flags);
		console.log('UPProject');
	}

	getBody(): HTMLElement {
		let base: HTMLDivElement = document.createElement('div');
		base.style.width = '100%';
		base.style.height = '18rem';
		new UnitPlayground({
			target: base
		});
		return base;
	}
}
