<script lang="ts">
	import type Project from 'ts/Project';
	import Tick from './Tick.svelte';
	import { Direction, Month } from 'ts/Project';
	import TimelineDirectionSwap from './TimelineDirectionSwap.svelte';

	export let project: Project;

	const { title, tags, year, month, side, timelineSwap } = project;
	const otherSide = (side: string) => (side === 'r' ? 'l' : 'r');
</script>

{#if timelineSwap}
	<TimelineDirectionSwap swapTo={side} />
{/if}

<div class="project flex">
	{#if side == Direction.left}
		<Tick {side} />
	{/if}
	<div class="content w-11/12 my-4 m{otherSide(side)}-20 border rounded-md">
		<div class="">
			<div class="header py-2 px-5 border-b-2 flex justify-between items-center">
				<div class="title w-2/3">{title}</div>
				<div class="icons flex justify-end">
					{#each tags as tag}
						<img class="ml-2" src="/portfolio/tags/{tag}.svg" alt={tag} />
					{/each}
				</div>
			</div>
			<slot name="body" />
		</div>
	</div>
	{#if side == Direction.right}
		<Tick {side} />
	{/if}
</div>

<style lang="scss">
	.header {
		border-color: var(--nav-border);

		.title {
			color: var(--h1);
			font-size: 1.5rem;
		}
	}

	.content {
		background-color: var(--nav);
		border-color: var(--nav-border);
		color: var(--nav-text);
	}
	img {
		width: 18%;
	}
</style>
