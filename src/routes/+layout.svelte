<script lang="ts">
  import '../app.postcss';
  import '../css/colors.css'
	import Bar from '../components/Bar.svelte';
  import type { SiteTheme } from "../ts/types";
  import { theme } from "../ts/stores";
	import GoogleAnalytics from '../components/GoogleAnalytics.svelte';
  
  let selectedTheme: SiteTheme;
  theme.subscribe(val => selectedTheme = val)
</script>

<GoogleAnalytics/>

<main class="skeleton {selectedTheme}">
  <Bar/>
  <div class="content width-full px-4 mx-auto md:py-8 md:px-20">
    <slot/>
  </div>
</main>

<style>
.skeleton {
  color-scheme: light dark;
  background-color: var(--primary-hue);
  color: var(--text);
  
  min-height: 100vh;
}

.content {
  max-width: 1000px;
}
</style>
