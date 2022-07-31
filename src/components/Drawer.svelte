<script>
  import { navigate, Link } from 'svelte-navigator'
  import { sources, drawerOpen } from '../stores'

  let searchTerm = ''
  let newsSources

  sources.subscribe(value => newsSources = value)

  const onSubmit = event => {
    event.preventDefault()
    const searchTermEncoded = encodeURIComponent(searchTerm)
    navigate(`/haku/${searchTermEncoded}`)
  }

  const hideDrawer = () => {
    drawerOpen.update(() => false)
  }

  let open = false
  drawerOpen.subscribe(value => open = value)
</script>

<div class='drawer' style={`${open ? 'left: 0px' : ''}`}>
  <div class='menu'>
    <ul class='menu-list'>
      <li>
        <form on:submit={onSubmit}>
          <p class='control has-icons-left' style="margin-bottom: 20px">
            <input class='input is-rounded' bind:value={searchTerm}>
            <svg class='icon is-left is-small'><use xlink:href='icons/bds-icons.min.svg#search-g'></use></svg>
          </p>
        </form>
      </li>
    </ul>
    <p class='menu-label'>Lehdet</p>
    <ul class='menu-list'>
      <li><Link on:click={hideDrawer} to='/'>Kaikki Lehdet</Link></li>
      {#each newsSources as source}
        <li><Link on:click={hideDrawer} to={`/lehti/${source.name}`}>{source.name}</Link></li>
      {/each}
    </ul>
  </div>
</div>
<div class='overlay' style={`${open ? 'display: block' : '' }`} on:click={hideDrawer} />

<style>
  .drawer {
    z-index: 9;
    padding: 10px;
    padding-top: 30px;
    width: 250px;
    background-color: #fefefe;
    position: fixed;
    top: 0;
    bottom: 0;
    box-shadow: 0px 0px 6px 5px rgba(0,0,0,0.1);

    left: -260px;
    margin-top: 50px;
    transition-duration: 250ms;

    overflow-y: auto;
  }
  .overlay {
    z-index: 8;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: none;
  }
</style>