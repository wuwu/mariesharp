<template>
    <section class="container">
        <h1>Products</h1>
        <ul>
            <li v-for="product in products">
                <nuxt-link :to="product.path">
                    <figure>
                        <img :src="`..${product.thumbnail}`"/>
                    </figure>
                    {{ product.title }}
                </nuxt-link>
            </li>
        </ul>
    </section>
</template>

<script>
  export default {
    async asyncData ({ app }) {
      return {
        products: await app.$content('/products').getAll()
      }
    }
  }
</script>