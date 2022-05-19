<template>
  <div class="roadmap-wrapper">
    <div>
      <h1>Roadmap</h1>
    </div>
    <div class="roadmap-line-wrapper">
      <div class="rm-phase-first-line" />
      <div id="rm-phase-green" class="rm-phase">
        Phase 1
      </div>
      <div class="rm-phase-first-line" />
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoadmapSection'
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

.roadmap-line-wrapper {
  display: flex;
  align-items: center;
}
.roadmap-line-wrapper::before {
  content: '';
  position: absolute;
  // top: 50%;
  left: 0;
  border-top: 3px solid #fff;
  background: #fff;
  width: 100%;
  // transform: translateY(-50%)
}

.rm-phase {
  font-family: 'Museo';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;

  width: 160px;
  height: 70px;

  box-sizing: border-box;
  border: 3px solid #fff;
  border-radius: 45px;
  background-color: #2c2c2c;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.rm-point {
  font-size: 18px;
  display: flex;
  flex-direction: column;
  margin-right: 0.6em;
  z-index: 1;
}

.rm-point-center {
  width: 20px;
  height: 20px;
  background: #1B1B1B;
  border: 3px solid #FFFFFF;
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
  border: 3px solid #32EB40;
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
  border: 1.5px solid #32EB40;
  width: 4em;
  z-index: 1;
}
</style>
