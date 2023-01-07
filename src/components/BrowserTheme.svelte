<script lang="ts">
	import { onMount } from "svelte";
  import { theme } from "../ts/stores";
	import Bar from "./Bar.svelte";

  let meta: HTMLMetaElement;
  onMount(() => {
    theme.subscribe(val => {
      if (val === "dark") {
        meta.setAttribute("content", "#240090")
      } else if (val === "light") {
        meta.setAttribute("content", "#494949")
      } else {
        meta.setAttribute("content", 
          getComputedStyle(meta).getPropertyValue("--clr"))
      }
    })
  })
</script>

<svelte:head>
  <meta bind:this={meta} name="theme-color">
</svelte:head>

<style>
meta {
  --clr: "#240090";
}

@media (prefers-color-scheme: light) {
  meta {
    --clr: "#494949";
  }
}

@media (prefers-color-scheme: dark) {
  meta {
    --clr: "#240090";
  }
}
</style>