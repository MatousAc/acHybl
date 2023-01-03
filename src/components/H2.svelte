<script>
  import Icon from "./Icon.svelte"
  export let subtitle = "subtitle"
  export let icon = "none"
</script>

<div class="flex justify-between items-center py-2">
  <h2 class="text-2xl text-left">{subtitle}</h2>
  {#if icon != "none"}
  <Icon name={icon} class="text-2xl mr-20"/>
  {/if}
</div>

<style>
h2 {
  text-transform: capitalize;
  color: var(--secondary-tint);
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>