<script>
  import Icon from "./Icon.svelte"
  export let title = "title"
  export let icon = "none"
</script>

<div class="flex justify-start md:justify-between items-center py-4 md:p-8">
  <h1 class="text-4xl md:text-6xl text-left">{title}</h1>
  {#if icon != "none"}
  <Icon name={icon} class="text-6xl"/>
  {/if}
</div>

<style lang="scss">
div {
  color: var(--secondary-tint);
  h1 {
    text-transform: capitalize;
  }
}
</style>