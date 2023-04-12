<template>
  <div class="roadmap-wrapper">
    <div>
      <h1 id="roadmap">
        Roadmap
      </h1>
    </div>
    <div class="roadmap-outer-wrapper max-width-limit">
      <div class="roadmap-line-wrapper">
        <div class="roadmap-line-inner-wrapper">
          <picture>
            <source srcset="~/assets/images/roadmap.webp" type="image/webp">
            <source srcset="~/assets/images/roadmap.png" type="image/png">
            <img class="roadmap-image" src="~/assets/images/roadmap.png" alt="roadmap" loading="lazy">
          </picture>
        </div>
      </div>
      <!-- <div class="roadmap-faider-left" /> -->
      <!-- <div class="roadmap-faider-right" /> -->
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

$maxScreenRoadmap: 120rem;
$roadmap-img-width: 157.625rem; //2522px;

.roadmap-wrapper {
  // @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875rem, 3.125rem); // 250 - 30
  // @include fluid-type(padding-right, $minScreen, $maxScreen, 1.875rem, 3.125rem); // 50 - 30
  display: flex;
  // padding-top: 6vw;
  background-color: $backgroung-main;
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

.max-width-limit {
  @media only screen and (max-width: $maxScreenRoadmap) {
    // @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875rem, 15.625rem); // 250 - 30
    // @include fluid-type(padding-right, $minScreen, $maxScreen, 1.875rem, 15.625rem); // 250 - 30
    padding-left: 0;
    padding-right: 0;
  }
  // max-width: $maxScreen;
  padding-left: calc((100vw - #{$maxScreenRoadmap}) / 2);
  padding-right: calc((100vw - #{$maxScreenRoadmap}) / 2);
}

.roadmap-outer-wrapper {
  @media only screen and (max-width: 1790px) {
    overflow: scroll;
  }
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 10em;
}

.roadmap-line-wrapper {
  display: flex;
  align-items: center;
  width: max-content;
}

.roadmap-line-inner-wrapper {
  @media only screen and (max-width: 1790px) {
    @include fluid-type(width, $minScreen, $maxScreen, 82rem, 120rem);
    overflow: hidden;
  }
  display: flex;
  align-items: center;
}

.roadmap-image {
  // @include fluid-type(width, $minScreen, $maxScreenRoadmap, 68%, 120%);
  @include fluid-type(width, $minScreen, $maxScreenRoadmap, 107.185rem, $roadmap-img-width);
  position: relative;
  // left: -218px;
  @include fluid-type(left, $minScreen, $maxScreenRoadmap, -9.125rem, -13.625rem);
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

</style>
