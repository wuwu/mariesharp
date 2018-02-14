<template>
    <ul class="menu">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">Über uns</nuxt-link></li>
        <li><nuxt-link to="/shop">Shop</nuxt-link></li>
        <li><nuxt-link to="/laden">Im Laden kaufen</nuxt-link></li>
        <li><nuxt-link to="/friends">Friends</nuxt-link></li>
        <li><nuxt-link to="/all-natural">all Natural</nuxt-link></li>
    </ul>
</template>
<script type="text/babel">
  export default {
    name: 'Menu',
  }
</script>
<style lang="scss" scoped>
    .menu {
        padding: 0;
        margin: 0;
        list-style: none;

        a {
            font-size: 2rem;
            color: $black;
            background-color: rgba($white, .35);
            padding: 4px 8px;
            font-style: normal;
            font-weight: $weight-normal;
            text-decoration: none;
            display: inline-block;
            transform: rotate(-5deg);
            transition: 0.3s ease-in-out;
            &:hover {
                 color: $red;
                transform: rotate(1deg);
                font-size: 2.3rem;

             }
        }
    }
    @include desktop {
        li {
            margin-bottom: 8px;
        }
    }
</style>
