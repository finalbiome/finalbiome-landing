<template>
  <div class="blog-navigator-wrapper">
    <div class="blog-navigator">
      <div class="blog-navigator-button">
        <NuxtLink
          v-if="prev"
          class="blog-navigator-button-inner"
          :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        >
          <div class="blog-navigator-button-content">
            <div class="blog-navigator-arrow">
              <img :src="require(`~/assets/images/arrow.svg`)" alt="Go to prev article">
            </div>
            <div class="blog-navigator-text">
              {{ prev.title }}
            </div>
            <div class="blog-navigator-image-wrapper">
              <img class="blog-navigator-image" :src="prev.img" :alt="prev.alt">
            </div>
          </div>
        </NuxtLink>
        <span v-else>&nbsp;</span>
      </div>
      <div class="blog-navigator-button">
        <NuxtLink
          v-if="next"
          class="blog-navigator-button-inner"
          :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        >
          <div class="blog-navigator-button-content">
            <div class="blog-navigator-image-wrapper">
              <img class="blog-navigator-image next" :src="next.img" :alt="next.alt">
            </div>
            <div class="blog-navigator-text next">
              {{ next.title }}
            </div>
            <div class="blog-navigator-arrow next">
              <img class="next" :src="require(`~/assets/images/arrow.svg`)" alt="Go to next article">
            </div>
          </div>
        </NuxtLink>
        <span v-else>&nbsp;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/globals.scss';

$breakpoint-to-column: 50rem; //800px
$breakpoint-to-shrink-lines: 87.5rem; //1400px

.blog-navigator-wrapper {
  @include fluid-type(margin-bottom, $minScreen, $maxScreen, 3.75rem, 8.75rem); // 140 - 60
  @include fluid-type(margin-top, $minScreen, $maxScreen, 3.75rem, 4.375rem); // 70 - 60
  font-size: 0.9375rem; // 15px
}

.blog-navigator {
  @media only screen and (max-width: $breakpoint-to-column) {
    flex-direction: column;
    @include fluid-type(row-gap, $minScreen, $maxScreen, 1.875rem, 8.75rem); // 60 - 30
  }
  display: flex;
  justify-content: space-between;
}

.blog-navigator-button {
  background-color: $article-dark;
  box-shadow: 0 0.625em 1.25em rgba(0, 0, 0, 0.1);
  border-radius: 0.625em;
}

.blog-navigator-button-content {
  @media only screen and (max-width: $breakpoint-to-column) {
    flex-wrap: wrap;
    height:auto;
    width: unset;
  }
  display: flex;
  align-items: center;
  width: 35.42vw;
  height: 5.73vw;
}

.blog-navigator-image-wrapper {
  @media only screen and (max-width: $breakpoint-to-column) {
    order: -1;
    width: 100%;
    height: unset;
  }
  width: 26.47%;
  height: 5.73vw;
}

.blog-navigator-image {
  @media only screen and (max-width: $breakpoint-to-column) {
    width: 100%;
    height: unset;
    border-radius: 0.625em 0.625em 0 0;
  }
  width: 100%;
  height: 5.73vw;
  object-fit: cover;
  display: block;
  border-radius: 0 0.625em 0.625em 0;
}

.blog-navigator-image.next {
  @media only screen and (max-width: $breakpoint-to-column) {
    border-radius: 0.625em 0.625em 0 0;
  }
  border-radius: 0.625em 0 0 0.625em;
}

.blog-navigator-button-inner {
  text-decoration: none;

}

.blog-navigator-text {
  @media only screen and (max-width: $breakpoint-to-shrink-lines) {
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }

  @media only screen and (max-width: $breakpoint-to-column) {
    width: 85%;
    max-height: unset;
    padding-top: 1.2em;
    padding-bottom: 1.2em;
    -webkit-line-clamp: unset;
    line-clamp: unset;
  }

  color: #fff;
  padding-right: 1.875em;
  // padding-left: .6em;
  margin-top: .6em;
  margin-bottom: .6em;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
  -webkit-box-orient: vertical;

  width: 64.12%;
  max-height: 5.73vw;
}

.blog-navigator-text.next {
  padding-left: 1.875em;
  // padding-right: .6em;
}

.blog-navigator-arrow {
  @media only screen and (max-width: $breakpoint-to-column) {
    width: 15%;
    display: flex;
    justify-content: center;
    padding: unset;
  }
  display: flex;
    justify-content: center;

  // padding-left: 1.64em;
  // padding-right: .6em;
  width: 9.41%;

  img {
    width: 1.125rem;
  }

  img.next {
    transform: scaleX(-1);
  }
}
.blog-navigator-arrow.next {
  @media only screen and (max-width: $breakpoint-to-column) {
    padding: unset;
  }
  padding-right: 1.64em;
  padding-left: .6em;
}
</style>
