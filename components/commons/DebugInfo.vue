<template>
    <div class="admin debug">
        <pre>{{ this.$mq }}</pre>
    </div>
</template>

<script>
    export default {
      name: 'debugInfo',
    }
</script>
<style lang="scss" scoped>

    .debug {
        position: fixed;
        top: 15px;
        left: 15px;

    }

</style>