<template>
  <div class="join-wrapper">
    <div>
      <h1>Join With As</h1>
    </div>

    <div class="join-buttons-wrap">
      <ButtonComponent caption="Whitepaper" link-url="/FinalBiomeWhitepaper.pdf" />
      <v-btn
        class="btn-wp"
        large
        rounded
        @click.stop="dialog=true"
      >
        Join Now
      </v-btn>
      <WaitListComponent v-model="dialog" />
    </div>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue'
import WaitListComponent from './WaitListComponent.vue'
export default {
  name: 'JoinSection',
  components: { ButtonComponent, WaitListComponent },
  data: () => ({
    dialog: false
  })
}
</script>

<style lang="scss" scoped>
@import '~/assets/globals.scss';
.join-wrapper {
  @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875rem, 3.125rem); // 250 - 30
  @include fluid-type(padding-right, $minScreen, $maxScreen, 1.875rem, 3.125rem); // 50 - 30
  display: flex;
  padding-top: 8em;
  background-color: #1d1d1d;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  row-gap: 1em;
  padding-bottom: 10em;
}
.join-buttons-wrap {
  display: flex;
  flex-wrap: wrap;
  // column-gap: 5em;
  @include fluid-type(column-gap, $minScreen, $maxScreen, 1.875em, 5em); // 2em - 5em
  row-gap: 2em;
  justify-content: center;
}

</style>
