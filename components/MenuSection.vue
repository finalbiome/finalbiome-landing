<template>
  <div class="menu-wrapper">
    <div class="m-logo">
      <img src="~/assets/images/finalbiome.svg">
    </div>
    <div class="menu-items">
      <a @click="goto('solution')">Solution</a>
      <a @click="goto('roadmap')">Roadmap</a>
      <a @click="goto('whitepaper')">Whitepaper</a>
    </div>
    <div class="social-links">
      <SocialLinkComponent class="m-link" link-url="https://twitter.com/FinalBiome" network="twitter" />
      <SocialLinkComponent class="m-link" link-url="https://finalbiome.medium.com" network="medium" />
      <SocialLinkComponent class="m-link" link-url="https://www.linkedin.com/company/finalbiome" network="linkedin" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuSection',
  methods: {
    goto (refName) {
      let refs = {}
      // const element = this.$refs[refName]
      this.$parent.$parent.$children.forEach((section) => {
        if (section.$refs) {
          refs = {
            ...refs,
            ...section.$refs
          }
        }
      })
      // const element = this.$parent.$parent.$children[1].$refs[refName]
      const element = refs[refName]
      const top = element.offsetTop

      window.scrollTo(0, top)
      window.history.pushState(refName, refName, '/#')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/globals.scss';
.menu-wrapper {
  display: flex;
  @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875rem, 8.125rem); // 130 - 30
  @include fluid-type(padding-right, $minScreen, $maxScreen, 1.875rem, 8.125rem); // 130 - 30
  padding-top: 2.5em;
  align-items: center;
  @include fluid-type(font-size, $minScreen, $maxScreen, 1rem, 1.125rem); // 16px - 18px
}
.social-links {
  display: flex;
  column-gap: 1.25em;
  margin-left: auto;
  align-items: center;
}
.m-link {
  width: 2em;
  height: 2em;
}
.menu-items {
  margin: 1em;
  margin-left: 2.5em;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
}
.menu-items > a {
  text-decoration: none;
  color: #fff;
  margin: 1em;

}
.menu-items > a:hover {
  color: #3CEC3F;
}

.m-logo {
  width: 3.33em;
  height: 3.33em;
}
.m-logo > img {
  width: 3.33em;
}

</style>
