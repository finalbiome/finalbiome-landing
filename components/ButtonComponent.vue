<template>
  <div class="button-wrapper">
    <v-btn
      class="btn-wp"
      large
      rounded
      :href="linkUrl"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ caption }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: ['caption', 'linkUrl']
}
</script>

<style lang="scss" scoped>
@import '~/assets/globals.scss';
.btn-wp {
  text-transform: none !important;
  color: #1D1D1D !important;
  background: linear-gradient(92.05deg, #2DEA40 3.12%, #BFFF37 81.34%);
  box-shadow: 0px 0.208333em 0.625em rgba(143, 255, 0, 0.2);

  font-family: 'Museo';
  font-style: normal;
  font-weight: 650;
  font-size: 1.5em; //24px;
  line-height: 2.5em; //40px;
  letter-spacing: normal;
  text-indent: 0;
  // padding: 0.865em 2.188em !important;
  height: 2.916667em !important;
  width: 10.416667em !important; // 250px
  border-radius: 2.916667em;

  // margin-top: 3em;
  // margin-bottom: 2em;

  @include fluid-type(font-size, $minScreen, $maxScreen, 1.125em, 1.5em); // 18px - 24px

}

</style>
