<template>
  <div class="waitlist-wrapper">
    <ButtonComponent
      caption="Wait List"
      class="wl-btn"
    />

    <v-dialog
      v-model="dialog"
      max-width="600px"
      activator=".waitlist-wrapper > .wl-btn"
    >
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
            <v-btn
              class="mr-4"
              type="submit"
              :disabled="invalid"
            >
              submit
            </v-btn>
            <v-btn @click="clear">
              clear
            </v-btn>
          </form>
        </ValidationObserver>
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
      this.$refs.observer.reset()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
