<script>
  import NewsList from '../components/NewsList.svelte'

  let news = []
  let loading = true

  fetch('/api/news')
    .then(response => response.json())
    .then(data => {
      news = data.news
      loading = false
    })
    .catch(err => {
      loading = false
      console.log(err)
    })
</script>

<NewsList {news} />