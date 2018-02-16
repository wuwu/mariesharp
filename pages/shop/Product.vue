<template>
    <section class="container">
        <h1>product: {{ product.title }}</h1>
        <nuxtent-body :body="product.body" />
    </section>
</template>

<script>
  export default {
    async asyncData ({ app, route }) {
      return {
        product: await app.$content('/products').get(route.params.slug)
      }
    }
  }
</script>