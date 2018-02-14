<template>
    <div class="container layout layout--shop">
        <top-bar/>
        <div class="columns">
            <div class="column sidebar">
                <menu-main></menu-main>
            </div>
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
      }
    }
</script>
<style lang="scss" scoped>
    .columns {
        max-width: 1200px;
        margin: 0 auto;
    }
    .layout--shop {
        min-height: 100vh;
        background-image: url('~/assets/images/background-image-2.jpg');
        background-size: cover;
        background-attachment: fixed;
    }
    .columns {
        display: flex;
    }
    .column {
    }
    .sidebar {
        flex: 0 0 320px;
    }
</style>
