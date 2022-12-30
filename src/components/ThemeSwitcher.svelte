<script lang="ts">
  import type { SiteTheme } from "../ts/types";
  import { theme } from "../ts/stores";
  
  let selectedTheme: SiteTheme;
  theme.subscribe(val => selectedTheme = val)

  $: changeTheme = () => {
    if (selectedTheme === "system") {
      $theme = "light";
    } else if (selectedTheme === "light") {
      $theme = "dark";
    } else {
      $theme = "system";
    }
  };
</script>

<div class="theme-switcher-wrapper">
  <button
    data-testid="theme-switcher"
    title="Next theme"
    class="do-transition"
    on:click={changeTheme}
  >
    <span aria-hidden="true" class="icon">
      {#if selectedTheme === "light"}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
      </svg>
      
      {:else if selectedTheme === "dark"}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clip-rule="evenodd" />
      </svg>
      
      {:else}
        X
      {/if}
    </span>
    <span class="description">{selectedTheme} theme</span>
  </button>
</div>

<style lang="scss">
  div.theme-switcher-wrapper {
    padding: 1.5rem 5%;
    position: absolute;
    right: 0;
    z-index: 100;

    button {
      height: 1.8rem;
      width: 8.75rem;
      border-radius: 0.9rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--foreground);
      background-color: var(--panel-background);
      font-size: 0.9rem;
      border: 1px solid var(--border);

      .icon {
        display: inline-flex;
        align-items: center;
        font-size: 0.75rem;
        margin-right: 0.3rem;
      }

      .description {
        text-transform: capitalize;
      }
    }
  }

  @media (max-width: 699px) {
    div.theme-switcher-wrapper {
      padding: 1rem;

      button {
        transform: scale(0.8);
        transform-origin: top right;
      }
    }
  }

  @media (min-width: 700px) {
    .theme-switcher-wrapper {
      padding: 1.5rem 7%;
    }
  }
</style>
