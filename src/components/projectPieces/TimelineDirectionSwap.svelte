<script lang="ts">
	export let swapTo: 'l' | 'r';
</script>

<div class="swap h-40">
	<svg
		width="100%"
		height="100%"
		viewBox="0 0 1947 1141"
		preserveAspectRatio="none"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			class={swapTo}
			d="M6.4703 6.5C6.4703 6.5 6.07578 39.9013 6.47018 59.8185C7.66141 119.977 24.8906 183.09 47.7313 238.5C74.9239 304.467 120.254 366.873 172.483 415.069C259.088 494.988 379.311 530.523 493.95 544.219C642.582 561.977 794.427 555.66 943.864 560.055C1114.61 565.077 1286.47 580.985 1452.11 624.367C1589.37 660.316 1722.73 723.846 1813.43 836.655C1860.76 895.526 1899.89 966.925 1922.34 1039.18C1940 1096 1940 1135 1940 1135"
			stroke="var(--timeline)"
			stroke-width="11"
			stroke-linecap="square"
		/>
	</svg>
</div>

<style>
	div {
		margin: -1px 0;
	}

	path.l {
		transform: scale(1, -1) translate(0, -100%);
	}
</style>
