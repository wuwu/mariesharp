<template>
    <div class="page page--product container">
        <div class="columns is-mobile">
            <div class="column is-12">
                <figure v-if="hasImage">
                    <img :src="`..${post.body.image}`" :alt="post.title"/>
                </figure>
                <h1 class="title is-2 has-text-marie">{{ post.body.title }}</h1>
                <vue-markdown :source="post.body.body"></vue-markdown>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'laden',
    layout: "shop",
    computed: {
      hasImage() {
        return this.post.body.image.length
      }
    },
    async asyncData ({ app, route }) {
      return {
        post: await app.$content('/pages').get('/laden')
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>