<script lang="ts">
	export let tag: string;

	const cleanTag = (str: string): string => {
		str = str.toLowerCase();
		str = str.replaceAll('.', 'dot');
		str = str.replaceAll('+', 'plus');
		return str;
	};
</script>

<div class="tag h-7 pr-2 flex justify-between items-center border rounded-full">
	<div class="icon flex absolute w-max border-r-2 {cleanTag(tag)}">
		<img class="ml-2 mr-1 w-4" src="/portfolio/tags/{cleanTag(tag)}.svg" alt={tag} title={tag} />
	</div>
	<span class="ml-9">{tag}</span>
</div>

<style lang="scss">
	.tag {
		font-size: 0.9rem;
		border-color: var(--nav-border);
		background-color: var(--nav);
		position: relative;
		overflow: hidden;

		* {
			padding: 0.25rem 0;
		}

		div.icon {
			border-color: var(--nav-border);
		}
		span {
			display: inline-flex;
			position: relative;
		}
	}

	div.icon.svelte {
		background-color: #ff3e00;
	}
	div.icon.javascript {
		background-color: #f7df1e;
	}
	div.icon.postresql {
		background-color: #4169e1;
	}
	div.icon.react {
		background-color: #61dafb;
	}
	div.icon.typescript {
		background-color: #3178c6;
	}
	div.icon.python {
		background-color: #3776ab;
	}
	div.icon.nestjs {
		background-color: #e0234e;
	}
	div.icon.nodedotjs {
		background-color: #339933;
	}
	div.icon.tensorflow {
		background-color: #ff6f00;
	}
	div.icon.java {
		background-color: #007396;
	}
	div.icon.css {
		background-color: #2d53e5;
	}
	div.icon.html {
		background-color: #e5532d;
	}
	div.icon.drupal {
		background-color: #089fdf;
	}
	div.icon.xquery {
		background-color: #fcbc08;
	}
	div.icon.cplusplus {
		background-color: #6a9dd3;
	}
	div.icon.r {
		background-color: #1965b8;
	}
	div.icon.electron {
		background-color: #a4eefc;
	}
	div.icon.azure {
		background-color: #175ba1;
	}
	div.icon.github {
		background-color: #080808;
	}
	div.icon.ai {
		background-color: #c9d1fe;
	}
	div.icon.supabase {
		background-color: #000;
	}
	div.icon.resume {
		background-color: #141217;
	}
</style>
