<template>
    <section class="page">
        <div class="columns is-multiline is-mobile">
            <div v-for="product in products" class="column is-4-mobile is-3-tablet">
                <nuxt-link :to="product.path">
                    <figure>
                        <img :src="`..${product.thumbnail}`"/>
                    </figure>
                    {{ product.title }}
                </nuxt-link>
            </div>
        </div>
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