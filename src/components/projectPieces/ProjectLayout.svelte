<script lang="ts">
	import { onMount } from 'svelte';
	import type Project from 'ts/ProjectClasses/Project';
	import { Direction } from 'ts/ProjectClasses/ProjectTypes';
	import Side from 'comp/projectPieces/Side.svelte';
	import TimelineSwap from 'comp/projectPieces/TimelineSwap.svelte';
	import Tag from 'pp/Tag.svelte';

	export let project: Project;

	const { title, tags, year, side, flags } = project;
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
		<Side {side} {flags} />
	{/if}
	<div class="content w-11/12 max-w-xl my-8 border-2 rounded-md">
		<div class="header py-3 px-5 border-b-2">
			<div
				class="flex flex-col flex-wrap gap-y-2 items-start md:flex-row md:justify-between md:items-center"
			>
				<div class="title font-bold">{title}</div>
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

		<!-- we let our injected dependency take care of the body -->
		<div class="body border-b" bind:this={body} />
		{#if project.website || project.github || project.timeRange}
			<div
				class="footer text-xs py-2 px-5 flex flex-col items-start gap-y-2 md:flex-row md:gap-y-0 md:justify-end md:items-center"
			>
				{#if project.website}
					<a
						class="website font-bold md:mr-auto"
						href="https://{project.website}"
						target="_blank"
						rel="noreferrer">{project.website}</a
					>
				{/if}
				{#if project.timeRange}
					<p class="timerange rounded-full">
						{project.timeRange}
					</p>
				{:else if project.github}
					<a
						class="github font-bold rounded-full"
						href="https://github.com/{project.github}"
						target="_blank"
						rel="noreferrer">Github</a
					>
				{/if}
			</div>
		{/if}
	</div>
	{#if side == Direction.right}
		<Side {side} {flags} />
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

	.footer a.website,
	.footer a.github {
		color: var(--accent-purple);
		border-color: var(--timeline);
		background-color: var(--off-background);
	}
</style>
