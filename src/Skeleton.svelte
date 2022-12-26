<script lang="ts">
  import './css/theme.css'
  import DarkMode from "svelte-dark-mode";
  import ThemeToggle from './components/ThemeToggle.svelte'

  let theme;

  $: switchTheme = theme === "dark" ? "light" : "dark";
  $: document.body.className = theme;
</script>

<DarkMode bind:theme />

<main class="skeleton {theme}">
So here is the skeleton. Let's pretend we have a Nav here.

<h1>This is {theme} mode.</h1>
<p>Change the theme and reload the page.</p>

<button on:click={() => (theme = switchTheme)}>
  Switch to {switchTheme} mode
</button>
<ThemeToggle/>
</main>

<style>
.skeleton {
  color-scheme: light dark;
  background-color: var(--background);
  color: var(--foreground)
}
</style>