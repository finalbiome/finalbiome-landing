<template>
  <div class="features-wrapper">
    <FeatureComponent
      :img-idx="1"
      title="Not a Token but an Asset"
      text="Все качественные характеристики ассета хранятся внутри него,
          включая информацию о затраченных на его производство ресурсах"
    />
    <FeatureComponent
      :img-idx="2"
      title="No technological threshold"
      text="FinalBiome реализует возможности по no code имплементации игровой
      логики, по правилам которой игроки смогут создавать и взаимодействовать
      со своими игровыми ассетами"
    />
    <FeatureComponent
      :img-idx="3"
      title="Financial model and monetization"
      text="FinalBiome возвращает классические способы монетизации игр и оценки финансовой модели"
    />
    <FeatureComponent
      :img-idx="4"
      title="No Costs for Gamers"
      text="FinalBiome проектируется как fee-less блокчейн для игроков, что
      снимает главный барьер – оплата каждого действия"
    />
    <FeatureComponent
      :img-idx="5"
      title="Clean User Experience"
      text="FinalBiome ставит своей задачей обеспечить онбординг в игру не сложнее, чем вход в обычную игру"
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
