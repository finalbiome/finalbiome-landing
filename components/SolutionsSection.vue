<template>
  <div class="wrapper d-flex">
    <div class="d-flex s-container flex-wrap">
      <div class="bf-wrapper-1 d-flex flex-wrap">
        <div class="big-feature bf1">
          <h1 id="solution">
            Solution
          </h1>
          <div class="big-feature-content">
            FinalBiome gives game developers the ability to easily,
            with no specific knowledge and backend build decentralized, web3 games.
            And for gamers makes onboarding a game is as easy as logging into a conventional game.
          </div>
          <div>
            <ButtonComponent class="sbtn" caption="Whitepaper" link-url="/FinalBiomeWhitepaper.pdf" />
          </div>
        </div>
        <div class="bf-image-cont bf2">
          <img class="bf-image" src="~/assets/images/bf1-1.png">
        </div>
      </div>
      <div class="bf-wrapper-2 d-flex flex-wrap">
        <div class="bf-image-cont bf3">
          <img class="bf-image" src="~/assets/images/bf2.png">
        </div>
        <div class="big-feature bf4">
          <h2>True Blockchain Paradigm</h2>
          <div class="big-feature-content">
            Game platform with on-chain game logic – It transfers
            the whole game logic into blockchain.
            Blockchain stores not only assets, but the logic of their creation too.
          </div>
        </div>
      </div>
      <div class="bf-wrapper-3 d-flex flex-wrap">
        <div class="big-feature bf5">
          <h2>Rules Never Change</h2>
          <div class="big-feature-content">
            The asset is created by a gamer: by efforts,
            actions and expenses of the gamer.
            Rules for game asset development are transparent
            and invariable and their value does not change over time. <span class="green-gradient-text">Never</span>
          </div>
        </div>
        <div class="bf-image-cont bf6">
          <img class="bf-image" src="~/assets/images/bf3.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue'
export default {
  name: 'SolutionSection',
  components: { ButtonComponent }
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
  z-index: 1;
}
.big-feature-content {
  font-weight: 400;
  line-height: 150%;
  margin-top: 1.77em;
  color: #B4B4B4;
  max-width: 35em;

}

.bf-wrapper-2, .bf-wrapper-3 {
  align-items: center;
}
.bf-image {
  object-fit: contain;
  width: 100%;
}
.bf-image-cont {
  flex-grow: 3;
  flex-basis: 25em;

  max-width: 45em;
  // border-style: dashed;
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
  margin-bottom: 10em;
}
.bf6 {
  order: 6;
}
.bf3 > img {
  margin-top: -4em;
  margin-left: -2em;
}

.bf6 > img {
  margin-top: -4em;
  margin-top: -10em;
}

.sbtn {
  margin-top: 3em;
  margin-bottom: 2em;
}

</style>
