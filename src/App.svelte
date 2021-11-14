<script>
  import { Router, Route } from 'svelte-navigator'

  import { sources } from './stores'

  import NewsView from './views/News.svelte'
  import SearchView from './views/Search.svelte'
  import SourceView from './views/Source.svelte'

  import Drawer from './components/Drawer.svelte'
  import Navbar from './components/Navbar.svelte'
  import Error from './components/Error.svelte'

  // Load sources
  fetch('/api/sources')
    .then(response => response.json())
    .then(data => {
      sources.update(() => data.sources)
    })
    .catch(err => {
      console.log(err)
    })
</script>

<main class='container is-max-desktop'>
  <Router>
    <Drawer />
    <Navbar />
    <Route path='/' component={NewsView} />
    <Route path='/haku/:searchTerm' component={SearchView} />
    <Route path='/lehti/:source' component={SourceView} />
  </Router>
  <Error />
</main>

<style>
  main {
    margin-top: 70px;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
