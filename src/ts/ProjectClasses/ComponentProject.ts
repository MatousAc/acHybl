import Project from 'ts/ProjectClasses/Project';
import type { Direction, ProjectFlags, ProjectJson } from 'ts/ProjectClasses/ProjectTypes';
import DBShadow from 'comp/DBShadow.svelte';
import UnitPlayground from 'unitplayground';

export default class ComponentProject extends Project {
	constructor(json: ProjectJson, side: Direction, flags: ProjectFlags) {
		super(json, side, flags);
	}

	getBody(): HTMLElement {
		let base: HTMLDivElement = document.createElement('div');
		switch (this.componentName) {
			case 'DBShadow':
				new DBShadow({
					target: base
				});
				break;

			case 'unitPlayground':
				base.style.width = '100%';
				base.style.height = '18rem';
				new UnitPlayground({
					target: base
				});
			default:
				break;
		}
		return base;
	}
}
