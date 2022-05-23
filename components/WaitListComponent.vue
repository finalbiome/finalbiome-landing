<template>
  <div class="waitlist-wrapper">
    <ButtonComponent
      caption="Wait List"
      class="wl-btn"
    />

    <v-dialog
      v-model="dialog"
      max-width="37.5em"
      activator=".waitlist-wrapper > .wl-btn"
      :fullscreen="$vuetify.breakpoint.xsOnly"
      :hide-overlay="$vuetify.breakpoint.xsOnly"
    >
      <div class="wl-dialod">
        <h2>
          The finalbiome is near
        </h2>
        <div class="wl-dialog-desc">
          Do not miss the chance to get great opportunities as the first
        </div>
        <div class="waitlist-form">
          <ValidationObserver
            ref="observer"
            v-slot="{ invalid }"
            mode="eager"
          >
            <form
              ref="form"
              action="https://docs.google.com/forms/d/e/1FAIpQLSdI4rjJxIgGjaVUdjG2zETV-wmxgb8cNR0s2QEl1gQVZeEkog/formResponse"
              method="POST"
              @submit.prevent="submit"
            >
              <ValidationProvider
                v-slot="{ errors }"
                name="email"
                rules="required|email"
              >
                <v-text-field
                  v-model="email"
                  :error-messages="errors"
                  label="E-mail"
                  required
                  name="entry.973815278"
                />
              </ValidationProvider>
              <v-select
                v-model="selectRole"
                :items="itemsRole"
                label="Who you are?"
                name="entry.198554027"
              />
              <div class="wl-buttons-wrapper">
                <v-btn
                  type="submit"
                  :disabled="invalid"
                >
                  submit
                </v-btn>
                <v-btn class="wl-dl-btn-close" @click="close">
                  close
                </v-btn>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: '{_field_} can not be empty'
})

extend('email', {
  ...email,
  message: 'Email must be valid'
})

export default {
  name: 'WaitListComponent',
  components: { ValidationProvider, ValidationObserver },
  data: () => ({
    email: '',
    selectRole: '',
    itemsRole: [
      'Gamer',
      'Developer',
      'Both'
    ],
    dialog: false
  }),
  methods: {
    submit () {
      this.$refs.observer.validate()
      // send form data to the google forms
      const form = this.$refs.form
      const data = new URLSearchParams()
      for (const pair of new FormData(form)) {
        data.append(pair[0], pair[1])
      }
      const gfUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdI4rjJxIgGjaVUdjG2zETV-wmxgb8cNR0s2QEl1gQVZeEkog/formResponse'
      fetch(gfUrl, {
        method: 'POST',
        mode: 'no-cors',
        header: {
          'Content-Type': 'application/json'
        },
        body: data
      })
        .then(() => {
          console.log('sent')
          this.clear()
          // send event to GA
          if (gtag) {
            gtag('event', 'submit', {
              origin: 'wait_list'
            })
          }
        })
        .catch((e) => {
          console.error(e)
          // send error to GA
          if (gtag) {
            gtag('event', 'exception', {
              description: e,
              fatal: false
            })
          }
        })
      this.dialog = false
    },
    clear () {
      this.email = ''
      this.selectRole = ''
      this.$refs.observer.reset()
    },
    close () {
      this.dialog = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/globals.scss';
.wl-dialod {
  @media only screen and (max-width: 37.5em) {
    @include fluid-type(padding-left, $minScreen, $maxScreen, 1.875rem, 15.625rem); // 250 - 30
    @include fluid-type(padding-right, $minScreen, $maxScreen, 1.875rem, 15.625rem); // 250 - 30
    @include fluid-type(padding-top, $minScreen, $maxScreen, 1.875rem, 15.625rem); // 250 - 30
  }
  padding: 1em;
  background-color: $backgroung-main;
}
.wl-dialog-desc {
  padding-bottom: 1em;
}
.wl-buttons-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 2em;
}
.wl-dl-btn-close {
  @media only screen and (max-width: 37.5em) {
    display: flex;
  }
  display: none;
}
</style>
