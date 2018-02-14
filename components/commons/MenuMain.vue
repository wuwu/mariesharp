<template>
    <ul class="menu">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about/marie">Über uns</nuxt-link></li>
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
        list-style: none;

        a {
            color: $text;
            font-style: normal;
            font-weight: $weight-normal;
        }
    }
</style>
