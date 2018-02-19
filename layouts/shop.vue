<template>
    <div class="layout layout--shop">
        <top-bar/>
        <div id="navMenu" class="menu" :class="{'is-active': active}">
            <div class="navbar-start">
                <menu-main></menu-main>
            </div>
        </div>
        <nuxt/>
        <page-footer></page-footer>
        <button-scroll-top></button-scroll-top>
        <debug-info v-if="debug === 'true'" class="debug"></debug-info>
    </div>
</template>

<script type="text/babel">
    import TopBar from '~/components/commons/TopBar.vue'
    import DebugInfo from '~/components/commons/DebugInfo.vue'
    import MenuMain from '~/components/commons/MenuMain.vue'
    import ButtonScrollTop from '~/components/ButtonScrollTop.vue'
    import PageFooter from '~/components/Footer.vue'

    export default {
      name: 'layout-shop',
      components: {
        TopBar,
        MenuMain,
        DebugInfo,
        ButtonScrollTop,
        PageFooter
      },
      data: function () {
        return {
          active: false,
          debug: process.env.debug
        }
      },
    }
</script>
<style lang="scss" scoped>

    .layout--shop {
        background-image: url('~/assets/images/background-image-2.jpg');
    }

    .menu {
        position: absolute;
        right: 0;
        top: 80px;
        z-index: 500;
        width: 240px;
        @include tablet {
            position: fixed;
            top: 180px;
            display: flex;
            flex-direction: column;
            width: 240px;
        }

        @include desktop {
            width: 360px;
        }
    }
    .debug {
        background-color: rgba($white, 0.5);
        padding: 4px;
    }
</style>
