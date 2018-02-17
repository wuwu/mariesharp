<template>
    <section id="footer" class="container has-bg">
        <menu-footer></menu-footer>
    </section>
</template>
<script type="text/babel">
  import MenuFooter from '~/components/commons/MenuFooter.vue'

  export default {
    name: 'Footer',
    components: {
      MenuFooter
    },
    props: {},
  }
</script>
<style lang="scss" scoped>
    .container {
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-direction: row;
        margin-bottom: 0;
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: $padding-desktop;
        padding-right: $padding-desktop;
    }
    .navigation {
        grid-area: menu;
        width: 100%;
    }
    .disclaimer {
        grid-area: disclaimer;

        a {
            color: $grey-light;
            font-style: normal;
            font-weight: $weight-normal;
        }
    }

</style>
