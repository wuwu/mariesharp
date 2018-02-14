<template>
    <div class="container layout layout--shop">
        <navigation/>
        <nuxt/>
    </div>
</template>

<script type="text/babel">
    import Navigation from '~/components/commons/Navigation.vue'

    export default {
      name: 'layout-shop',
      components: {
        Navigation
      }
    }
</script>
<style lang="scss" scoped>
    .layout--shop {
        min-height: 100vh;
        background-image: url('~/assets/images/background-image-2.jpg');
        background-size: cover;
        background-attachment: fixed;
    }
</style>
