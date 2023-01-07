<script lang="ts">
  import { onMount } from "svelte"
	import Logo from "./Logo.svelte"
	import ThemeSwitcher from "./ThemeSwitcher.svelte"

  // component vars
  let showMobileMenu = false;
  let ulMouseDirection: string;
  let oldUlXCord: number;
  let ul: HTMLUListElement;

  // links
  const pages = [
    { title: "home", href: "/" },
    { title: "resume", href: "./resources/resume.pdf" },
    { title: "testimony", href: "/testimony" },
    { title: "info", href: "/info" }
  ]

  // media match query handler
  const mediaQueryHandler = (e: { matches: any; }) => {
    // reset mobile state
    if (!e.matches) {
      showMobileMenu = false;
    }
  }

  onMount(() => {
    // attach media query listener on mount hook
    const mediaListener = window.matchMedia("(max-width: 599px)");
    mediaListener.addListener(mediaQueryHandler);
    // add event listener for mouse movement on links
    ul.addEventListener("mousemove", e => {
      ulMouseDirection = (e.pageX < oldUlXCord) ? "left" : "right"
      oldUlXCord = e.pageX
    })
  })
</script>

<nav class="w-full flex items-center px-8 md:sticky">
  <!-- logo -->
  <a class="p-2 md:p-0" href="/">
    <Logo class="w-16 md:w-20" primaryColor="var(--text)" secondaryColor="var(--secondary-tint)"/>
  </a>

  <!-- reactivity -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={() => showMobileMenu = !showMobileMenu}
  class={`ml-auto mobile-icon${showMobileMenu ? ' active' : ''}`}>
    <div class="middle-line"></div>
  </div>

  <!-- links -->
  <ul bind:this={ul}
    class="links md:flex md:px-8 {
    ulMouseDirection}{showMobileMenu ? ' mobile' : ''}">
    {#each pages as page}
      <li>
        <a class="py-2 md:p-6" href={page.href}>{page.title}</a>
      </li>
    {/each}
  </ul>

  <!-- theme -->
  <ThemeSwitcher class="ml-auto"/>
</nav>

<style lang="scss">
nav {
  top: 0;
  background-color: var(--primary-shade);
  color: var(--secondary-shade);
  font-size: 1.2rem;
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
// link underline animation
li:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100.5%;

  height: 0.1em;
  background: var(--accent);
  transition: transform 0.2s;
  transform: scaleX(0);
}
li:hover:after {
  transform: scaleX(1);
}
ul.right li:after       {transform-origin: right;}
ul.right li:hover:after {transform-origin: left;}
ul.left  li:after       {transform-origin: left;}
ul.left  li:hover:after {transform-origin: right;}

// mobile navbar styling
.links {
  display: none;
  width: 100%;
  justify-content: space-between;
  margin: 0;
  padding: 0 40px;
  font-weight: 300;
}

.links.mobile {
  background-color: var(--primary-shade);
  position: fixed;
  display: block;
  top: 3rem;
  width: 100%;
  height: fit-content;
  bottom: 0;
  left: 0;
}

// @media screen(sm) {
@media only screen and (min-width: 768px) {
  .mobile-icon {
    display: none;
  }

  .links {
    display: flex;
    padding: 0;
  }

  .links a {
    display: inline-flex;
  }
}

// mobile icon animation
.mobile-icon {
  width: 25px;
  height: 14px;
  position: relative;
  cursor: pointer;
}

.mobile-icon:after,
.mobile-icon:before,
.middle-line {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: var(--secondary-tint);
  transition: all 0.4s ease;
  transform-origin: center;
}

.mobile-icon:before,
.middle-line {
  top: 0;
}
.mobile-icon:after,
.middle-line {
  bottom: 0;
}
.mobile-icon:before {
  width: 70%;
}
.mobile-icon:after {
  width: 40%;
}

.middle-line {
  margin: auto;
}
.mobile-icon.active:before,
.mobile-icon.active:after,
.mobile-icon.active .middle-line {
  width: 100%;
}
.mobile-icon.active:before,
.mobile-icon.active:after {
  top: 50%;
  transform: rotate(-45deg);
}
.mobile-icon.active .middle-line {
  transform: rotate(45deg);
}
</style>