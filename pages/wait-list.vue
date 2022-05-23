<template>
  <div class="waitlist-wrapper">
    <ButtonComponent
      @click.stop="show"
    />
    <v-btn color="accent" large @click.stop="show" />
    <WaitListComponent v-model="showScheduleForm" />
  </div>
</template>

<script>
import WaitListComponent from '~/components/WaitListComponent.vue'

export default {
  name: 'WhaitListPage',
  components: { WaitListComponent },
  data () {
    return {
      showScheduleForm: false
    }
  },
  methods: {
    show () {
      this.showScheduleForm = true
      console.log('ssss')
    }
  }
}
</script>
