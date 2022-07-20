<template>
  <div class="product-wrapper">
    <div class="pr-backend-wrapper">
      <div class="pr-image-wrapper-outer">
        <div class="pr-image-wrapper-be">
          <div class="pr-image">
            <img class="pr-pl-image" src="~/assets/images/finalbiome-app-admin.png" alt="FinalBiome Plugin">
          </div>
        </div>
      </div>
      <div class="pr-content">
        <h2>No-Code Solution</h2>
        <p class="pr-description">
          Provides an easy and user-friendly input for game developers. Eliminates the need to hire employees with
          blockchain competencies and makes user flow simple.
        </p>
        <ol class="pr-bullets">
          <li class="pr-b01">
            New game registration
          </li>
          <li class="pr-b02">
            Config in-game assets, rules for their creation
          </li>
          <li class="pr-b03">
            Linking assets via SDK for rendering them in the game engine
          </li>
          <li class="pr-b04">
            Publish the game
          </li>
        </ol>
      </div>
    </div>
    <div class="pr-frontend-wrapper">
      <div class="pr-content">
        <h2>Gamer Onboarding</h2>
        <p class="pr-description">
          Players no longer need to understand the complex flow of blockchain games. There is a FinalBiome superapp for
          them that they just need to download.
        </p>
        <ol class="pr-bullets">
          <li class="pr-b01">
            Install FinalBiome app
          </li>
          <li class="pr-b02">
            Registration (only time)
          </li>
          <li class="pr-b03">
            Select game and play
          </li>
          <li class="pr-b04">
            Buy/sell game assets in the marketplace <span>(optional)</span>
          </li>
        </ol>
      </div>
      <div class="pr-image-wrapper-outer">
        <div class="pr-image-wrapper">
          <div class="pr-image">
            <img class="pr-app-image" src="~/assets/images/finalbiome-app-s1.png" alt="FinalBiome App Screen 1">
          </div>
          <div class="pr-image">
            <img class="pr-app-image" src="~/assets/images/finalbiome-app-s2.png" alt="FinalBiome App Screen 2">
          </div>
          <div class="pr-image">
            <img class="pr-app-image" src="~/assets/images/finalbiome-app-s3.png" alt="FinalBiome App Screen 3">
          </div>
          <div class="pr-image">
            <img class="pr-app-image" src="~/assets/images/finalbiome-app-s4.png" alt="FinalBiome App Screen 4">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/globals.scss';
$breakpoint-to-column: 50rem; //800px

.product-wrapper {
  background-color: #1d1d1d;
  @include fluid-type(font-size, $minScreen, $maxScreen, 1rem, 1.25rem); // 16px - 20px
  // @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875rem, 15.625rem); // 250 - 30
  padding-top: 8em;
  @media only screen and (max-width: $breakpoint-to-column) {
      padding-bottom: 2em;
  }
}

.pr-description {
  color: #B4B4B4;
  line-height: 1.5;
  margin-top: .3em;
  margin-bottom: 3.25em;
  max-width: 29.75em;
}

.pr-backend-wrapper {
  @media only screen and (max-width: $breakpoint-to-column) {
    flex-wrap: wrap;
  }

  display: flex;
  gap: 0em;
  align-items: center;

  .pr-content {
    @media only screen and (max-width: $breakpoint-to-column) {
      @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875rem, 15.625rem); // 250 - 30
      margin-bottom: 2em;
    }

    flex-shrink: 2;
    @include fluid-type(padding-right, $minScreen, $maxScreen, 1.875em, 8.125em); // 130 - 30
    margin-bottom: 8em;
  }
}

.pr-frontend-wrapper {
  @media only screen and (max-width: $breakpoint-to-column) {
    flex-wrap: wrap-reverse;
  }

  display: flex;
  gap: 2em;
  align-items: center;

  .pr-content {
    @media only screen and (max-width: $breakpoint-to-column) {
      @include fluid-type(padding-right, $minScreen, $maxScreen, 1.875em, 8.125em); // 130 - 30
    }

    flex-shrink: 2;
    @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875rem, 15.625rem); // 250 - 30
  }
}

.pr-image-wrapper-be {
  display: flex;
  justify-content: flex-end;

  .pr-image {
    object-fit: contain;
    margin-bottom: 0em;

  }
}

.pr-pl-image {
  @media only screen and (max-width: $breakpoint-to-column) {
    width: 100vw;
    height: auto;
  }

  height: 58ch;
}

.pr-image-wrapper-outer {
  @media only screen and (max-width: $breakpoint-to-column) {
    overflow: scroll;
  }

  overflow: hidden;
  flex-grow: 1;
  flex-shrink: 6;
}

.pr-image-wrapper {
  display: flex;
  // justify-content: flex-end;
  position: relative;
  margin-right: -8.5vw;
}

.pr-image {
  margin-left: -6ch;
}

.pr-image:first-child {
  margin-left: 0;
}

.pr-app-image {
  object-fit: contain;
  height: 52ch;
}

ol {
  line-height: 2.2em;
  font-size: 1.1em;
  padding: 0;

  li {
    // background-position: 0 -.16em;
    // background-size: 1.2em 1.8em;
    padding: 0 0 0 2.2em;
    list-style: none;
    margin: 0;
    vertical-align: middle;
  }
}

.pr-b01 {
  background: url('~/assets/images/bullet01.svg') no-repeat left top;
  background-size: 1.3em 2.2em;
}

.pr-b02 {
  background: url('~/assets/images/bullet02.svg') no-repeat left top;
  background-size: 1.3em 2.2em;
}

.pr-b03 {
  background: url('~/assets/images/bullet03.svg') no-repeat left top;
  background-size: 1.3em 2.2em;
}

.pr-b04 {
  background: url('~/assets/images/bullet04.svg') no-repeat left top;
  background-size: 1.3em 2.2em;
}
</style>
