<script>
  import { sources } from '../stores'
  import { showError } from '../lib'
  import NewsList from '../components/NewsList.svelte'

  export let source = ''

  // Local vars
  let news = []
  let loading = false

  let newsSources = []
  sources.subscribe(value => newsSources = value)
  
  const getSource = source => {
    loading = true
    setTimeout(() => {
      const sourceName = decodeURIComponent(source)
      const sourceId = newsSources.filter(newsSource => newsSource.name === sourceName)[0]?.id || 0
      if (sourceId > 0) {
        fetch(`/api/source/${sourceId}`)
          .then(response => response.json())
          .then(data => {
            loading = false
            news = data.news
          })
          .catch(err => {
            loading = false
            showError('Takapäähän ei saatu yhteyttä :(')
            console.log(err)
          })
      }
    }, 250)
  }

  $: {
    getSource(source)
  }
</script>

<NewsList {news} {loading} />
