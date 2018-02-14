<template>
    <div class="wrapper">
        <logo></logo>
    </div>
</template>

<script type="text/babel">
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>

.wrapper {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
