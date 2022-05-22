<template>
  <div class="waitlist-wrapper">
    <div class="waitlist-description">
      <h1>
        WaitListComponent
      </h1>
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
    email: ''
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
        })
        .catch(console.error)
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
