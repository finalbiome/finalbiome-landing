<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="blog-articles-wrapper">
    <MenuSection />
    <BlogBackComponent class="max-width-limit blog-back" link-url="/" />
    <h1 class="blog-articles-header max-width-limit">
      Blog
    </h1>
    <div class="blog-articles-list-featured max-width-limit">
      <div class="blog-articles-list-featured-text-wrapper">
        <NuxtLink class="blog-articles-link" :to="{ name: 'blog-slug', params: { slug: featured.slug } }">
          <h2 class="blog-articles-list-featured-title">
            {{ featured.title }}
          </h2>
        </NuxtLink>
      </div>
      <div class="blog-articles-list-featured-image-wrapper">
        <NuxtLink class="blog-articles-link" :to="{ name: 'blog-slug', params: { slug: featured.slug } }">
          <div class="blog-articles-list-featured-image-wrapper-inner">
            <img class="blog-articles-list-featured-image" :src="featured.img" :alt="featured.alt">
          </div>
        </NuxtLink>
      </div>
      <div class="blog-articles-list-featured-text-wrapper">
        <NuxtLink class="blog-articles-link" :to="{ name: 'blog-slug', params: { slug: featured.slug } }">
          <div class="blog-articles-list-featured-summary">
            {{ featured.description }}
          </div>
        </NuxtLink>
        <div class="blog-articles-list-featured-meta">
          <p>{{ formatDate(featured.date) }}</p>
          <p>{{ featured.readtime }} min read</p>
        </div>
      </div>
    </div>
    <div class="blog-articles-list-all max-width-limit">
      <ul>
        <li v-for="article of articlesLoaded" :key="article.slug">
          <div class="blog-articles-list-article">
            <div class="blog-articles-list-article-text-wrapper">
              <NuxtLink class="blog-articles-link" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                <h3 class="blog-articles-list-article-title">
                  {{ article.title }}
                </h3>
              </Nuxtlink>
              <div class="blog-articles-list-featured-summary">
                <NuxtLink class="blog-articles-link" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                  {{ article.description }}
                </Nuxtlink>
              </div>
              <div class="blog-articles-list-featured-meta blog-articles-list-article-meta">
                <p>{{ formatDate(article.date) }}</p>
                <p>{{ article.readtime }} min read</p>
              </div>
            </div>
            <div class="blog-articles-list-article-image-wrapper">
              <NuxtLink class="blog-articles-link" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                <div class="blog-articles-list-article-image-wrapper-inner">
                  <img class="blog-articles-list-article-image" :src="article.img" :alt="article.alt">
                </div>
              </NuxtLink>
            </div>
          </div>
          <div class="article-bottom-line" />
        </li>
      </ul>
      <div class="blog-articles-list-button-more">
        <v-btn v-if="!hideButton" class="btn-wp" large rounded @click.stop="loadMoreArticles()">
          <img class="plus" :src="require(`~/assets/images/rounded-plus.svg`)" alt="Load more">
          Load more
        </v-btn>
      </div>
    </div>
    <WhitepaperSection />
  </div>
</template>

<script>
import getSiteMeta from '@/utils/getSiteMeta'
export default {
  async asyncData ({ $content }) {
    const featured = await $content('blog')
      // .only(['title', 'slug', 'img'])
      .where({ highlighted: 1 })
      .without('body')
      .fetch()

    let articles = await $content('blog')
      .where({ highlighted: { $ne: 1 } })
      .without('body')
      .sortBy('date', 'asc')
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
  head () {
    return {
      meta: [
        ...this.meta
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://finalbiome.net/blog/'
        }
      ]
    }
  },
  computed: {
    meta () {
      const metaData = {
        title: 'FinalBiome Blog',
        url: 'https://finalbiome.net/blog/',
        mainImage: `https://finalbiome.net/blog/${this.featured.img}`
      }
      return getSiteMeta(metaData)
    }
  },
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

      if (this.hideButton) {
        // const el = document.querySelector('li:last-child > a > .article-bottom-line')
        // el.style.display = 'none'
        document.querySelector('#whitepaper-section').style['margin-top'] = 'calc(-3.125em - 1px)'
        // console.log(el)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/globals.scss';

$breakpoint-to-column: 50rem; //800px
$breakpoint-to-tablet: 75rem; //1200px
#menu {
  z-index: 3;
}

ul {
  list-style-type: none;
  padding: unset;
  margin: unset;
}

h2:hover {
  color: $font-grey;
}

h3 {
  @include fluid-type(font-size, $minScreen, $maxScreen, 1.125rem, 1.5625rem); // 18 - 25
  margin-bottom: 0.4em;
  line-height: 1.3;
  &:hover {
    color: $font-grey;
  }
}

.plus {
  margin-right: .4em;
}

.blog-articles-link {
  text-decoration: none;
  color: unset;
}

.max-width-limit {
  @media only screen and (max-width: $maxScreen) {
    @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875rem, 15.625rem); // 250 - 30
    @include fluid-type(padding-right, $minScreen, $maxScreen, 1.875rem, 15.625rem); // 250 - 30
  }
  // max-width: $maxScreen;
  padding-left: calc((100vw - #{$maxScreen}) / 2 + 15.625rem);
  padding-right: calc((100vw - #{$maxScreen}) / 2 + 15.625rem);
}

.blog-back {
  padding-top: 10rem;
  position: relative;
  z-index: 2;
}

.blog-articles-header {
  padding-top: .08em;
  margin-bottom: 0;
  line-height: 115%;

  position: relative;
  z-index: 1;
}
.blog-articles-list-featured {
  @media only screen and (max-width: $breakpoint-to-column) {
    padding-top: 6.25em
  }

  display: flex;
  flex-wrap: wrap;
  padding-top: 8.6875rem;

  background-image: url('~/assets/images/blog-list-bg.jpg');
  // background-repeat: repeat-x;
  background-clip: border-box;
  background-size: 1920px 790px;
  background-position: bottom;

  position: relative;
  margin-top: -6rem;
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
}

.blog-articles-list-featured-image-wrapper-inner {
  @media only screen and (max-width: $breakpoint-to-tablet) {
    height: unset;
  }
  position: relative;
  z-index: 1;
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
  @media only screen and (max-width: $breakpoint-to-column) {
    padding-top: 2.5em;
    padding-bottom: 1em;
  }
  text-align: center;
}

::v-deep(#whitepaper) {
  position: static;
  // padding-top: 1em;
}

#whitepaper-section {
  @media only screen and (max-width: $breakpoint-to-column) {
    background-position: 50% -7%;
    padding-top: 10em;
    margin-top: -3em;
  }
  background-image: url('~/assets/images/grass-bg.jpg');
  background-repeat: repeat-x;
  background-clip: border-box;
  background-size: 1920px 332px;//3840px 664px;
  // background-position: top;
  background-position: 100% -7%;
  padding-top: 16em;

  // margin-top: calc(-3.125em - 1px);
}

</style>
