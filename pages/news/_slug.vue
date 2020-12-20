<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    },
    methods: {
        formatDate(date) {
          const options = { year: 'numeric', month: 'long', day: 'numeric' }
          return new Date(date).toLocaleDateString('ru', options)
        }
    }
  }
</script>

<template>
  <article class="box content">
    <h1>{{ article.title }}</h1>
    <img :src="article.img" :alt="article.alt" />
    <div>
      <tt>{{ formatDate(article.createdAt) }}</tt>
    </div>
    <hr/>
    <nuxt-content :document="article" />
  </article>
</template>