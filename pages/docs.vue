<script>
import _docs from '~/static/docs.json'
export default {
    data() {
      return {
        searchQuery: '',
        docs: _docs
      }
    },
    watch: {
      async searchQuery(searchQuery) {
        if (!searchQuery) {
          this.docs = _docs
          return
        }
        this.docs = _docs.filter(doc => doc.name.toLowerCase().match(searchQuery.toLowerCase()))
      }
    },
}
</script>

<template>
    <nav class="panel">
        <p class="panel-heading">
            Документы
        </p>
        <div class="panel-block">
            <p class="control has-icons-left">
            <input class="input" placeholder="Поиск" v-model="searchQuery" type="search" autocomplete="off">
            <span class="icon is-left">
                <font-awesome-icon :icon="['fas', 'search']"  />
            </span>
            </p>
        </div>
        <div class="panel-body">
            <a v-for="doc in docs" :key="doc.id" class="panel-block" :href="doc.url" download>
                <span class="panel-icon">
                    <font-awesome-icon :icon="['fas', 'download']"  />
                </span>
                {{doc.name}}
            </a>
        </div>
    </nav>
</template>

<style>
    .panel-body {
        height: 410px;
        overflow-y: auto;
    }
</style>