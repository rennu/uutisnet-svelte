<script>
  export let searchTerm = ''
  import NewsList from '../components/NewsList.svelte'
  import { drawerOpen } from '../stores'
  
  let news = []
  let loading = false

  const doSearch = searchTerm => {
    loading = true
    drawerOpen.update(() => false)
    fetch('/api/search', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ search: searchTerm, offset: 0 })
    })
      .then(response => response.json())
      .then(data => {
        loading = false
        news = data.news || []
      })
      .catch(err => {
        loading = false
        console.log(err)
      })
  }

  $: {
    doSearch(searchTerm)
  }

</script>

<NewsList {news} {loading} />
