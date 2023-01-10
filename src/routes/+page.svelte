<script lang="ts">
	import H1 from "comp/H1.svelte";



</script>

<svelte:head>
  <title>Ac Hýbl | Portfolio</title>
</svelte:head>

<div class="md:flex justify-between">
  <div class="intro py-12 px-4">
    <h2>This page is still under development.</h2>
    <p>Yeah, I know that's kinda lame, but I've promised myself to finish this later. Feel free to come back in a month or two so see the finished product.</p>
  </div>
  <div class="acHybl flex flex-col justify-start items-center">
    <img src="/portraitSquare.jpg" alt="Me" class="rounded-full" />
    <H1>Ac Hýbl</H1>
    <a href="https://github.com/MatousAc">Github</a>
  </div>
</div>

<style>
img {
  width: 12rem;
}

.intro {
  grid-area: "intro";
}

/* @media only screen and (min-width: 768px) {
  div.grid {
    grid-template-areas: 
    "intro | acHybl"
  }
}

@media only screen and (max-width: 767px) {
  div.grid {
    grid-template-areas: 
    "acHybl | intro"
  }
} */
</style>