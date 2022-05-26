<template>
  <div class="whitepaper-wrapper">
    <div class="wp-header1">
      <h1 id="whitepaper">
        Whitepaper
      </h1>
    </div>
    <div class="wp-inner-wrapper">
      <div class="wp-about">
        <h2>About the Platform</h2>
        <ul>
          <li>Clear and transparent rules for generating assets</li>
          <li>The value of an asset is determined by the labor costs of the player</li>
          <li>The unchanging rules of the economy of the game</li>
          <li>Absence of the ability to manipulate the value of game assets</li>
          <li>There are no administrative authority, including the platform, which eliminates the occurrence of scam</li>
        </ul>
      </div>
      <div class="wp-download-wrapper">
        <div class="downloads-btn-wrapper">
          <a href="/FinalBiomeLightpaper.pdf" target="_blank" rel="noopener noreferrer" title="Get FinalBiome Lightpaper">
            <div class="wp-dl-rect-wrap">
              <div class="wp-dl-rect">
                <div class="wp-dl-img">
                  <img src="~/assets/images/paper.svg">
                </div>
                <div class="wp-dl-header wp-dl-header1">
                  Lightpaper
                </div>
                <div class="wp-dl-desc">
                  View PDF
                </div>
              </div>
            </div>
          </a>
          <a href="/FinalBiomeWhitepaper.pdf" target="_blank" rel="noopener noreferrer" title="Get FinalBiome Whitepaper">
            <div class="wp-dl-rect-wrap">
              <div class="wp-dl-rect">
                <div class="wp-dl-img">
                  <img src="~/assets/images/papers.svg">
                </div>
                <div class="wp-dl-header wp-dl-header2">
                  Whitepaper
                </div>
                <div class="wp-dl-desc">
                  View PDF
                </div>
              </div>
            </div>
          </a>
        </div>
        <v-btn
          class="btn-wp wp-btn"
          large
          rounded
          @click.stop="dialog=true"
        >
          Join Now
        </v-btn>
        <WaitListComponent v-model="dialog" />
      </div>
    </div>
    <div class="break" />
    <div class="wp-social-links">
      <SocialLinkComponent link-url="https://twitter.com/FinalBiome" network="twitter" />
      <SocialLinkComponent link-url="https://finalbiome.medium.com" network="medium" />
      <SocialLinkComponent link-url="https://www.linkedin.com/company/finalbiome" network="linkedin" />
    </div>
    <div class="break" />
    <div class="footer">
      Copyright © 2022 FinalBiome. All rights reserved.
    </div>
  </div>
</template>

<script>
import SocialLinkComponent from './SocialLinkComponent.vue'
import WaitListComponent from './WaitListComponent.vue'
export default {
  name: 'WhitepaperSection',
  components: { SocialLinkComponent, WaitListComponent },
  data: () => ({
    dialog: false
  })
}
</script>

<style lang="scss" scoped>
@import '~/assets/globals.scss';

$background-color: #0B0B0B;
$breakpoint-to-column: 73.125em; //1170px
.whitepaper-wrapper {
  @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875em, 15.625em); // 250 - 30
  @include fluid-type(padding-right, $minScreen, $maxScreen, 1.875em, 8.125em); // 130 - 30

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
  padding-right: 7.5em;
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
  // padding-right: 1em;
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
  @include fluid-type(column-gap, $minScreen, $maxScreen, 2em, 4em);

}
.wp-download-wrapper {
  @media only screen and (max-width: $breakpoint-to-column) {
    margin-top: 2em;
    width: 100%;
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
  height: 4.375em;
}

.wp-dl-header {
  @media only screen and (max-width: $breakpoint-to-column) {
    margin: 0 2em;
  }
  font-family: 'Museo';
  font-style: normal;
  font-weight: 650;
  line-height: 1.2;
  @include fluid-type(font-size, $minScreen, $maxScreen, 1.25rem, 2.5rem); // 20px - 40px
  margin: 0 1em;
}
.wp-dl-header1 {
  @media only screen and (max-width: $breakpoint-to-column) {
    margin: 0 2.2em;
  }
  margin: 0 1.2em;
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
  padding-bottom: 2.222em;
  @include fluid-type(font-size, $minScreen, $maxScreen, 0.875rem, 1rem); // 14px - 16px
}

.break {
  flex-basis: 100%;
  height: 0;
}
.downloads-btn-wrapper > a {
  color: #fff !important;
  text-decoration: none !important;
}
.downloads-btn-wrapper {
  @media only screen and (max-width: $breakpoint-to-column) {
    justify-content: center;
  }
  display: flex;
  flex-wrap: wrap;
  @include fluid-type(column-gap, $minScreen, $maxScreen, 2em, 4em);
  row-gap: 2em;
}

</style>
