<template>
  <div class="wrapper d-flex">
    <div class="d-flex s-container flex-wrap">
      <div class="bf-wrapper-1 d-flex flex-wrap">
        <div class="big-feature bf1">
          <h1>Solution</h1>
          <div class="big-feature-content">
            FinalBiome gives game developers the ability to easily,
            with no specific knowledge and backend build decentralized, web3 games.
            And for gamers the confidence that the rules of the game will not change.
            <span class="f-accent">Never.</span>
          </div>
        </div>
        <div class="bf-image-cont bf2">
          <img class="bf-image" src="~/assets/images/bf1-1.png">
        </div>
      </div>
      <div class="bf-wrapper-2 d-flex flex-wrap">
        <div class="bf-image-cont bf3">
          <!-- <img class="bf-image" src="~/assets/images/bf2.png"> -->
        </div>
        <div class="big-feature bf4">
          <h2>Mass adoption without the mass</h2>
          <div class="big-feature-content">
            FinalBiome делает возможным создавать игры со всеми преимуществами
            блокчейна и без компромиссов. Game metaverses as entertainment.
          </div>
        </div>
      </div>
      <div class="bf-wrapper-3 d-flex flex-wrap">
        <div class="big-feature bf5">
          <h2>Breaking Down Barriers</h2>
          <div class="big-feature-content">
            FinalBiome ставит целью устранить все барьеры, препятствующие
            масштабной экспансии видеоигр на web3 технологии.
          </div>
        </div>
        <div class="bf-image-cont bf6">
          <!-- <img class="bf-image" src="~/assets/images/bf3.png"> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SolutionSection'
}
</script>

<style lang="scss" scoped>
@import '~/assets/globals.scss';
.wrapper {
  @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875rem, 15.625rem); // 250 - 30
  @include fluid-type(padding-right, $minScreen, $maxScreen, 1.875rem, 3.125rem); // 50 - 30
  // padding-left: 12.5vw;
  // padding-right: 3.5vw;
  padding-top: 6vw;
  background-color: #1d1d1d;
  justify-content: center;
}
.s-container {
  @include fluid-type(font-size, $minScreen, $maxScreen, 1rem, 1.0625rem); // 17px - 16px

  row-gap: 20px;
  column-gap: 20px;
  max-width: 100em;
}
.big-feature {
  flex-grow: 2;
  max-width: 37em;
  flex-basis: 25em;
}
.big-feature-content {
  font-weight: 400;
  line-height: 150%;
  margin-top: 1.77em;
  color: #B4B4B4;
  max-width: 35em;

}
.f-accent {
  color: #fff;
}
.bf-image {
  object-fit: contain;
  width: 100%;
}
.bf-image-cont {
  flex-grow: 3;
  flex-basis: 25em;

  max-width: 45em;
  border-style: dashed;
}
.bf1 {
  order: 1;
}
.bf2 {
  order: 2;
}
.bf3 {
  @media only screen and (max-width: 65em) {
    // font-size: 25px;
    order: 4;
  }
  order: 3;
}
.bf4 {
  @media only screen and (max-width: 65em) {
    // font-size: 25px;
    order: 3;
  }
  order: 4;
}
.bf5 {
  order: 5;
}
.bf6 {
  order: 6;
}

</style>
