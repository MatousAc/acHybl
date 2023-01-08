<script lang="ts">
  import '../app.postcss';
  import '../css/colors.css'
	import Bar from '../components/Bar.svelte';
  import type { SiteTheme } from "../ts/types";
  import { theme } from "../ts/stores";
	import GoogleAnalytics from '../components/GoogleAnalytics.svelte';
	import BrowserTheme from '../components/BrowserTheme.svelte';
  
  let selectedTheme: SiteTheme;
  theme.subscribe(val => selectedTheme = val)
</script>

<GoogleAnalytics/>
<BrowserTheme/>

<main class="skeleton {selectedTheme}">
  <Bar/>
  <div class="content width-full px-4 mx-auto md:py-8 md:px-20">
    <slot/>
  </div>
</main>

<style>
.skeleton {
  color-scheme: light dark;
  background-color: var(--background);
  color: var(--text);
  
  min-height: 100vh;
}

.content {
  max-width: 1000px;
}
</style>
