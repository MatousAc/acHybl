<script lang="ts">
	import { mobileMenuOpen } from 'ts/stores';
	let open = false;

	mobileMenuOpen.subscribe((val) => (open = val));
</script>

<div
	on:click={() => mobileMenuOpen.update((val) => !val)}
	class="burger{open ? ' active' : ''} {$$props.class}"
>
	<div class="middle-line" />
</div>

<style lang="scss">
	// mobile icon animation
	.burger {
		width: 25px;
		height: 14px;
		position: relative;
		cursor: pointer;
	}

	.burger:after,
	.burger:before,
	.middle-line {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: var(--menu);
		transform-origin: center;
	}

	.burger:before,
	.burger:after {
		transition: all 0.4s ease;
	}

	.burger:before,
	.middle-line {
		top: 0;
	}
	.burger:after,
	.middle-line {
		bottom: 0;
	}

	.middle-line {
		margin: auto;
		transition-delay: 0.2s;
		transition: all 0.25s ease;
	}

	.burger.active:before,
	.burger.active:after {
		top: 45%;
		transform: rotate(-45deg);
	}

	.burger.active:after {
		transform: rotate(45deg);
	}

	.burger.active .middle-line {
		transition-delay: 0s;
		opacity: 0;
	}
</style>
