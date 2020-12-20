<script>
  export default {
    async asyncData({ $content, params, error }) {
      const postLimit = 5
      const pageNo = parseInt(params.number)
      const articles = await $content('articles')
                            .sortBy('createdAt', 'desc')
                            .limit(postLimit)
                            .skip(postLimit * (pageNo - 1))
                            .fetch()

      if (!articles.length) {
        return error({ statusCode: 404, message: 'Новости не найдены!' })
      }

      const nextPage = articles.length === postLimit
      return { nextPage, articles, pageNo }
    },
    methods: {
        formatDate(date) {
          const options = { year: 'numeric', month: 'long', day: 'numeric' }
          return new Date(date).toLocaleDateString('ru', options)
        }
    },
    computed: {
      prevLink() {
        return this.pageNo === 2 ? '/news' : `/news/page/${this.pageNo - 1}`
      }
    }
  }
</script>

<template>
  <div class="container">
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
                <tt>{{ formatDate(card.createdAt) }}</tt>
              </div>
            </article>
          </div>
        </div>
      </div>
      <section id="prev-next">
        <nuxt-link :to="prevLink" class="pagination-previous">&#8249;&#8249; предыдущее</nuxt-link>
        <nuxt-link v-if="nextPage" class="pagination-next" :to="`/news/page/${pageNo + 1}`">далее &#8250;&#8250;</nuxt-link>
      </section>
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