<template>
    <nuxt-link :to="back" class="button primary">{{label}}</nuxt-link>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: "BackButton",
    props: [
      'label'
    ],
    computed: {
      ...mapGetters({
        back: 'browserHistory'
      })
    }
  }
</script>
<style lang="scss" scoped>
    .button {
        font-size: 24px;
        margin-bottom: 16px;
        margin-top: 16px;
    }
</style>
