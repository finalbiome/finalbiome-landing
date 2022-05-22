<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
    }
  },
  mounted () {
    const gaScript = document.createElement('script')
    // gaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
    gaScript.setAttribute('strategy', 'lazyOnload')
    gaScript.type = 'text/javascript'
    gaScript.innerHTML = `
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-8GEYRKY3BT');
        `

    document.head.appendChild(gaScript)
  }
}
</script>
