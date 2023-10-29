<script lang="ts">
	import { Direction, type ProjectFlags } from 'ts/ProjectClasses/ProjectTypes';

	export let swapTo: Direction;
	export let year: number;
	export let flags: ProjectFlags;
</script>

<div class="swap relative h-40 lg:mx-40">
	<div class="top">
		<div
			class="curve tl {swapTo === Direction.right && !flags.first ? 'border-b-2 border-l-2' : ''}"
		/>
		<div
			class="curve tr {swapTo === Direction.left && !flags.first ? 'border-b-2 border-r-2' : ''}"
		/>
	</div>
	<div class="bottom">
		<div class="curve bl {swapTo === Direction.left ? 'border-t-2 border-l-2' : ''}" />
		<div class="curve br {swapTo === Direction.right ? 'border-t-2 border-r-2' : ''}" />
	</div>
	<div class="absolute top-0 left-0 w-full h-full flex justify-center items-center">
		<div class="relative year py-1 px-4 border rounded-md">
			{year}
		</div>
	</div>
</div>

<style lang="scss">
	.curve {
		height: 100%;
		border-color: var(--timeline);
		width: 50%;
	}

	.top,
	.bottom {
		display: flex;
		height: 50%;

		div.tl {
			border-bottom-left-radius: 100%;
		}
		div.tr {
			border-bottom-right-radius: 100%;
		}
		div.bl {
			border-top-left-radius: 100%;
		}
		div.br {
			border-top-right-radius: 100%;
		}
	}

	.swap {
		margin-bottom: -0.12rem;
		.top {
			margin-bottom: -0.12rem;
		}
	}

	.year {
		background-color: var(--nav);
		border-color: var(--timeline);
	}
</style>
