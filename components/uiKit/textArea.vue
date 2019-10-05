<template>
    <md-textarea class="textareastyle" v-model="textareaValue"></md-textarea>
</template>

<script>
export default {
    data: () => ({
      textareaValue: null
    })
}
</script>

<style lang="scss">
  /* Text area text style */
  textarea {
    resize: $none;
    @include robotoRegular();
    @include textComplexValues(500, 13px, 0.6px);
    color: $dark-white;
    @include inputCompleteBorder(1px, solid, $dark-white);
    @include borderRadius(0);
    @include widthValue(100%);
    outline: $none;
  }
</style>


