<script lang="ts">
  import '../app.postcss';
  import '../css/theme.css'
	import ThemeToggle from '../components/ThemeToggle.svelte';
  import { theme } from '../ts/theme'
	import Bar from '../components/Bar.svelte';

  let currentTheme: string;
  theme.subscribe(val => currentTheme = val)
</script>

<main class="skeleton">
<Bar/>

<h1>This is {currentTheme} mode.</h1>
<p>Change the theme and reload the page.</p>

<ThemeToggle/>

<slot />
</main>
  
<style>
.skeleton {
  color-scheme: light dark;
  background-color: var(--background);
  color: var(--foreground)
}
</style>
