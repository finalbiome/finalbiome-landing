<template>
  <div class="hero-outer-wrapper">
    <MenuSection />
    <div class="hero-wrapper">
      <div class="header-first">
        finalbiome
      </div>
      <div class="header-second">
        Decentralized game deployment platform
      </div>
      <div class="header-third">
        Deploying a game on the blockchain has never been so easy
      </div>
      <div class="backgroung-text">
        <svg viewBox="0 0 85 40">
          <text x="0" y="40">finalbiome</text>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style lang="scss" scoped>
.header-first {
  @media only screen and (orientation: landscape) {
    // font-size: 70px;
  font-size: 6.5vh;
  }
  font-size: 9vw;

  font-family: 'Museo';
  font-style: normal;
  font-weight: 650;

  line-height: 100%;
  /* identical to box height, or 70px */

  text-align: center;

  /* Linear */

  background: linear-gradient(92.05deg, #2DEA40 3.12%, #BFFF37 81.34%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.header-second {
  @media only screen and (orientation: landscape) {
    font-size: 4.6vh;
    margin-top: 1.2vh !important;
  }
  font-size: 5.5vw;

  font-family: 'Museo';
  font-style: normal;
  font-weight: 650;
  line-height: 100%;
  margin-top: 3.2vh !important;

  text-align: center;
  padding: 0 1.2em;

}
.header-third {
  @media only screen and (orientation: landscape) {
    // font-size: 25px;
    font-size: 2.32vh;
  }
  font-size: 3.9vw;

  font-style: normal;
  font-weight: 300;
  line-height: 1.4em;
  text-align: center;

  margin-top: 4.6vh !important;
  margin-left: auto;
  margin-right: auto;

  width: 18em;
}
.hero-outer-wrapper {
  background-image: url("~assets/images/hero-bg.jpg");
  background-position: bottom;
  background-size: contain;
  background-size: 1500px;
  height: 100vh;
  max-width: none;
}
.hero-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: none;
  width: 100vw;
  height: 100vh;
  // background-image: url("~assets/images/hero-bg.png");
  // background-position: bottom;
  // background-size: contain;
  // background-size: 1500px;
  align-items: center;
  justify-content: center;
}

.backgroung-text {
  position: absolute;
  width: 100vw;
  bottom: 0;

  font-family: 'Museo';
  font-weight: 900;
  margin-bottom: -8px;
}
svg {
  width: 100%;
  fill: #1d1d1d;
}
</style>
