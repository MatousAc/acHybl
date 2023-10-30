<script lang="ts">
	import Tick from 'comp/projectPieces/Tick.svelte';
	export let category: string;
</script>

<div class="category-label {category} flex py-1 px-3 border-2 rounded-md">
	<Tick class="w-6" style="transform:rotate(90deg)" />
	<span class="ml-2">{category}</span>
</div>

<style lang="scss">
	.category-label {
		border-color: var(--category-color);
		color: var(--category-color);
		span {
			filter: opacity(0.8);
			text-transform: capitalize;
		}
	}

	.category-label.work {
		--category-color: var(--accent-red);
	}

	.category-label.academic {
		--category-color: var(--accent-purple);
	}

	.category-label.other {
		--category-color: var(--accent-green);
	}
</style>
