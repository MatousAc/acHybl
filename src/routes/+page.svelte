<script lang="ts">
	import H1 from 'comp/headers/H1.svelte';
	import H3 from 'comp/headers/H3.svelte';
	import Tag from 'pp/Tag.svelte';
	import ProjectLayout from 'pp/ProjectLayout.svelte';
	import ImageProject from 'ts/ProjectClasses/ImageProject';
	import GithubCardProject from 'ts/ProjectClasses/GithubCardProject';
	import DescriptionProject from 'ts/ProjectClasses/DescriptionProject';
	import ComponentProject from 'ts/ProjectClasses/ComponentProject';
	import type Project from 'ts/ProjectClasses/Project';
	import {
		Direction,
		Month,
		isMonth,
		toMonth,
		monthToNumberMap,
		getNextSide,
		type ProjectJson
	} from 'ts/ProjectClasses/ProjectTypes';
	import CategoryLabel from 'pp/CategoryLabel.svelte';

	let projectJson: ProjectJson[];

	let loadProjects = async (): Promise<Project[]> => {
		// fetch data
		let file = '/portfolio/projects.json';
		try {
			const response = await fetch(window.origin + file);
			projectJson = await response.json();
		} catch (error) {
			console.log(`Error fetching ${file}`);
		}

		// process the loaded data
		// convert all months to our Month type
		projectJson = projectJson.map((p) => {
			// set to January bgy default
			p.month = toMonth(p.month) || Month.Jan;
			return p;
		});

		// make sure all projects are chronologically sorted
		projectJson.sort((a, b) => {
			if (a.year === b.year) {
				let aMonth: number = isMonth(a.month) ? monthToNumberMap[a.month] : 1;
				let bMonth: number = isMonth(b.month) ? monthToNumberMap[b.month] : 1;
				return aMonth > bMonth ? -1 : 1;
			} else return a.year > b.year ? -1 : 1;
		});

		let projects: Project[] = [];
		let curYear: number;
		let curSide = Direction.left;
		let flags = { swap: false, first: false, last: false };
		projectJson.forEach((p) => {
			// swapping sides for timeline based on year
			if (!curYear) curYear = p.year;
			else if (curYear !== p.year) {
				curSide = getNextSide(curSide);
				curYear = p.year;
				flags.swap = true;
			}

			switch (p.bodyType) {
				case 'image':
					projects.push(new ImageProject(p, curSide, { ...flags }));
					break;
				case 'githubCard':
					projects.push(new GithubCardProject(p, curSide, { ...flags }));
					break;
				case 'description':
					projects.push(new DescriptionProject(p, curSide, { ...flags }));
					break;
				case 'component':
					projects.push(new ComponentProject(p, curSide, { ...flags }));
					break;
				default:
					projects.push(new ImageProject(p, curSide, { ...flags }));
					break;
			}
			flags.swap = false;
		});

		projects[0].flags.first = true;
		projects[projects.length - 1].flags.last = true;
		return projects;
	};
</script>

<svelte:head>
	<title>Ac Hýbl | Portfolio</title>
</svelte:head>

<div class="lg:flex justify-between min-h-full">
	<!-- FIXME: re-do the sidebar so it makes more sense and more responsive -->
	<div class="md:relative sidebar lg:w-1/3 lg:border-r">
		<div
			class="h-screen p-10 pb-0 flex flex-col justify-center items-center mt-[-2.5rem] md:sticky md:top-20 md:pt-0 wideMobile:mt-0"
		>
			<img class="rounded-full w-5/6 wideMobile:w-1/4 max-w-md" src="portrait.jpeg" alt="Me" />
			<H1>Ac Hýbl</H1>
			<div class="flex flex-wrap justify-center gap-y-2 gap-x-4">
				<a class="rounded-full" href="/resume.pdf"><Tag tag="Resume" /></a>
				<a class="rounded-full" href="https://github.com/MatousAc"><Tag tag="Github" /></a>
			</div>
		</div>
	</div>
	<div class="timeline-of-projects flex justify-center px-4 lg:px-10 lg:w-2/3 py-10">
		<div class="max-w-xl lg:max-w-3xl w-full">
			<H3>Explore my projects at work and school in the timeline below!</H3>
			<div class="flex flex-wrap gap-x-6 gap-y-4 my-4">
				{#each ['work', 'academic', 'other'] as category}
					<CategoryLabel {category} />
				{/each}
			</div>
			{#await loadProjects()}
				<div class="flex justify-center mt-40">
					<img src="/loading.gif" alt="loading" />
				</div>
			{:then projects}
				{#each projects as project}
					<ProjectLayout {project} />
				{/each}
			{/await}
		</div>
	</div>
</div>

<style lang="scss">
	.intro {
		grid-area: 'intro';
	}

	.timeline-of-projects {
		background-color: var(--background);
	}

	.sidebar {
		border-color: var(--timeline);
		background-color: var(--off-background);
	}
</style>
