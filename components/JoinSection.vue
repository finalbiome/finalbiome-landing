<template>
  <div class="join-wrapper">
    <div>
      <h1>Join With As</h1>
    </div>

    <div class="join-buttons-wrap">
      <ButtonComponent caption="White Paper" />
      <ButtonComponent caption="Get White List" />
    </div>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue'
export default {
  name: 'JoinSection',
  components: { ButtonComponent }
}
</script>

<style lang="scss" scoped>
@import '~/assets/globals.scss';
.join-wrapper {
  @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875rem, 3.125rem); // 250 - 30
  @include fluid-type(padding-right, $minScreen, $maxScreen, 1.875rem, 3.125rem); // 50 - 30
  display: flex;
  padding-top: 6vw;
  background-color: #1d1d1d;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  row-gap: 1em;
  padding-bottom: 6em;
}
.join-buttons-wrap {
  display: flex;
  flex-wrap: wrap;
  column-gap: 5em;
  row-gap: 2em;
  justify-content: center;
}

</style>
