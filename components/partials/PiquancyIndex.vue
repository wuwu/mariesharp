<template>
    <h1>Schärfegrad: {{index}}</h1>
</template>

<script type="text/babel">
  export default {
    name: 'Piquancy',
    props: {
      index: { type: String, required: true },
    },
  }
</script>

<style lang="scss" scoped>
    h1 {
        color: $red;
    }
</style>