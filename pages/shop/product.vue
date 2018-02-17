<template>
    <div class="page page--product container">
        <div class="columns">
            <div class="column is-one-third product--image">
                <figure>
                    <img :src="`..${product.thumbnail}`" :alt="product.title"/>
                </figure>
            </div>
            <div class="column is-two-thirds product--information">
                <h1>{{ product.title }}</h1>
                <nuxtent-body :body="product.body" class="description"/>
                <piquancy-index :index="product.piquancy"></piquancy-index>
                <vue-markdown :source="product.ingredients"></vue-markdown>
                <tax-infos></tax-infos>
                <pre>{{ product }}</pre>
            </div>
        </div>
    </div>
</template>

<script>
    import PiquancyIndex from '~/components/partials/PiquancyIndex'
    import TaxInfos from '~/components/partials/TaxInfos'
  export default {
    layout: "shop",
    components: {
      PiquancyIndex,
      TaxInfos
    },
    async asyncData ({ app, route }) {
      return {
        product: await app.$content('/products').get(route.params.slug)
      }
    }
  }
</script>
<style lang="scss" scoped>
    h1 {
        color: $red;
        font-size: 32px;
    }
    .column {
        display: flex;
    }
    .product--image {
        justify-content: flex-end;
    }
    .product--information {
        flex-direction: column;
    }
</style>