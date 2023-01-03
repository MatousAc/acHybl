<script lang="ts">
	import Icon from "./Icon.svelte";
  export let href: string
</script>

<div
class="text-right">
  <a {href} class="flex justify-end items-center p-2">
    <slot/>
    <Icon name="next" class="ml-2"/>
  </a>
</div>