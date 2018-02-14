<template>
    <div class="menu--footer">
    <ul class="menu menu--footer-main">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/merch">Restaurant/Händler</nuxt-link></li>
        <li><nuxt-link to="/download">Download</nuxt-link></li>
        <li><nuxt-link to="/impressum">Impressum</nuxt-link></li>
        <li><nuxt-link to="/agb">AGB</nuxt-link></li>
        <li><nuxt-link to="/kontakt">Kontakt</nuxt-link></li>
    </ul>
    <ul class="menu menu--footer-secondary">
        <li><nuxt-link to="/widerrufsbelehrung">Widerrufsbelehrung</nuxt-link></li>
        <li><nuxt-link to="/download/widerrufsbelehrung">Muster-Widerrufsbelehrung</nuxt-link></li>
        <li><nuxt-link to="/lieferbedingungen">Lieferbedingungen</nuxt-link></li>
        <li><nuxt-link to="/datenschutz">Datenschutz</nuxt-link></li>
        <li><nuxt-link to="/online-streitschlichter">Online-Streitschlichtungsplattform</nuxt-link></li>
    </ul>
    </div>
</template>
<script type="text/babel">
  export default {
    name: 'MenuFooter',
  }
</script>
<style lang="scss" scoped>
    .menu--footer {
        background: url('~/assets/images/background-footer.png');
        background-repeat: no-repeat;

    }
    .menu {
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        a {
            color: $grey;
            background-color: transparent;
            padding: 4px 8px;
            font-style: normal;
            font-weight: $weight-normal;
            text-decoration: none;
            display: inline-block;
            &:hover {
                 color: $red;
             }
        }
    }
    .menu--footer-main a {
        padding-top: 12px;
        font-size: 16px;
        color: $white-ter;
        &:hover {
        color: $red;
         }
    }
    .menu--footer-secondary a {
        font-size: 13px;
        color: $grey-light;
    }
    @include desktop {
        li {
            margin-bottom: 8px;
        }
    }
</style>
