<p class="py-1 tracking-wide leading-relaxed {$$props.class}">
  <slot/>
</p>

<style>
  .conversation{
    white-space: pre-wrap;
  }

@media only screen and (min-width: 768px) {
  .conversation{
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }
}

@media only screen and (max-width: 767px) {
  .conversation{
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem 0;
    border-top: 1px var(--primary-shade) solid;
    border-bottom: 1px var(--primary-shade) solid;
  }
}
</style>