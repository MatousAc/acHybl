<script lang="ts">
	import HeroIcon from "./HeroIcon.svelte";
  export let href: string
</script>

<div
class="text-right">
  <a {href} class="flex justify-end items-center p-2">
    <slot/>
    <HeroIcon name="next" class="ml-2 text-2xl"/>
  </a>
</div>