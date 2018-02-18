<template>
    <ul v-if="showMenu" class="menu">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">Über uns</nuxt-link></li>
        <li><nuxt-link to="/shop">Shop</nuxt-link></li>
        <li><nuxt-link to="/laden">Im Laden kaufen</nuxt-link></li>
        <li><nuxt-link to="/friends">Friends</nuxt-link></li>
        <li><nuxt-link to="/all-natural">all Natural</nuxt-link></li>
    </ul>
</template>
<script type="text/babel">
  import { mapGetters } from 'vuex'
  export default {
    name: 'Menu',
    computed: {
      ...mapGetters([
        'showMenu'
      ]),
    }
  }
</script>
<style lang="scss" scoped>
    .menu {
        padding: 0;
        margin: 0;
        list-style: none;
        li {
            text-align: right;
        }
        a {
            font-size: 2rem;
            color: $black;
            background-color: rgba($white, 1);
            padding: 4px 32px 4px 8px;
            font-style: normal;
            font-weight: $weight-normal;
            text-decoration: none;
            display: inline-block;
            transform: rotate(5deg);
            text-align: right;
            transition: 0.3s ease-in-out;
            line-height: 24px;
            margin-bottom: 16px;
            &:hover {
                 color: $red;
                transform: rotate(-1deg);
                font-size: 2.3rem;

             }
        }
        @include tablet {
            li {
                margin-bottom: 8px;
            }
            a {
                background-color: rgba($white, .35);
            }
        }
    }
</style>
