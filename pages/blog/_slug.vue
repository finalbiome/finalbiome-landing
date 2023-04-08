<template>
  <div>
    <MenuSection />
    <article>
      <div>
        <h1 id="blog-article-title">
          {{ article.title }}
        </h1>
        <div class="article-meta">
          <p>{{ formatDate(article.updatedAt) }}</p>
          <p>{{ article.readtime }} min read</p>
        </div>
        <img class="article-hero-image" :src="article.img" :alt="article.alt">
        <div class="article-summary">
          {{ article.description }}
        </div>

        <nuxt-content :document="article" class="article-content" />

        <div class="article-bottom-line" />

        <blog-prev-next :prev="prev" :next="next" />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    let [prev, next] = await $content('blog')
      .only(['title', 'slug', 'img'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    if (!prev) {
      const prevArr = await $content('blog')
        .only(['title', 'slug', 'img'])
        .sortBy('createdAt', 'desc')
        .limit(1)
        .fetch()
      prev = prevArr[0]
    }

    if (!next) {
      const nextArr = await $content('blog')
        .only(['title', 'slug', 'img'])
        .sortBy('createdAt', 'asc')
        .limit(1)
        .fetch()
      next = nextArr[0]
    }

    return {
      article,
      prev,
      next
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/globals.scss';

#menu {
  position: relative;
}

article {
  @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875rem, 15.625rem); // 250 - 30
  @include fluid-type(padding-right, $minScreen, $maxScreen, 1.875rem, 15.625rem); // 250 - 30
  @include fluid-type(font-size, $minScreen, $maxScreen, 1rem, 1.25rem); // 20px - 16px
}

#blog-article-title {
  @extend h2;
}

.article-meta {
  display: flex;
  column-gap: 2.5em;
  font-size: 0.9375rem; // 15 px

  p {
    @include fluid-type(margin-bottom, $minScreen, $maxScreen, 1.875rem, 3.125rem); // 50 - 30
    color: $article-gray;
  }
}

.article-hero-image {
  border-radius: 1.25em 1.25em 0px 0px;
  filter: drop-shadow(0px 0.625em 1.25em rgba(0, 0, 0, 0.1));
  width: 100%;
  display: block;
}

.article-summary {
  background-color: $article-dark;
  padding: 3.125rem;
  border-radius: 0px 0px 1.25em 1.25em;
  filter: drop-shadow(0px 0.625em 1.25em rgba(0, 0, 0, 0.1));
  font-size: 1.25em;
}

::v-deep(.nuxt-content h2) {
  @include fluid-type(font-size, $minScreen, $maxScreen, 1.25rem, 2.5rem); // 20 - 40
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

::v-deep(.nuxt-content h2:first-child) {
  margin-top: 3em;
}

::v-deep(.nuxt-content p) {
  line-height: 2em;
  margin-bottom: 2em;
}

::v-deep(.nuxt-content ol) {
  font-size: 1em;
  line-height: 2em;
  padding-left: 2.5em;
}

.article-bottom-line {
  border: 1px solid $article-bottom-line;
  margin-top: 3em;
  margin-bottom: 1.5em;
}

.icon.icon-link {
  background-image: url('~assets/images/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
