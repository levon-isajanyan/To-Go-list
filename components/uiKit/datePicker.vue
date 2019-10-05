<template>
    <md-datepicker class="datepickerstyle" v-model="content"  @input="handleInput" />
</template>

<script>
export default {
    name: 'datepicker',
    data: () => ({
      content: null // Model content 
    }),
    methods: {
    // Method to call input handle to use in component v-model  
    handleInput (e) {
      this.$emit('input', this.content),
      this.content = null
    }
  }
}
</script>

<style lang="scss">
  /* Datepicker text style */
  .datepickerstyle {
    @include robotoRegular();
    @include textComplexValues(500, 13px, 0.6px);
    color: $dark-white;
  }
  /* Form input style */
  .datepickerstyle .md-input {
    @include inputBottomBorder(1px !important, solid !important, $dark-white !important);  
    @include topPosition(0);
  }
  /* Form input svg color */
  .datepickerstyle .md-icon-image svg {
    fill: $dark-white !important;
  }
  /* Datepicker dialog style */
  .md-datepicker-dialog {
    @include robotoRegular();
    @include textComplexValues(500, 13px, 0.6px);
  }
</style>
