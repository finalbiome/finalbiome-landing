<template>
  <div id="menu" class="menu-wrapper">
    <div class="m-logo">
      <a href="/">
        <img src="~/assets/images/finalbiome.svg" alt="finalbiome logo">
      </a>
    </div>
    <nav v-click-outside="onClickOutside">
      <input id="button" type="checkbox" @input="clickMenu">
      <label for="button" onclick />
      <ul>
        <li><a href="#solution" @click="onClickOutside">Solution</a></li>
        <li><a href="#roadmap" @click="onClickOutside">Roadmap</a></li>
        <li><a href="#whitepaper" @click="onClickOutside">Whitepaper</a></li>
        <li><a href="#whitepaper" @click="onClickOutside">Lightpaper</a></li>
        <li>
          <div class="social-links">
            <SocialLinkComponent class="m-link" link-url="https://twitter.com/FinalBiome" network="twitter" />
            <SocialLinkComponent class="m-link" link-url="https://finalbiome.medium.com" network="medium" />
            <SocialLinkComponent class="m-link" link-url="https://www.linkedin.com/company/finalbiome" network="linkedin" />
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.directive('click-outside', {
  bind (el, binding, vnode) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  }
})

export default {
  name: 'MenuSection',
  methods: {
    onClickOutside () {
      // close menu if open
      if (document.getElementById('button').checked) {
        document.getElementById('button').checked = false
      }
    },
    clickMenu (value) {
      document.getElementById('menu').style.backgroundColor = value.target.checked
        ? '#2c2c2c'
        : 'transparent'
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
  position: absolute;
  z-index: 1;
  // background: #2c2c2c;
  width: 100%;
}

/* Advanced Checkbox Hack */
body { animation: bugfix infinite 1s; }
@keyframes bugfix { from {padding:0;} to {padding:0;} }

input[type=checkbox] {
  position: absolute;
  top: -99999px;
  left: -99999px;
}

label {
  display:none;
  cursor: pointer;
  user-select:none;
}

.social-links {
  display: flex;
  column-gap: 1.25em;
  margin-left: auto;
  align-items: center;
}

.m-logo {
  width: 3.33em;
  height: 3.33em;
  margin-right: 2.5em;
  align-self: center;

  > a {
    display: inline-block;
  }
}
.m-logo > img {
  width: 3.33em;
}

/* menu */
nav {
  position:relative;
  width: 100%;

  a,
  label {
    color:#fff;
    text-decoration:none;
    font-size: 1.125em;
    transition:color .3s ease-in-out;
  }

  ul {
    padding: 0;
    margin: 0 auto;
    width:100%;
    list-style:none;
    display: flex;
    align-items: center;

    > li {
      float:left;
      padding: 1em;
      text-align:center;
      cursor: pointer;

      &:hover {
        > a {
          color:#3CEC3F;
        }
      }

      &:last-of-type {
        margin-left: auto;
      }
    }
  }

  font-weight: 400;
}

/* small screens */
@media screen and (max-width: 58.75em) {
  nav {
    ul {
      display:none;
      height:100%;

      > li {
          padding: 1em 0;

          &:first-of-type {
          margin-top: 1em;
        }
      }

    }

    label {
      position:relative;
      display:block;
      width:100%;
      min-height:2.25em;
      padding:.45em;
      font-size:1em;
      margin:0;
    }

    label:after {
      position: absolute;
      right: .25em;
      top: 0;
      content: url("~/assets/images/menu.svg");
      font-size:1.8em;
      transition: transform .2s ease-in-out;
    }

    input[type=checkbox]:checked ~ label:after {
      transform: rotate(90deg);
    }

    input[type=checkbox]:checked ~ ul {
      display:block;

      > li {
        width:100%;
        opacity:.8;
        text-align:left;
      }
    }
  }

  .m-logo {
    align-self: flex-start;
  }
}

</style>
