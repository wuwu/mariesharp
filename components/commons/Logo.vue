<template>
    <div class="logo">
        <nuxt-link to="/"><img src="~/assets/images/logo.png" width="360px"></nuxt-link>
    </div>
</template>

<style lang="scss" scoped>
    .logo {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: $padding-mobile *2;
        @include tablet {
            margin-bottom: $padding-desktop * 2;
        }
    }
    img {
        max-width: 240px;
        height: auto;

        @include tablet {
            max-width: 300px;
        }
    }
</style>
