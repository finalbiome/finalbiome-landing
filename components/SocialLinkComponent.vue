<template>
  <div class="social-link-wrapper">
    <a :href="linkUrl" target="_blank" rel="noopener noreferrer" :title="title">
      <img :src="require(`~/assets/images/logo-${network}.svg`)" :alt="title">
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialLinkComponent',
  // eslint-disable-next-line vue/require-prop-types
  props: ['network', 'linkUrl'],
  data () {
    return {
      title: `Follow us on ${this.network.charAt(0).toUpperCase() + this.network.slice(1)}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/globals.scss';
.social-link-wrapper > a > img {
  width: 100%;
  object-fit: contain;
}
.social-link-wrapper > a {
  display: block;
}

</style>
