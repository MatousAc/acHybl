<script>
  import HeroIcon from "../../components/HeroIcon.svelte"
  export let previous = "none"
  export let next = "none"
</script>

<div class="flex justify-between items-center py-2">
  {#if previous != "none"}
    <a href={previous}>
      <HeroIcon name="previous" class="text-4xl"/>
    </a>
  {/if}
  <h2 class="text-2xl text-left"><slot/></h2>
  <a href={next}>
    {#if next != "none"}
      <HeroIcon name="next" class="text-4xl"/>
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