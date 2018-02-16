<template>
    <div class="layout layout--shop">
        <top-bar/>
        <div id="navMenu" class="menu" :class="{'is-active': active}">
            <div class="navbar-start">
                <menu-main></menu-main>
            </div>
        </div>
        <div class="columns">
            <div class="column main">
                <nuxt/>
            </div>
        </div>

        <page-footer></page-footer>
        <button-scroll-top></button-scroll-top>
        <debug-info></debug-info>
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
          active: false
        }
      },
    }
</script>
<style lang="scss" scoped>
    .columns {
        max-width: 960px;
        margin: 0 auto;
        border-left: 1px solid black;
        border-right: 1px solid black;
    }
    .layout--shop {
        min-height: 100vh;
        background-image: url('~/assets/images/background-image-2.jpg');
        background-size: cover;
        background-attachment: fixed;
    }
    .main {
        padding-top: 180px;
    }
    .menu {
        display: none;
        width: 360px;
        position: absolute;
        right: 0;
        top: 80px;
        @include tablet {
            display: flex;
            flex-direction: column;
        }
    }
</style>
