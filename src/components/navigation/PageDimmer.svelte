<script lang="ts">
	import { mobileMenuOpen } from 'ts/stores';
	let open = false;

	mobileMenuOpen.subscribe((val) => (open = val));
</script>

<div
	on:click={() => mobileMenuOpen.set(false)}
	class="fixed top-0 left-0 w-full z-10 {open ? 'show' : ''} {$$props.class}"
/>

<style lang="scss">
	div {
		height: 110%;
		background-color: #0000008f;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.25s 0.3s, visibility 0.25s 0.3s; // delay fade-out
	}

	div.show {
		transition: opacity 0.25s 0s, visibility 0.25s 0s;
		opacity: 0.5;
		visibility: visible;
	}
</style>
