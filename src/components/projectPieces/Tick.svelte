<script lang="ts">
	import { Direction, Month, type ProjectFlags } from 'ts/Project';
	export let side: Direction;
	export let month: Month;
	export let flags: ProjectFlags;
</script>

<!-- potentially items center looks good here too -->
<div
	class="flex flex-col items-{side == Direction.right
		? 'end'
		: 'start'} justify-center w-1/12 border-{side}-2 lg:m{side}-20 {flags.last
		? 'endTimeline'
		: ''}"
>
	<span class="tick" />
</div>

<style>
	div {
		border-color: var(--timeline);
	}
	.tick {
		height: 2px;
		width: 80%;
		background-color: var(--timeline);
	}

	.endTimeline {
		border-image: linear-gradient(to bottom, var(--timeline), var(--timeline), transparent) 1 100%;
	}
</style>
