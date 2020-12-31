<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('pages', params.slug).fetch()

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
  <article class="box content is-size-5 is-family-sans-serif">
    <nuxt-content :document="article" />
  </article>
</template>