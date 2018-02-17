<template>
  <div class="layout layout--contact">
      <top-bar/>
      <div class="container page">
            <h3 class="title is-centered is-warning is-3" v-html="post.body.subtitle"></h3>
            <vue-markdown :source="post.body.text"></vue-markdown>
        </div>
  </div>
</template>

<script>
  import TopBar from '~/components/commons/TopBar.vue'

  export default {
    layout: 'default',
    components: {
      TopBar,
    },
    asyncData: async ({ app }) => ({
        post: await app.$content('/pages').get('/contact'),
      }),
    };
</script>
<style lang="scss" scoped>

    .layout--contact {
        background-image: url('~/assets/images/background-image-9.jpg');
    }



</style>