<template>
  <div class="button-wrapper">
    <v-btn
      class="btn-wp"
      large
      rounded
    >
      {{ caption }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: ['caption']
}
</script>

<style lang="scss" scoped>
@import '~/assets/globals.scss';
.btn-wp {
  text-transform: none;
  color: #1D1D1D;
  background: linear-gradient(92.05deg, #2DEA40 3.12%, #BFFF37 81.34%);
  box-shadow: 0px 5px 15px rgba(143, 255, 0, 0.2);

  font-family: 'Museo';
  font-style: normal;
  font-weight: 650;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: normal;
  text-indent: 0;
  padding: 0.865em 2.188em !important;
  height: 4.375rem !important;
  width: 15.625rem !important;
  border-radius: 2em;

  // margin-top: 3em;
  // margin-bottom: 2em;

  // @include fluid-type(font-size, $minScreen, $maxScreen, 1.125rem, 1.5rem); // 17px - 16px

}

</style>
