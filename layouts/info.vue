<template>
    <div class="wrapper">
        <logo class="logo"/>
        <button-back label="zurück"></button-back>
        <nuxt/>
        <button-back label="zurück..."></button-back>
        <button-scroll-top></button-scroll-top>
        <page-footer></page-footer>
    </div>
</template>
<script>
  import Logo from '~/components/commons/Logo.vue'
  import PageFooter from '~/components/Footer.vue'
  import ButtonScrollTop from '~/components/ButtonScrollTop.vue'
  import ButtonBack from '~/components/commons/ButtonBack.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: "infoPage",
    components: {
      Logo,
      ButtonScrollTop,
      ButtonBack,
      PageFooter
    },
    computed: {
      ...mapGetters({
        posts: 'getPosts',
        back: 'browserHistory'
      })
    }
  }
</script>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .logo {
        padding-top: 15px;
    }

</style>
