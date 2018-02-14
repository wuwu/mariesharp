<template>
    <!-- START NAV -->
    <nav class="navbar is-white">
        <div class="navbar-brand">
            <logo></logo>
            <div class="navbar-burger burger" data-target="navMenu"
                 @click.prevent="toggleNav">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div id="navMenu" class="navbar-menu" :class="{'is-active': active}">
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
    data: function () {
      return {
        active: false
      }
    },
    methods: {
      toggleNav: function () {
        this.active = !this.active
        console.log(this.active)
      }
    },
    mounted() {
      if(this.$breakpoints.isMobile()) {
        this.active = true
      }
    }
  }
</script>
<style lang="scss" scoped>

    .is-active {
        display: none;
    }
    @include tablet {
        .navbar {
            padding-top: 30px;
        }
        .navbar-menu {
            display: none;
        }
    }
</style>
