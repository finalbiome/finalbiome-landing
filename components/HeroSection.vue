<template>
  <div class="hero-wrapper">
    <div class="header-first">
      finalbiome
    </div>
    <div class="header-second">
      First decentralized game deployment platform
    </div>
    <div class="header-third">
      Deploying a game on the blockchain has never been so easy
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
    // font-size: 50px;
    font-size: 4.6vh;
    margin-top: 1.2vh !important;
  }
  font-size: 5.5vw;

  font-family: 'Museo';
  font-style: normal;
  font-weight: 650;
  line-height: 100%;
  /* or 50px */
  margin-top: 3.2vh !important;

  text-align: center;

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
.hero-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: none;
  background-image: url("~assets/images/hero-bg.png");
  background-position: bottom;
  background-size: contain;
  align-items: center;
  justify-content: center;
}
</style>
