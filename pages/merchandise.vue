<template>
    <div class="page page--product container">
        <figure v-if="hasImage(post.body.image)">
            <img :src="`..${post.body.image}`" :alt="post.title"/>
        </figure>
        <h1 class="title is-2 has-text-marie">{{ post.body.title }}</h1>
        <vue-markdown :source="post.body.body"></vue-markdown>
        <div class="columns is-tablet merchandise">
            <div class="column is-3">
                <div v-for="(article, index) in post.body.mercharticle" :key="index" class="article">
                    <figure>
                        <img :src="`..${article.image}`" :alt="post.body.title"/>
                    </figure>
                    <h3 class="title is-6">{{ article.title }}</h3>
                    <p>{{ article.body }}</p>
                </div>
            </div>
            <div class="column is-9">
                <h2 class="title is-4">Restaurant/Händler</h2>
                <form class=" form form--merchandise">
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-danger" type="email" placeholder="Email input" value="hello@funky-resto.com">
                            <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
                            <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
                        </div>
                        <p class="help is-danger">This email is invalid</p>
                    </div>

                    <div class="field">
                        <label class="label">Message</label>
                        <div class="control">
                            <textarea class="textarea" placeholder="Textarea"></textarea>
                        </div>
                    </div>



                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-link">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
  import { hasImage } from '~/mixins/mariesharp'

  export default {
    layout: "shop",
    mixins: [hasImage],

    async asyncData ({ app, route }) {
      return {
        post: await app.$content('/pages').get('/merchandise')
      }
    }
  }
</script>
<style lang="scss" scoped>
    .merchandise {
        margin-top: 30px;
    }
    h3.title {
        margin-bottom: 0;
    }
    .article {
        margin-bottom: 30px;
    }
    .form--merchandise {
        background: rgba($white, 0.65);
        padding: 8px;
    }
</style>
