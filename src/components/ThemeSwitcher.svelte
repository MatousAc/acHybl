<script lang="ts">
  import type { SiteTheme } from "../ts/types";
  import { theme } from "../ts/stores";
  import Fa from 'svelte-fa'
  import { faMoon, faSun, faDisplay, type IconDefinition } from '@fortawesome/free-solid-svg-icons'

  let selectedTheme: SiteTheme = "system";
  let themeIcon: IconDefinition;
  theme.subscribe(val => {
    selectedTheme = val
    if (selectedTheme === "system") {
      themeIcon = faDisplay
    } else if (selectedTheme === "light") {
      themeIcon = faSun
    } else {
      themeIcon = faMoon
    }
  })

  $: changeTheme = () => {
    if (selectedTheme === "system") {
      $theme = "light"
    } else if (selectedTheme === "light") {
      $theme = "dark"
    } else {
      $theme = "system"
    }
  };
</script>

<button
  class="do-transition py-1 px-3 rounded-3xl hidden md:flex justify-center items-center {$$props.class}"
  on:click={changeTheme}
>
  <!-- <Icon name={selectedTheme}/> -->
  <Fa icon={themeIcon} style="min-width: 2ch;"/>
  <span class=ml-1>{selectedTheme} theme</span>
</button>

<style lang="scss">
button {
  background-color: var(--primary-hue);
  border: 2px solid var(--accent);
  color: var(--text);
  font-size: 0.9em;

  span {
    text-transform: capitalize;
    min-width: 12ch;
  }
}
</style>
