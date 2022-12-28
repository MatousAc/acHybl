<script lang="ts">
	import { theme } from '../ts/theme';
  
	let toggleTheme = () => {
		theme.update((val) => (val === 'dark' ? 'light' : 'dark'));
	};
</script>

<div>
	<input on:change={toggleTheme} type="checkbox" class="checkbox" id="checkbox" />
	<label for="checkbox" class="label">
		<!-- <img class=moon src="../assets/moon.svg">
  <img class=sun src="../assets/sun.svg"> -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			class="w-5 h-5 moon"
		>
			<path
				fill-rule="evenodd"
				d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
				clip-rule="evenodd"
			/>
		</svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			class="w-5 h-5 sun"
		>
			<path
				d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z"
			/>
		</svg>

		<div class="ball" /></label
	>
</div>

<style>
	* {
		box-sizing: border-box;
	}
	body {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		margin: 0;
		transition: background 0.2s linear;
	}
	body.dark {
		background-color: #292c35;
	}
	.checkbox {
		opacity: 0;
		position: absolute;
	}

	.label {
		width: 50px;
		height: 26px;
		background-color: #111;
		display: flex;
		border-radius: 50px;
		align-items: center;
		justify-content: space-between;
		padding: 5px;
		position: relative;
		transform: scale(1.5);
	}

	.ball {
		width: 20px;
		height: 20px;
		background-color: white;
		position: absolute;
		top: 2px;
		left: 2px;
		border-radius: 50%;
		transition: transform 0.2s linear;
	}

	/*  target the elemenent after the label*/
	.checkbox:checked + .label .ball {
		transform: translateX(24px);
	}

	.moon {
		color: pink;
	}

	.sun {
		color: yellow;
	}
</style>
