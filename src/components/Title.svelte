<script>
  import Icon from "./Icon.svelte"
  export let title = "title"
  export let icon = "none"
</script>

<div class="flex justify-between items-center py-8 px-20">
  <h1 class="text-6xl font-serif text-left">{title}</h1>
  {#if icon != "none"}
  <Icon name={icon} class="text-6xl"/>
  {/if}
</div>

<style>
h1 {
  text-transform: capitalize;
  color: var(--secondary-tint);
}
</style>