<template>
    <!-- START NAV -->
    <nav class="navbar is-white">
        <div class="navbar-brand">
            <logo></logo>
            <div class="navbar-burger burger" data-target="navMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div id="navMenu" class="navbar-menu">
            <div class="navbar-start">
                <menu-main></menu-main>
            </div>
        </div>
    </nav>
    <!-- END NAV -->
</template>
<script type="text/babel">
  import Logo from '~/components/commons/Logo.vue'
  import MenuMain from '~/components/commons/MenuMain.vue'
  export default {
    name: 'Navigation',
    components: {
      Logo,
      MenuMain
    },
    props: {},
  }
</script>
<style lang="scss" scoped>

</style>
