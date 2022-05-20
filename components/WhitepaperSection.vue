<template>
  <div class="whitepaper-wrapper">
    <div class="wp-header1">
      <h1>Whitepaper</h1>
    </div>
    <div class="wp-inner-wrapper">
      <div class="wp-about">
        <h2>About the platform</h2>
        <ul>
          <li>Понятные и прозрачные правила генерации ассетов</li>
          <li>Ценность ассета определяется  трудозатратами игрока</li>
          <li>Неизменные правила экономики игры</li>
          <li>Отсутсвием возможности манипулирования ценностью игровых ассетов</li>
          <li>Нет административных полномочий, в том числе у платформы, что исключает возникновение скама</li>
        </ul>
      </div>
      <div class="wp-download-wrapper">
        <div class="wp-dl-rect-wrap">
          <div class="wp-dl-rect">
            <div class="wp-dl-img">
              <img src="~/assets/images/paper.svg">
            </div>
            <div class="wp-dl-header">
              English
            </div>
            <div class="wp-dl-desc">
              View PDF
            </div>
          </div>
        </div>
        <ButtonComponent class="wp-btn" caption="Get White List" />
      </div>
      <div class="break" />
      <div class="wp-social-links">
        <SocialLinkComponent link-url="https://twitter.com/FinalBiome" network="twitter" />
        <SocialLinkComponent link-url="https://finalbiome.medium.com" network="medium" />
        <SocialLinkComponent link-url="https://https://www.linkedin.com/company/finalbiome" network="linkedin" />
      </div>
      <div class="break" />
      <div class="footer">
        Copyright © 2022 FinalBiome. All rights reserved.
      </div>
    </div>
  </div>
</template>

<script>
import SocialLinkComponent from './SocialLinkComponent.vue'
import ButtonComponent from './ButtonComponent.vue'
export default {
  name: 'WhitepaperSection',
  components: { SocialLinkComponent, ButtonComponent }
}
</script>

<style lang="scss" scoped>
@import '~/assets/globals.scss';

$background-color: #0B0B0B;
$breakpoint-to-column: 800px;
.whitepaper-wrapper {
  @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875em, 15.625em); // 250 - 30
  @include fluid-type(padding-right, $minScreen, $maxScreen, 1.875em, 15.625em); // 250 - 30

  // @include fluid-type(font-size, $minScreen, $maxScreen, 1rem, 1.125rem); // 16px - 18px
  background-color: $background-color;
  background-image: url("~/assets/images/footer-rocks.png");
  // background-size: 1000px 300px;
  background-repeat: no-repeat;
  background-position: bottom left;
  // background-position-y: 20%;
}
.wp-header1 {
  @media only screen and (max-width: $breakpoint-to-column) {
    text-align: left;
  }
  text-align: right;
}
.wp-header1 > h1 {
  position: relative;
  top: -1em;
}

.wp-about {
  @media only screen and (max-width: $breakpoint-to-column) {
    flex-basis: 0;
  }
  max-width: 50em;
  @include fluid-type(font-size, $minScreen, $maxScreen, 1rem, 1.125rem); // 16px - 18px
  flex-basis: 20em;
  flex-grow: 2;
  padding-right: 1em;
  padding-bottom: 2em;
}

ul li {
  background: url('~/assets/images/bullet.svg') no-repeat left top;
  // background-position: 0 0em;
  background-size: 1em 1.5625em;
  padding: 0 0 0 1.5625em;
  list-style: none;
  margin: 0;
  vertical-align: middle;
}

.wp-inner-wrapper {
  @media only screen and (max-width: $breakpoint-to-column) {
    flex-direction: column;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

}
.wp-download-wrapper {
  @media only screen and (max-width: $breakpoint-to-column) {
    margin-top: 2em;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  // row-gap: 5em;
}

.wp-dl-rect-wrap {
  background: linear-gradient(92.05deg, #2DEA40 3.12%, #BFFF37 81.34%);
  padding: 0.3125em;
  border-radius: 1.875em;
  // @include fluid-type(font-size, $minScreen, $maxScreen, 0.6rem, 1rem); // 30+30+320 16px - 18px
}
.wp-dl-rect {
  max-width: 20em;
  max-height: 14.75em;
  border-radius: 1.5625em;
  background-color: $background-color;

  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 0.625em;
}

.wp-dl-img {
  @include fluid-type(margin-top, $minScreen, $maxScreen, 1.25rem, 2.5rem);
}
.wp-dl-img > img {
  height: 3.125em;
}

.wp-dl-header {
  font-family: 'Museo';
  font-style: normal;
  font-weight: 650;
  // font-size: 2.5em;
  line-height: 1.2;
  @include fluid-type(font-size, $minScreen, $maxScreen, 1.25rem, 2.5rem); // 20px - 40px
  margin: 0 2.2em;

}

.wp-dl-desc {
  font-family: 'Museo';
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  @include fluid-type(font-size, $minScreen, $maxScreen, 1rem, 1.125rem); // 16px - 18px
  @include fluid-type(margin-bottom, $minScreen, $maxScreen, 1.25rem, 2.5rem);
}

.wp-btn {
  @include fluid-type(margin-top, $minScreen, $maxScreen, 2.5rem, 5rem);
}

.wp-social-links {
  @media only screen and (max-width: $breakpoint-to-column) {
    margin-top: 4em;
  }
  display: flex;
  column-gap: 1.25em;
}

.footer {
  @media only screen and (max-width: $breakpoint-to-column) {
    margin-top: 2em;
  }
  color: #4F4F4F;
  margin-top: 4em;
  margin-bottom: 2.222em;
  @include fluid-type(font-size, $minScreen, $maxScreen, 0.875rem, 1rem); // 14px - 16px
}

.break {
  flex-basis: 100%;
  height: 0;
}

</style>
