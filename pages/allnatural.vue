<template>
    <div class="page page--product container">
        <div class="columns is-mobile">
            <div class="column is-12">
                <figure>
                    <img :src="`..${post.thumbnail}`" :alt="post.title"/>
                </figure>
                <h1>{{ post.title }}</h1>
                <vue-markdown :source="post.body"></vue-markdown>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    layout: "shop",
    async asyncData ({ app, route }) {
      return {
        post: await app.$content('/pages').get('/allnatural')
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>