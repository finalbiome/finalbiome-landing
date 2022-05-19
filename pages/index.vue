<template>
  <div>
    <HeroSection />
    <SolutionsSection />
  </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue'
import SolutionsSection from '~/components/SolutionsSection.vue'
export default {
  name: 'IndexPage',
  components: { HeroSection, SolutionsSection }
}
</script>
