<script lang="ts">
  import type { SiteTheme } from "../ts/types";
  import { theme } from "../ts/stores";
	import Icon from "./Icon.svelte";
  
  let selectedTheme: SiteTheme;
  theme.subscribe(val => selectedTheme = val)

  $: changeTheme = () => {
    if (selectedTheme === "system") {
      $theme = "light";
    } else if (selectedTheme === "light") {
      $theme = "dark";
    } else {
      $theme = "system";
    }
  };
</script>

<button
  class="do-transition py-1 px-4 rounded-2xl flex justify-center items-center"
  on:click={changeTheme}
>
  <Icon name={selectedTheme}/>
  <span class=ml-1>{selectedTheme} theme</span>
</button>

<style lang="scss">
button {
  background-color: var(--primary-hue);
  border: 2px solid var(--accent);
  color: var(--foreground);
  font-size: 0.9em;

  span {
    text-transform: capitalize;
    min-width: 12ch;
  }
}
</style>
