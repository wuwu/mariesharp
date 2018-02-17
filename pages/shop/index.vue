<template>
    <section class="page">
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
    name: 'products',
    layout: 'shop',
    async asyncData ({ app }) {
      return {
        products: await app.$content('/products').getAll()
      }
    }
  }
</script>
<style lang="scss" scoped>
    ul {
        display: flex;
        flex-wrap: wrap;
    }
    li {
        flex: 1;
        width: 320px;
    }

</style>