<script>
  import hello from '../content/pages/basic_info.md'
 
  export default {
    computed: {
      basic_info() {
        return hello
      }
    }
  }
</script>

<template>
    <div class="container box content is-size-5 is-family-sans-serif">
        <div v-html="basic_info" />
        <ul>
            <li><a href="/docs/ustav_RNOAR.pdf" download>Устав общества</a></li>
            <li><a href="/docs/zhurnal_RNOAR.doc" download>Журнал «РНОАР»</a></li>
        </ul>
    </div>
</template>