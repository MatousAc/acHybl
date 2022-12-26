<script lang="ts">
  import './css/theme.css'
  import DarkMode from "svelte-dark-mode";

  let theme;

  $: switchTheme = theme === "dark" ? "light" : "dark";
  $: document.body.className = theme;
</script>

<main class="skeleton {theme}">
Some basic text.
<DarkMode bind:theme />

<h1>This is {theme} mode.</h1>
<p>Change the theme and reload the page.</p>

<button on:click={() => (theme = switchTheme)}>
  Switch to {switchTheme} mode
</button>
</main>

<style>
.skeleton {
  color-scheme: light dark;
  background-color: var(--background);
  color: var(--foreground)
}
</style>