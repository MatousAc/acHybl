<script lang="ts">
	import H1 from 'comp/H1.svelte';
	import H2 from 'comp/H2.svelte';
	import ProjectLayout from 'pp/ProjectLayout.svelte';
	// import UnitPlayground from 'unitplayground'
	import Project from 'ts/Project';
	import { Direction, Month, isMonth, toMonth, monthToNumberMap, getNextSide } from 'ts/Project';

	type ProjectJson = {
		title: string;
		year: number;
		month: string | number | Month;
		tags: string[];
		bodyType: 'image' | 'libraryElement';
		imgSrc?: string;
		library?: string;
	};

	let projectJson: ProjectJson[];

	let loadProjects = async (): Promise<Project[]> => {
		// fetch data
		let file = '/projects.json';
		try {
			const response = await fetch(window.origin + file);
			projectJson = await response.json();
		} catch (error) {
			console.log(`Error fetching ${file}`);
		}

		// process the loaded data
		// convert all months to our Month type
		projectJson = projectJson.map((p) => {
			// set to January by default
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

			if (isMonth(p.month)) {
				projects.push(new Project(p.title, p.tags, p.year, p.month, curSide, { ...flags }));
				flags.swap = false;
			}
		});

		projects[0].flags.first = true;
		projects[projects.length - 1].flags.last = true;
		console.log('Projects:', projects);
		return projects;
	};
</script>

<svelte:head>
	<title>Ac Hýbl | Portfolio</title>
</svelte:head>

<div class="lg:flex justify-between min-h-full">
	<div class="sidebar p-10 lg:w-1/3 lg:border-r flex flex-col justify-start items-center">
		<img src="/portraitSquareBlurred.jpg" alt="Me" class="rounded-lg width-max" />
		<H1>Ac Hýbl</H1>
		<a href="https://github.com/MatousAc">Github</a>
	</div>
	<div class="flex justify-center lg:px-10 lg:w-2/3 py-10">
		<div class="max-w-3xl w-full">
			<H2>Portfolio</H2>
			{#await loadProjects()}
				<img src="/loading.gif" alt="loading" />
			{:then projects}
				{#each projects as project}
					<ProjectLayout {project} />
				{/each}
				<!-- <TimelineDirectionSwap swapTo="l" /> -->
				<!-- <ProjectLayout side="l" /> -->
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		</div>
	</div>
</div>

<!-- <div class=unitPlayground>
  <UnitPlayground/>
</div> -->
<style>
	.unitPlayground {
		width: 800px;
		height: 500px;
	}

	.intro {
		grid-area: 'intro';
	}

	.sidebar {
		border-color: var(--h1);
		background-color: var(--nav-border);
	}

	/* @media only screen and (min-width: 768px) {
  div.grid {
    grid-template-areas: 
    "intro | sidebar"
  }
}

@media only screen and (max-width: 767px) {
  div.grid {
    grid-template-areas: 
    "sidebar | intro"
  }
} */
</style>
