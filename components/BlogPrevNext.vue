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

.blog-navigator-wrapper {
  @include fluid-type(margin-bottom, $minScreen, $maxScreen, 3.75rem, 8.75rem); // 140 - 60
  @include fluid-type(margin-top, $minScreen, $maxScreen, 3.75rem, 4.375rem); // 70 - 60
  font-size: 0.9375rem; // 15px
}

.blog-navigator {
  display: flex;
  justify-content: space-between;
}

.blog-navigator-button {
  background-color: $article-dark;
  box-shadow: 0 0.625em 1.25em rgba(0, 0, 0, 0.1);
  border-radius: 0.625em;
}

.blog-navigator-button-content {
  display: flex;
  align-items: center;
  width: 35.42vw;
  height: 5.73vw;
}

.blog-navigator-image-wrapper {
  width: 26.47%;
  height: 5.73vw;
}

.blog-navigator-image {
  width: 100%;
  height: 5.73vw;
  object-fit: cover;
  display: block;
  border-radius: 0 0.625em 0.625em 0;
}

.blog-navigator-image.next {
  border-radius: 0.625em 0 0 0.625em;
}

.blog-navigator-button-inner {
  text-decoration: none;

}

.blog-navigator-text {
  color: #fff;
  padding-right: 1.875em;
  padding-left: .6em;
  padding-top: .6em;
  padding-bottom: .6em;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
  -webkit-box-orient: vertical;

  width: 27.25rem;
  width: 64.12%;
  max-height: 5.73vw;
}

.blog-navigator-text.next {
  padding-left: 1.875em;
  padding-right: .6em;
}

.blog-navigator-arrow {
  // display: flex;
  // justify-content: center;
  padding-left: 1.64em;
  padding-right: .6em;
  width: 9.41%;

  img {
    width: 1.125rem;
  }

  img.next {
    transform: scaleX(-1);
  }
}
.blog-navigator-arrow.next {
  padding-right: 1.64em;
  padding-left: .6em;
}
</style>
