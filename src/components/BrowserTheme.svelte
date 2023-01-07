<script lang="ts">
  import { theme } from "../ts/stores";

	let color: string;
  theme.subscribe(val => {
    if (val === "dark") {
      color = "#240090"
    } else if (val === "light") {
      color = "#494949"
    } else {
      color = "var(--address-bar-color)"
    }
  })
</script>

<svelte:head>
  <meta name="theme-color" content={color} >
</svelte:head>

<style>
@media (prefers-color-scheme: light) {
  :root {
    --address-bar-color: "#494949";
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --address-bar-color: "#240090";
  }
}
</style>