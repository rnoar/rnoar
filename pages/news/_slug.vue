<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
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
  <article class="box content is-size-5 is-family-sans-serif">
    <div class="is-justify-content-center is-flex">
      <h1 class="title is-3">{{ article.title }}</h1>    
    </div>
    <div class="is-justify-content-center is-flex">
      <img :src="article.img" :alt="article.alt" />
    </div>
    <div>
      <tt>{{ formatDate(article.createdAt, article.date) }}</tt>
    </div>
    <hr/>
    <nuxt-content :document="article" />
  </article>
</template>