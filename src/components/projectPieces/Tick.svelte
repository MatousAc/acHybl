<script lang="ts">
	import { Direction } from 'ts/Project';
	export let side: Direction;
</script>

<!-- potentially items center looks good here too -->
<div
	class="flex flex-col items-{side == Direction.right
		? 'end'
		: 'start'} justify-center w-1/12 border-{side}-4"
>
	<span class="tick" />
</div>

<style>
	div {
		border-color: var(--timeline);
	}
	.tick {
		height: 4px;
		width: 80%;
		background-color: var(--timeline);
	}
</style>
