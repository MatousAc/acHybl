<script lang="ts">
	import {
		Direction,
		ProjectCategory,
		Month,
		type ProjectFlags
	} from 'ts/ProjectClasses/ProjectTypes';
	export let side: Direction;
	export let month: Month;
	export let flags: ProjectFlags;
	export let category: ProjectCategory;
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
		<svg viewBox="0 0 607 451" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M606.5 225.01C606.5 225.01 349.764 450.01 225.5 450.01C101.236 450.01 0.5 349.274 0.5 225.01C0.5 100.746 101.236 0.0102539 225.5 0.0102539C349.764 0.0102539 606.5 225.01 606.5 225.01Z"
				fill="var(--category-color)"
			/>
		</svg>
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
