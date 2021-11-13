<script>
  export let news = []
  export let loading = false

  import { Link } from 'svelte-navigator'

  import dayjs from 'dayjs'
</script>

{#if loading}
  <div class='box is-large is-relative has-text-centered'>
    <div class='loader is-primary is-inline is-size-3'></div>
    <div class='loader is-success is-inline is-size-3'></div>
    <div class='loader is-secondary is-inline is-size-3'></div>
  </div>
{:else}
  {#if news.length === 0}
    <div class='has-text-centered'>
      Ei voittoa :(
    </div>
  {:else}
    {#each news as item}
      <div class='item'>
        <a class='item' href={item.url}>{item.title}</a>
        <span class='item-info'>
          { dayjs(item.time).format('HH:mm DD.MM.YYYY')} :: <Link style='color: #46285d' to={`/lehti/${encodeURIComponent(item.sourceName)}`}>{item.sourceName}</Link>
        </span>
      </div>
    {/each}
  {/if}
{/if}

<style>
  div.item {
    margin-bottom: 15px;
  }
  a.item {
    display: block;
  }
  .item-info {
    font-size: 0.8em;
  }
</style>