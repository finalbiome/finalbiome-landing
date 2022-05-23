<template>
  <div class="features-wrapper">
    <FeatureComponent
      :img-idx="1"
      title="Not a Token but an Asset"
      text="All qualitative characteristics of assets are stored on-chain,
      including information about the resources spent on their production"
    />
    <FeatureComponent
      :img-idx="4"
      title="No Costs for Gamers"
      text="FinalBiome is designed as a fee-less blockchain for players,
      which removes the main barrier – payment for each action"
    />
    <FeatureComponent
      :img-idx="2"
      title="No Technological Threshold"
      text="FinalBiome  embodies the possibility of no code implementation of game logic,
      according to the rules of which players will be able to create and interact with their game assets"
    />
    <FeatureComponent
      :img-idx="3"
      title="Financial Model and Monetization"
      text="FinalBiome brings back the classic methods
      to monetize games and evaluate the financial model"
    />
    <FeatureComponent
      :img-idx="5"
      title="No More Gray Market"
      text="Gamer can trade and exchange his/her character and assets officially
      on Finalbiome whole marketplace, that unites markets of all games on the platform"
    />
  </div>
</template>

<script>
import FeatureComponent from './FeatureComponent.vue'

export default {
  name: 'FeaturesSection',
  components: { FeatureComponent }
}
</script>

<style lang="scss" scoped>
@import '~/assets/globals.scss';
.features-wrapper {
  @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875rem, 3.125rem); // 250 - 30
  @include fluid-type(padding-right, $minScreen, $maxScreen, 1.875rem, 3.125rem); // 50 - 30
  display: flex;
  flex-wrap: wrap;
  padding-top: 0vw;
  background-color: #1d1d1d;
  justify-content: center;
  column-gap: 3.75em;
  row-gap: 2.5em;
}
</style>
