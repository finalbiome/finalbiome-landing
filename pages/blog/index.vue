<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="blog-articles-wrapper">
    <h1 class="blog-articles-header">
      Blog
    </h1>
    <NuxtLink class="blog-articles-link" :to="{ name: 'blog-slug', params: { slug: featured.slug } }">
      <div class="blog-articles-list-featured">
        <div class="blog-articles-list-featured-text-wrapper">
          <h2 class="blog-articles-list-featured-title">
            {{ featured.title }}
          </h2>
        </div>
        <div class="blog-articles-list-featured-image-wrapper">
          <div class="blog-articles-list-featured-image-wrapper-inner">
            <img class="blog-articles-list-featured-image" :src="featured.img" :alt="featured.alt">
          </div>
        </div>
        <div class="blog-articles-list-featured-text-wrapper">
          <div class="blog-articles-list-featured-summary">
            {{ featured.description }}
          </div>
          <div class="blog-articles-list-featured-meta">
            <p>{{ formatDate(featured.updatedAt) }}</p>
            <p>{{ featured.readtime }} min read</p>
          </div>
        </div>
      </div>
    </NuxtLink>
    <div class="blog-articles-list-all">
      <ul>
        <li v-for="article of articlesLoaded" :key="article.slug">
          <NuxtLink class="blog-articles-link" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <div class="blog-articles-list-article">
              <div class="blog-articles-list-article-text-wrapper">
                <h3 class="blog-articles-list-article-title">
                  {{ article.title }}
                </h3>
                <div class="blog-articles-list-featured-summary">
                  {{ article.description }}
                </div>
                <div class="blog-articles-list-featured-meta blog-articles-list-article-meta">
                  <p>{{ formatDate(article.createdAt) }}</p>
                  <p>{{ article.readtime }} min read</p>
                </div>
              </div>
              <div class="blog-articles-list-article-image-wrapper">
                <div class="blog-articles-list-article-image-wrapper-inner">
                  <img class="blog-articles-list-article-image" :src="article.img" :alt="article.alt">
                </div>
              </div>
            </div>
            <div class="article-bottom-line" />
          </NuxtLink>
        </li>
      </ul>
      <div class="blog-articles-list-button-more">
        <v-btn v-if="!hideButton" class="btn-wp" large rounded @click.stop="loadMoreArticles()">
          Load more
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ $content, params }) {
    const featured = await $content('blog')
      // .only(['title', 'slug', 'img'])
      .where({ highlighted: 1 })
      .without('body')
      .fetch()

    let articles = await $content('blog')
      .where({ highlighted: { $ne: 1 } })
      .without('body')
      .sortBy('createdAt', 'asc')
      .fetch()

    articles = [].concat(...Array(6).fill(articles))

    return {
      featured: featured[0],
      articles
    }
  },
  data: () => ({
    articlesLoaded: [],
    hideButton: false
  }),
  created () {
    this.loadMoreArticles()
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    loadMoreArticles () {
      this.articlesLoaded = this.articles.slice(0, this.articlesLoaded.length + 5)

      // if all articles are loaded, hide the button
      this.hideButton = this.articlesLoaded.length === this.articles.length
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/globals.scss';

$breakpoint-to-column: 50rem; //800px
$breakpoint-to-tablet: 75rem; //1200px

ul {
  list-style-type: none;
  padding: unset;
  margin: unset;
}

h3 {
  @include fluid-type(font-size, $minScreen, $maxScreen, 1.125rem, 1.5625rem); // 18 - 25
  margin-bottom: 0.4em;
  line-height: 1.3;
}

.blog-articles-link {
  text-decoration: none;
}

.blog-articles-wrapper {
  max-width: $maxScreen;
  margin-left: auto;
  margin-right: auto;

}

.blog-articles-header {
  @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875rem, 15.625rem); // 250 - 30
  @include fluid-type(padding-right, $minScreen, $maxScreen, 1.875rem, 15.625rem); // 250 - 30

  padding-top: 8rem;
  margin-bottom: 0;
}
.blog-articles-list-featured {
  @media only screen and (max-width: $breakpoint-to-column) {
    padding-top: 1.25em
  }

  @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875rem, 15.625rem); // 250 - 30
  @include fluid-type(padding-right, $minScreen, $maxScreen, 1.875rem, 15.625rem); // 250 - 30

  display: flex;
  flex-wrap: wrap;
  padding-top: 4.6875rem;

  background-image: url('~/assets/images/blog-list-bg.jpg');
  // background-repeat: repeat-x;
  background-clip: border-box;
  background-size: 1920px 790px;
  background-position: bottom;
  background-size: cover;
  background-position: 0% 83%
}
.blog-articles-list-featured-text-wrapper {
  @media only screen and (max-width: $breakpoint-to-tablet) {
    width: 100%;
  }
  width: 50%;
  padding-right: 4.375em;
  // flex-shrink: 3;
}
.blog-articles-list-featured-title {
  @include fluid-type(font-size, $minScreen, $maxScreen, 1.25rem, 2.5rem); // 20 - 40
  margin-top: 0.5em;
  margin-bottom: 0.4em;
  line-height: 125%;
}
.blog-articles-list-featured-summary {
  color: $font-grey;
  line-height: 1.361875;
}
.blog-articles-list-featured-meta {
  display: flex;
  column-gap: 2.5em;
  font-size: 0.9375em; // 15 px
  padding-top: 0.625em;
  @include fluid-type(padding-bottom, $minScreen, $maxScreen, 1.25em, 4.687em); // 20 -75
  p {
    color: $article-gray;
    margin: unset;
  }
}
.blog-articles-list-featured-image-wrapper {
  @media only screen and (max-width: $breakpoint-to-tablet) {
    width: 100%;
    height: unset;
  }
  width: 50%;
  height: 0;
  // flex-shrink: 2;
}

.blog-articles-list-featured-image-wrapper-inner {
  @media only screen and (max-width: $breakpoint-to-tablet) {
    height: unset;
  }
  position: relative;
  height: 460px;
  // width: 100%;
  // aspect-ratio: 700 / 490;

}
.blog-articles-list-featured-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  // width: 700px;
  // height: 490px;

  filter: drop-shadow(0px 0.625em 1.25em rgba(0, 0, 0, 0.1));
  border-radius: 1.25em;

  // height: 120%;
  object-fit: cover;
}
.blog-articles-list-all {
  @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875rem, 15.625rem); // 250 - 30
  @include fluid-type(padding-right, $minScreen, $maxScreen, 1.875rem, 15.625rem); // 250 - 30

  background-color: $article-dark;
}

.blog-articles-list-article {
  @media only screen and (max-width: $breakpoint-to-tablet) {
    flex-direction: column-reverse;
  }
  display: flex;
  column-gap: 3.125em;
}

li:first-child {
  @media only screen and (max-width: $breakpoint-to-tablet) {
    padding-top: 3.125em;
  }
  @media only screen and (max-width: $breakpoint-to-column) {
    padding-top: 0em;
  }
  padding-top: 8.8125em;
}

.blog-articles-list-article-image-wrapper {
  @media only screen and (max-width: $breakpoint-to-column) {
    width: 100%;
    padding-top: 2.5em;
  }
  width: 21.25rem;
}

.blog-articles-list-article-image {
  width: 100%;
  border-radius: 1.25em;
}
.article-bottom-line {
  @media only screen and (max-width: $breakpoint-to-column) {
    display: none;
  }
  border: 1px solid $article-bottom-line;
  margin-top: calc(3.125em - 1px);
  margin-bottom: calc(3.125em - 1px);
}
li:last-child > a > .article-bottom-line {
  @media only screen and (max-width: $breakpoint-to-column) {
    display: block;
    margin-top: calc(2.5em - 1px);
    margin-bottom: calc(2.5em - 1px);
  }
}

.blog-articles-list-article-meta {
  padding-bottom: unset;
}
.blog-articles-list-article-text-wrapper {
  @media only screen and (max-width: $breakpoint-to-column) {
    width: 100%;
    padding-top: 1.25em
  }
  width: 76%;
  padding-top: 2.5em
}
.blog-articles-list-button-more {
  text-align: center;
}
</style>
