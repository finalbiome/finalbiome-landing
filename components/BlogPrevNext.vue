<template>
  <div class="blog-navigator-wrapper">
    <div class="blog-navigator">
      <div class="blog-navigator-button">
        <NuxtLink v-if="prev" class="blog-navigator-button-inner"
          :to="{ name: 'blog-slug', params: { slug: prev.slug } }">
          <div class="blog-navigator-arrow">
            <img :src="require(`~/assets/images/arrow.svg`)" alt="Go to next article">
          </div>
          <div class="blog-navigator-text">
            {{ prev.title }}
          </div>
          <img class="blog-navigator-image" :src="prev.img" :alt="prev.alt">
        </NuxtLink>
        <span v-else>&nbsp;</span>
      </div>
      <div class="blog-navigator-button">
        <NuxtLink v-if="next" class="blog-navigator-button-inner"
          :to="{ name: 'blog-slug', params: { slug: next.slug } }">
          <img class="blog-navigator-image next" :src="next.img" :alt="next.alt">
          <div class="blog-navigator-text next">
            {{ next.title }}
          </div>
          <div class="blog-navigator-arrow next">
            <img class="next" :src="require(`~/assets/images/arrow.svg`)" alt="Go to next article">
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

.blog-navigator {
  display: flex;
  justify-content: space-between;
}

.blog-navigator-button {
  width: 680px;
  background-color: $article-dark;
  box-shadow: 0px 0.625em 1.25em rgba(0, 0, 0, 0.1);
  border-radius: 0.625em;
}

.blog-navigator-button-inner {
  display: flex;
  align-items: center;
}

.blog-navigator-image {
  width: 180px;
  border-radius: 0 0.625em 0.625em 0;
}

.blog-navigator-image.next {
  border-radius: 0.625em 0 0 0.625em;
}

.blog-navigator-button-inner {
  text-decoration: none;

}

.blog-navigator-text {
  // display: inline;
  font-size: 0.9375em;
  color: #fff;
  padding-right: 1.875em;
  padding-left: .6em;
}

.blog-navigator-text.next {
  padding-left: 1.875em;
  padding-right: 0;
}

.blog-navigator-arrow {
  // display: flex;
  // justify-content: center;
  // width: 68px;
  margin-left: 1.64em;
  margin-right: .6em;

  img {
    width: 18px;
  }

  img.next {
    transform: scaleX(-1);
  }
}
.blog-navigator-arrow.next {
  margin-right: 1.64em;
  margin-left: .6em;
}
</style>
