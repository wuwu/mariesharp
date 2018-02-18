<template>
    <div class="piquancy">
        <h2 class="title is-4 has-text-marie">Schärfegrad</h2>
        <div class="piquancy-bg">
            <h3 :style="`margin-left:${level}`">{{index}}</h3>
        </div>
    </div>
</template>


<script type="text/babel">
  export default {
    name: 'Piquancy',
    props: {
      index: { type: String, required: true },
    },
    computed: {
      level () {
        const margin = 30
        const multiplier = this.index -1
        return multiplier * margin +'px'
      },
    }
  }
</script>

<style lang="scss" scoped>
    .piquancy {
        margin: 16px 0;
    }
    .piquancy-bg {
        background: url('~/assets/images/piquancy-index-background.png');
        background-repeat: no-repeat;
        width: 303px;
        height: 98px;
    }
    .title{
        margin-bottom: 0;
    }

    h3 {
        background: url('~/assets/images/piquancy-index-indicator.png');
        background-position: 0 8px;
        color: $red;
        background-repeat: no-repeat;
        height: 98px;
        width: 30px;
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        text-shadow: 1px 1px 0 $white;
        font-family: 'Helvetica Neue', Arial, sans-serif;
        padding-top: 65px;
        & .level-2 {
            margin-left: 60px;
          }
    }
</style>