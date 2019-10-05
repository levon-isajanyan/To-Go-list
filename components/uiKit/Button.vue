<template>
  <md-button class="md-raised md-accent regbuttonstyle" :md-ripple="false">
    {{ RegularButton }}
  </md-button>
</template>

<script>
export default {
  props: {
    RegularButton: String
  }
}
</script>

<style lang="scss">
  /* Button text style & button shape */
  .regbuttonstyle {
    @include robotoRegular();
    @include textComplexValues(500, 13px, 0.6px);
    @include buttonShapes(0, 0.2em, 0.2em, 0.5em, 0.5em);
    background: $transparent !important;
    color: $dark-white !important;
  }
</style>
