<script>
  import Icon from "./Icon.svelte"
  export let subtitle = "subtitle"
  export let previous = "none"
  export let next = "none"
</script>

<div class="flex justify-between items-center py-2">
  {#if previous != "none"}
    <a href={previous}>
      <Icon name="previous" class="text-4xl"/>
    </a>
  {/if}
  <h2 class="text-2xl text-left">{subtitle}</h2>
  <a href={next}>
    {#if next != "none"}
      <Icon name="next" class="text-4xl"/>
    {/if}
  </a>
</div>

<style>
h2 {
  text-transform: capitalize;
  color: var(--secondary-tint);
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>