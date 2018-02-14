<template>
    <div class="admin debug">
        <div v-if="$breakpoints.isMobile()">Mobile</div>
        <div v-if="$breakpoints.isTablet()">Tablet</div>
        <div v-if="$breakpoints.isSmallDesktop()">Small Desktop</div>
        <div v-if="$breakpoints.isLargeDesktop()">Large Desktop</div>
    </div>
</template>
<style lang="scss" scoped>

    .debug {
        position: fixed;
        top: 15px;
        left: 15px;

    }

</style>