<template>
  <div class="roadmap-wrapper">
    <div>
      <h1 id="roadmap">
        Roadmap
      </h1>
    </div>
    <div class="roadmap-outer-wrapper">
      <div class="trees-wrapper">
        <div class="tree-stub" />
        <img id="tree-1" class="tree-img" src="~/assets/images/tree-1.png" alt="small tree">
        <img id="tree-2" class="tree-img" src="~/assets/images/tree-2.png" alt="middle tree">
        <img id="tree-3" class="tree-img" src="~/assets/images/tree-3.png" alt="big tree">
      </div>
      <div class="roadmap-line-wrapper">
        <div class="rm-phase-first-line" />
        <div id="rm-phase-green" class="rm-phase">
          Phase 1
        </div>
        <div class="rm-phase-second-line" />
        <div class="rm-point">
          <div id="rm-green-point" class="rm-point-top">
            Testnet
          </div>
          <div id="rm-green-point-circle" class="rm-point-center" />
          <div class="rm-point-bottom" />
        </div>
        <div class="rm-point">
          <div class="rm-point-top" />
          <div class="rm-point-center" />
          <div class="rm-point-bottom">
            Wallet
          </div>
        </div>
        <div class="rm-point">
          <div class="rm-point-top">
            BIO Token Launch
          </div>
          <div class="rm-point-center" />
          <div class="rm-point-bottom" />
        </div>
        <div class="rm-point">
          <div class="rm-point-top" />

          <div class="rm-point-center" />
          <div class="rm-point-bottom">
            Private sale
          </div>
        </div>
        <div class="rm-phase">
          Phase 2
        </div>
        <div class="rm-point">
          <div class="rm-point-top">
            Marketplase
          </div>

          <div class="rm-point-center" />
          <div class="rm-point-bottom" />
        </div>
        <div class="rm-point">
          <div class="rm-point-top" />

          <div class="rm-point-center" />
          <div class="rm-point-bottom">
            Westend testnet
          </div>
        </div>
        <div class="rm-point">
          <div class="rm-point-top">
            Staking
          </div>

          <div class="rm-point-center" />
          <div class="rm-point-bottom" />
        </div>
        <div class="rm-point">
          <div class="rm-point-top" />

          <div class="rm-point-center" />
          <div class="rm-point-bottom">
            Security audit
          </div>
        </div>
        <div class="rm-point">
          <div class="rm-point-top">
            First game release
          </div>

          <div class="rm-point-center" />
          <div class="rm-point-bottom" />
        </div>
        <div class="rm-phase">
          Phase 3
        </div>
        <div class="rm-phase-last-line" />
      </div>
      <div class="roadmap-faider-left" />
      <div class="roadmap-faider-right" />
    </div>
    <div class="bottom-faider" />
  </div>
</template>

<script>
export default {
  name: 'RoadmapSection'
}
</script>

<style lang="scss" scoped>
@import '~/assets/globals.scss';
.roadmap-wrapper {
  // @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875rem, 3.125rem); // 250 - 30
  // @include fluid-type(padding-right, $minScreen, $maxScreen, 1.875rem, 3.125rem); // 50 - 30
  display: flex;
  // padding-top: 6vw;
  background-color: #2c2c2c;
  justify-content: center;
  flex-direction: column;
  // align-items: center;
  row-gap: 1em;
  @include fluid-type(font-size, $minScreen, $maxScreen, 0.6rem, 1rem);
  background-image: url('~/assets/images/grass.jpg');
  background-repeat: repeat-x;
  background-clip: border-box;
  background-size: 1920px 332px;//3840px 664px;
  background-position: bottom;
}

.roadmap-outer-wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 10em;
  margin-top: -15em;
}

.roadmap-line-wrapper {
  display: flex;
  align-items: center;
  width: max-content;
}
.roadmap-line-wrapper::before {
  content: '';
  position: absolute;
  // top: 50%;
  left: 0;
  border-top: 0.1875em solid #fff;
  background: #fff;
  width: 100%;
  // transform: translateY(-50%)
}

.trees-wrapper {
  width: max-content;
  @include fluid-type(margin-top, $minScreen, $maxScreen, -10em, 0em);;
  z-index: 1;
}

.rm-phase {
  font-family: 'Museo';
  font-style: normal;
  font-weight: 400;
  font-size: 1.875em;
  line-height: 2.5em;

  width: 5.33333em;
  height: 2.333333333em;

  box-sizing: border-box;
  border: 0.1em solid #fff;
  border-radius: 2.8125em;
  background-color: #2c2c2c;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.rm-point {
  font-size: 1.125em;
  display: flex;
  flex-direction: column;
  margin-right: 0.6em;
  z-index: 1;
}

.rm-point-center {
  width: 1.25em;
  height: 1.25em;
  background: #1B1B1B;
  border: 0.1875em solid #FFFFFF;
  border-radius: 50%;
}

.rm-point-top, .rm-point-bottom {
  height: 1.7em;
  margin-left: 0.5em;
}

.rm-phase + .rm-point {
  margin-left: 3em;
}

#rm-phase-green {
  // margin-left: 4em;
  border: 0.1em solid #32EB40;
}

#rm-green-point {
  background: linear-gradient(92.05deg, #2DEA40 3.12%, #BFFF37 81.34%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
#rm-green-point-circle {
  background: linear-gradient(92.05deg, #2DEA40 3.12%, #BFFF37 81.34%);
  border: none;
}

.rm-phase-first-line {
  border: 0.09375em solid #32EB40;
  // width: 14em;
  @include fluid-type(width, $minScreen, $maxScreen, 0.75em, 14em);;
  z-index: 1;
}
.rm-phase-second-line {
  border: 0.09375em solid #32EB40;
  width: 4em;
  z-index: 1;
}
.rm-phase-first-last {
  border: 0.09375em solid #fff;
  width: 14em;
  z-index: 1;
}
.roadmap-faider-left {
  // border-style: dotted;
  position: absolute;
  width: 40vw;
  height: 5em;
  bottom: 0;
  right: 0;
  background: linear-gradient(270deg, #2C2C2C 5.73%, rgba(44, 44, 44, 0) 100%);
  z-index: 1;
}
.roadmap-faider-right {
  // border-style: dotted;
  position: absolute;
  width: 10vw;
  height: 5em;
  bottom: 0;
  left: 0;
  background: linear-gradient(90deg, #2C2C2C 5.73%, rgba(44, 44, 44, 0) 100%);
  z-index: 1;
}

h1 {
  @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875rem, 15.625rem);
  // position: relative;
  // top: -0.5em;
  padding-top: 1em;
}

.bottom-faider {
  // border-style: dashed;
  width: 100%;
  height: 6.25em;

  background: linear-gradient(180deg, #0B0B0B 0%, rgba(11, 11, 11, 0) 100%);
  transform: matrix(1, 0, 0, -1, 0, 0);
}

.tree-img {
  opacity: .5;
}
#tree-1 {
  margin-left: -1.2em;
  width: 8.75em;
}
#tree-2 {
  margin-left: 30.5em;
  width: 17.5em;
}
#tree-3 {
  margin-left: 33em;
  width: 20.625em;
}
.tree-stub {
  display: inline-block;
  @include fluid-type(width, $minScreen, $maxScreen, 0.75em, 14em);;
}

</style>
