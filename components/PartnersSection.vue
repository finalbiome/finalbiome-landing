<template>
  <div class="partners-wrapper">
    <div class="p-header">
      <h1>Partners</h1>
    </div>
    <div class="p-parnters">
      <div class="p-partner-logo">
        <div>
          <a href="https://www.gamedevdao.com/" target="_blank" rel="noopener noreferrer" title="GameDev DAO">
            <img class="p-gamedevdao-logo" src="~/assets/images/gamedevdao.png" alt="GameDev DAO logo">
          </a>
        </div>
      </div>
      <div class="p-partner-logo">
        <a href="https://justforward.co/" target="_blank" rel="noopener noreferrer" title="Just Forward">
          <img class="p-justforward-logo" src="~/assets/images/justforward.png" alt="Just Forward logo">
        </a>
      </div>
      <div class="p-partner-logo">
        <a href="https://armadillo.fun/" target="_blank" rel="noopener noreferrer" title="Armadillo Games">
          <img class="p-armadillo-logo" src="~/assets/images/armadillo-games.svg" alt="Armadillo Games logo">
        </a>
      </div>
      <div class="p-partner-logo">
        <a href="https://www.gdtalents.com/" target="_blank" rel="noopener noreferrer" title="GD-Tallents">
          <img class="p-gd-talents-logo" src="~/assets/images/gd-talents.svg" alt="GD-Tallents logo">
        </a>
      </div>
      <div class="p-partner-logo">
        <a href="https://empera.network/" target="_blank" rel="noopener noreferrer" title="Empera">
          <img class="p-empera-logo" src="~/assets/images/empera.svg" alt="Empera logo">
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/globals.scss';

$breakpoint-to-column: 50em; //800px

.partners-wrapper {
  @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875em, 15.625em); // 250 - 30
  @include fluid-type(padding-right, $minScreen, $maxScreen, 1.875em, 8.125em); // 130 - 30
  padding-top: 0vw;
  background-color: #1d1d1d;
  justify-content: center;
  padding-top: 8em;
  background-image: url("~assets/images/bg-partners.jpg");
  background-position: bottom;
  background-size: contain;
  // background-size: 100vw;
  @include fluid-type(background-size, $minScreen, $maxScreen, 200vw, 100vw); // 130 - 30

    padding-top: 22em;
    // margin-top: -5em;
    // @include fluid-type(padding-top, $minScreen, $maxScreen, 22em, 22em); // 130 - 30
    @include fluid-type(margin-top, $minScreen, $maxScreen, -20em, -5em); // 130 - 30
}

.p-parnters {
  @media only screen and (max-width: $breakpoint-to-column) {
    justify-content: center;
  }

  @include fluid-type(font-size, $minScreen, $maxScreen, 1.875rem, $h1);

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex: auto;
  column-gap: 1.6em;
  row-gap: 1em;
    padding-bottom: 2em;

    }

    .p-partner-logo {
      max-width: 20vw;
      display: flex;

      img {
        max-width: 100%;
      }
    }

    h1 {
      // @media only screen and (max-width: $breakpoint-to-column) {
      //   text-align: center;
      // }

  padding-bottom: .6em;
}

.p-gamedevdao-logo {
  height: 1.2em;
}
.p-empera-logo {
  height: 0.6em;
}

a {
  display: flex;
}
</style>>
