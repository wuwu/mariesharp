<template>
    <div class="wrapper">
        <logo class="logo"/>
        <nuxt-link to="/" class="button primary">zur Startseite</nuxt-link>
        <nuxt/>
        <nuxt-link to="/" class="button primary">zur Startseite</nuxt-link>
    </div>
</template>
<script>
  import Logo from '~/components/commons/Logo.vue'

  export default {
    name: "infoPage",
    components: {
      Logo
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

    .button {
        font-size: 24px;
        margin-bottom: 16px;
        margin-top: 16px;
    }

</style>
