<script lang="ts">
	import type Project from 'ts/Project';
	import { Direction, Month, type ProjectFlags } from 'ts/Project';
	import Tick from 'pp/Tick.svelte';
	import TimelineDirectionSwap from 'pp/TimelineDirectionSwap.svelte';
	import Tag from 'pp/Tag.svelte';

	export let project: Project;

	const { title, tags, year, month, side, flags } = project;
</script>

{#if flags.swap || flags.first}
	<TimelineDirectionSwap swapTo={side} {year} {flags} />
{/if}

<div class="project flex">
	{#if side == Direction.left}
		<Tick {side} {month} {flags} />
	{/if}
	<div class="content w-11/12 my-4 border rounded-md">
		<div class="">
			<div class="header py-2 px-5 border-b flex justify-between items-center">
				<div class="title w-2/3">{title}</div>
				<div class="icons flex justify-end">
					{#each tags as tag}
						<Tag {tag} />
					{/each}
				</div>
			</div>
			<slot name="body" />
		</div>
	</div>
	{#if side == Direction.right}
		<Tick {side} {month} {flags} />
	{/if}
</div>

<style lang="scss">
	.header {
		border-color: var(--nav-border);

		.title {
			color: var(--timeline);
			font-size: 1.2rem;
			font-weight: 300;
		}
	}

	.content {
		background-color: var(--nav);
		border-color: var(--nav-border);
		color: var(--nav-text);
	}
</style>
