<script>
  import { onMount } from 'svelte'
  import { showError } from '../actions'
  import NewsList from '../components/NewsList.svelte'

  let news = []
  let loading = true

  onMount(async () => {
    fetch('/api/news')
      .then(response => response.json())
      .then(data => {
        news = data.news
        loading = false
      })
      .catch(err => {
        loading = false
        console.log(err)
        showError('Takapäähän ei saatu yhteyttä :(')
      })
  })
</script>

<NewsList {news} />