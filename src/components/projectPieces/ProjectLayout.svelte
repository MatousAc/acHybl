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
	<div class="content w-11/12 max-w-xl my-8 border-2 rounded-md">
		<div class="header py-3 px-5 border-b-2">
			<div
				class="flex flex-col flex-wrap gap-y-2 items-start md:flex-row md:justify-between md:items-center"
			>
				<div class="title font-light">{title}</div>
				<div class="flex flex-wrap gap-y-2 gap-x-2 justify-start md:justify-end">
					{#each tags as tag}
						<Tag {tag} />
					{/each}
				</div>
			</div>
			{#if project.description}
				<p class="pt-3">{project.description}</p>
			{/if}
		</div>
		<div class="body border-b" bind:this={body} />
		{#if project.website || project.github}
			<div
				class="footer py-2 px-5 flex flex-col items-start gap-y-2 md:flex-row md:gap-y-0 md:justify-between md:items-center"
			>
				{#if project.website}
					<a class="website py-1 px-2 border rounded-md mr-auto" href="https://{project.website}"
						>{project.website}</a
					>
				{/if}
				{#if project.github}
					<a class="github rounded-full md:ml-auto" href="https://github.com/{project.github}"
						><Tag tag="Github" /></a
					>
				{/if}
			</div>
		{/if}
	</div>
	{#if side == Direction.right}
		<Tick {side} {month} {flags} {category} />
	{/if}
</div>

<style lang="scss">
	.project.work {
		--category-color: var(--accent-red);
	}

	.project.academic {
		--category-color: var(--accent-purple);
	}

	.project.other {
		--category-color: var(--accent-green);
	}

	.header,
	.body {
		border-color: var(--timeline);
	}

	.header .title {
		color: var(--text);
		font-size: 1.2rem;
	}

	.content {
		background-color: var(--off-background);
		border-color: var(--timeline);
		color: var(--text);
	}

	.footer a.website {
		color: var(--h1);
		border-color: var(--timeline);
		background-color: var(--off-background);
		font-weight: 600;
	}
</style>
