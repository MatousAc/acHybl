<script lang="ts">
	import {
		Direction,
		ProjectCategory,
		Month,
		type ProjectFlags
	} from 'ts/ProjectClasses/ProjectTypes';
	import Tick from './Tick.svelte';
	export let side: Direction;
	export let flags: ProjectFlags;
</script>

<!-- potentially items center looks good here too -->
<div
	class="flex flex-col items-{side == Direction.right
		? 'end'
		: 'start'} justify-center w-1/12 border-{side}-2 lg:m{side}-40 {flags.last
		? 'endTimeline'
		: ''}"
>
	<div
		class="w-7"
		style="transform: {side == Direction.right ? 'rotate(180deg) ' : ''}translateX(-40%);"
	>
		<Tick />
	</div>
</div>

<style>
	div {
		/* border-color: var(--timeline); */
		border-image: linear-gradient(
				to bottom,
				var(--timeline),
				var(--timeline),
				var(--timeline),
				var(--category-color),
				var(--timeline),
				var(--timeline),
				var(--timeline)
			)
			1 100%;
	}

	.endTimeline {
		border-image: linear-gradient(to bottom, var(--timeline), var(--timeline), transparent) 1 100%;
		border-image: linear-gradient(
				to bottom,
				var(--timeline),
				var(--timeline),
				var(--category-color),
				transparent,
				transparent
			)
			1 100%;
	}
</style>
