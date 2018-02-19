<template>
    <div class="page page--product container">
        <div class="columns is-mobile">
            <div class="column is-one-third product--image">
                <figure>
                    <img :src="`..${product.thumbnail}`" :alt="product.title"/>
                </figure>
            </div>
            <div class="column is-two-thirds product--information">
                <h1>{{ product.title }}</h1>
                <vue-markdown :source="product.body"></vue-markdown>
                <piquancy-index :index="product.piquancy"></piquancy-index>
                <vue-markdown :source="product.ingredients"></vue-markdown>
                <tax-infos></tax-infos>
                <pre v-if="debug ==='true'">{{ product }}</pre>
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
    data: function () {
      return {
        active: false,
        debug: process.env.debug
      }
    },
    async asyncData ({ app, route }) {
      return {
        product: await app.$content('/products').get('shop.'+route.params.slug)
      }
    }
  }
</script>
<style lang="scss" scoped>
    h1 {
        color: $red;
        font-size: 32px;
        text-shadow: 1px 2px 0 $white;
    }
    .column {
        display: flex;
    }
    .product--image {
        justify-content: center;
    }
    .product--information {
        flex-direction: column;
    }
    @include tablet {
        .product--image {
            justify-content: flex-end;
        }
    }
</style>
