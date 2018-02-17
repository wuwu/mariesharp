<template>
    <!-- START NAV -->
    <nav class="marie-navbar">
        <div class="navbar-brand">
            <logo></logo>
        </div>
        <div class="navbar-burger burger" data-target="navMenu"
             @click.prevent="toggleNav">
            <span></span>
            <span></span>
            <span></span>
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

    methods: {
      toggleNav: function () {
        this.active = !this.active
        console.log(this.active)
      }
    },
    computed() {
      if(this.$mq === 'sm') {
        this.active = true
      }
    }
  }
</script>
<style lang="scss" scoped>
    .marie-navbar {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: transparent;
    }
    .is-active {
        display: flex;
    }
    .navbar-brand {
        flex-grow: 2;
        display: flex;
        justify-content: center;
        padding-left: 3.25rem;
        padding-right: 0;

    }
    .navbar-burger {
        flex-basis: 3.25rem;
    }
    @include tablet {
        .marie-navbar {
            padding-top: 30px;
            justify-content: center;
        }
        .navbar-brand {
            padding-right: 3.25rem;

        }
    }
</style>
