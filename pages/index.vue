<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles').where({ main: { $eq: 1 } }).sortBy('date', 'desc').limit(5).fetch()
      return { articles }
    },
    methods: {
        formatDate(date, article_date) {
          if (article_date) {
            date = article_date
          }
          const options = { year: 'numeric', month: 'long', day: 'numeric' }
          return new Date(date).toLocaleDateString('ru', options)
        }
    }
  }
</script>

<template>
  <div class="container">
    <Mainbar />
    <div class="section">
      <div id="app" class="row columns is-multiline">
        <div v-for="card in articles" :key="card.id" class="column is-12">
          <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-128x128">
                  <img :src="card.img" :alt="card.alt">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <h4><a :href="`/news/${card.slug}`">{{card.title}}</a></h4>
                  <p>
                    {{card.description}}
                  </p>
                </div>
                <tt>{{ formatDate(card.createdAt, card.date) }}</tt>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<style>
  /* unvisited link */
  a:link {
    color: black;
  }

  /* visited link */
  a:visited {
    color: black;
  }

  /* mouse over link */
  a:hover {
    color: blue;
  }

  /* selected link */
  a:active {
    color: black;
  }
</style>