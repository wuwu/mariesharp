<template>
    <section id="skin" class="container">
        <div class="mood mood--image">
            <figure>
                <img :src="getCorrectImagePath(post.image)" alt="SIMONE HOFER - WELLNESSMASSAGEN">
                <figcaption>{{post.title}}</figcaption>
            </figure>
        </div>
        <div class="section-content">
            <div class="entry-content">
                <vue-markdown :source="post.intro"></vue-markdown>
                <nuxt-link to="/hautanalyse" class="button is-primary">weitere Informationen</nuxt-link>
            </div>
        </div>
    </section>
</template>
<script type="text/babel">
  export default {
    name: 'Skin',
    props: ['post']
  }
</script>
<style lang="scss" scoped>

    .section-content {
        padding: 0 $padding-mobile 0 $padding-desktop;
        margin-bottom: $padding-desktop * 2;

        p {
            padding: 8px 0 8px 0;
        }
    }

    @include tablet {
        .section-content {
            font-size: 32px;
            padding: 0 $padding-desktop;
            padding-left: $padding-desktop * 3;
            padding-right: $padding-desktop * 2;
        }
    }
    strong {
        color: $primary;
    }

</style>
