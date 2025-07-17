<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from 'comp/Logo.svelte';
	import ThemeSwitcher from 'comp/ThemeSwitcher.svelte';
	import PageDimmer from 'comp/navigation/PageDimmer.svelte';
	import Burger from 'comp/navigation/Burger.svelte';
	import { mobileMenuOpen } from 'ts/stores';

	// component vars
	let open = false;
	let ulMouseDirection: string;
	let oldUlXCord: number;
	let ul: HTMLUListElement;

	mobileMenuOpen.subscribe((val) => (open = val));

	// links
	const links = [
		{ title: 'home', href: '/', target: '_self' },
		{ title: 'resume', href: 'resume.pdf', target: '_blank' },
		{ title: 'info', href: '/info', target: '_self' },
		// { title: 'testimony', href: '/testimony', target: '_self' },
		{ title: 'PBE', href: 'https://pbe.achybl.com/', target: '_self' }
	];

	onMount(() => {
		// media query listener so that when the screen size changes, the menu closes
		const mediaListener = window.matchMedia('(max-width: 599px)');
		mediaListener.addEventListener('change', (e: { matches: any }) => {
			// reset mobile state
			if (!e.matches) mobileMenuOpen.set(false);
		});

		// add event listener for mouse movement on links
		ul.addEventListener('mousemove', (e) => {
			ulMouseDirection = e.pageX < oldUlXCord ? 'left' : 'right';
			oldUlXCord = e.pageX;
		});
	});
</script>

<nav class="w-full z-20 flex items-center px-4 sticky justify-between{open ? ' open' : ''}">
	<!-- logo -->
	<a class="logo p-2 md:p-0 {open ? 'hidden' : ''}" href="/">
		<Logo class="w-16 md:w-20" />
	</a>

	<!-- links -->
	<ul
		bind:this={ul}
		class="links font-light m-0 md:flex md:justify-between md:px-5 {ulMouseDirection}"
		on:click={() => mobileMenuOpen.set(false)}
	>
		{#each links as link}
			<li>
				<a class="py-2 px-4 md:py-6 md:px-4 block" href={link.href} target={link.target}
					>{link.title}</a
				>
			</li>
		{/each}
	</ul>
	<ThemeSwitcher class="hidden md:flex md:ml-auto md:m-0" />

	<Burger class="md:hidden" />
</nav>
<PageDimmer />

<style lang="scss">
	nav {
		top: 0;
		background-color: var(--nav);
		color: var(--nav-text);
		font-size: 1.2rem;
		border-bottom: var(--nav-border-bottom-width) var(--nav-border) solid;
		ul.links {
			width: fit-content;

			li {
				list-style-type: none;
				position: relative;
				a {
					text-transform: capitalize;
				}
			}
		}
	}

	// link underline animation for large displays
	@media only screen and (min-width: 768px) {
		li:after {
			content: '';
			position: absolute;
			bottom: var(--nav-underline-distance);
			left: 0;
			width: 100.5%;

			height: 0.1rem;
			background: var(--nav-underline);
			transition: transform 0.3s;
			transform: scaleX(0);
		}
		li:hover:after {
			transform: scaleX(1);
		}
		ul.right li:after {
			transform-origin: right;
		}
		ul.right li:hover:after {
			transform-origin: left;
		}
		ul.left li:after {
			transform-origin: left;
		}
		ul.left li:hover:after {
			transform-origin: right;
		}
	}

	// mobile link display animation
	// eventually use: https://codepen.io/virgilpana/pen/NPzodr
	// or use an expanding circle with overflow hidden where overflow content is absolutely positioned
	@media only screen and (max-width: 768px) {
		nav ul.links {
			clip-path: circle(0% at 93% -23%);
			transition-duration: 0.6s;
			position: fixed;
			height: fit-content;
			width: 100vw;
			top: 3rem;
			bottom: 0;
			left: 0;
			background-color: var(--nav);
		}

		nav.open {
			:global(button) {
				display: flex;
				margin: 0.68rem 0;
			}

			ul.links {
				clip-path: circle(150% at 93% -23%);
			}
		}
	}
</style>
