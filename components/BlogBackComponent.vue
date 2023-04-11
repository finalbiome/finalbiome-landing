<template>
  <div class="blog-back-wrapper">
    <a :href="linkUrl">
      <div class="blog-back">
        <!-- <img class="blog-back-arrow" src="~/assets/images/arrow.svg" alt="Back"> -->
        <svg width="11.63" height="8.33" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="arrow" d="M6.5 13.1748V8.1748H17.65L17.6875 5.6623H6.5V0.674805L0.25 6.9248L6.5 13.1748Z" />
        </svg>
        Back
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'BlogBackComponent',
  // eslint-disable-next-line vue/require-prop-types
  props: ['linkUrl']
}
</script>

<style lang="scss" scoped>
@import '~/assets/globals.scss';

.blog-back {
  display: flex;
  align-items: center;
  column-gap: .8em;
  font-size: 0.9375em;
  color: #fff;
  transition: color .3s ease-in-out;
}
.blog-back:hover {
  color: #3CEC3F;
}

a {
  color: #fff;
  text-decoration: none;
  font-size: 1.125em;
  transition: color .3s ease-in-out;

  svg>path {
    fill: #fff;
    transition: fill .3s ease-in-out;
  }
}

a:hover {
  color: #3CEC3F;
  fill: #3CEC3F;

  svg>path {
    fill: #3CEC3F;
  }
}
</style>
