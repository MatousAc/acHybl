<script lang="ts">
	import { onMount } from 'svelte';
	import type Project from 'ts/ProjectClasses/Project';
	import { Direction } from 'ts/ProjectClasses/ProjectTypes';
	import Tick from 'pp/Tick.svelte';
	import TimelineSwap from 'comp/projectPieces/TimelineSwap.svelte';
	import Tag from 'pp/Tag.svelte';

	export let project: Project;

	const { category, title, tags, year, month, side, flags } = project;
	let body: HTMLDivElement;
	onMount(() => {
		body.appendChild(project.getBody());
	});
</script>

{#if flags.swap || flags.first}
	<TimelineSwap swapTo={side} {year} {flags} />
{/if}

<div class="project flex justify-between {project.category}">
	{#if side == Direction.left}
		<Tick {side} {month} {flags} {category} />
	{/if}
	<div class="content w-11/12 max-w-xl my-4 border-2 rounded-md">
		<div class="header py-3 px-5 border-b-2">
			<div
				class="flex flex-col flex-wrap gap-y-2 items-start md:flex-row md:justify-between md:items-center"
			>
				<div class="title">{title}</div>
				<div class="flex flex-wrap gap-y-2 gap-x-2 justify-start md:justify-end">
					{#each tags as tag}
						<Tag {tag} />
					{/each}
				</div>
			</div>
			<p class="pt-3">{project.description}</p>
		</div>
		<div class="body border-b" bind:this={body} />
		{#if project.website || project.github}
			<div
				class="footer py-2 px-5 flex flex-col items-start gap-y-2 md:flex-row md:gap-y-0 md:justify-between md:items-center"
			>
				{#if project.website}
					<a class="website py-1 px-2 border rounded-md" href="https://{project.website}"
						>{project.website}</a
					>
				{/if}
				{#if project.github}
					<a class="github rounded-full" href="https://github.com/{project.github}"
						><Tag tag="Github" /></a
					>
				{/if}
			</div>
		{/if}
	</div>
	{#if side == Direction.right}
		<Tick {side} {month} {flags} />
	{/if}
</div>

<style lang="scss">
	.project.work {
		--category-color: #ec7d7d;
	}

	.project.academic {
		--category-color: #a292e7;
	}

	.project.other {
		--category-color: #4eb169;
	}

	.header,
	.body {
		border-color: var(--nav-border);
	}

	.header .title {
		color: var(--timeline);
		font-size: 1.2rem;
		font-weight: 300;
	}

	.content {
		background-color: var(--nav);
		border-color: var(--nav-border);
		color: var(--nav-text);
	}

	.footer a.website {
		color: var(--h1);
		border-color: var(--nav-border);
		background-color: var(--nav);
		font-weight: 600;
	}
</style>
