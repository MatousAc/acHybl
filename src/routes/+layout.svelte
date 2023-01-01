<script lang="ts">
  import '../app.postcss';
  import '../css/theme.css'
	import Bar from '../components/Bar.svelte';
  import type { SiteTheme } from "../ts/types";
  import { theme } from "../ts/stores";
	import Analytics from '../components/Analytics.svelte';
  
  let selectedTheme: SiteTheme;
  theme.subscribe(val => selectedTheme = val)
</script>

<Analytics />

<main class="skeleton {selectedTheme}">
<Bar/>
<slot/>

</main>
  
<style>
.skeleton {
  color-scheme: light dark;
  background-color: var(--background);
  color: var(--foreground);
  
  min-height: 100vh;
}
</style>
