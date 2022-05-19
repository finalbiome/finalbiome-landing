<template>
  <div>
    <HeroSection />
    <SolutionsSection />
    <FeaturesSection />
  </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue'
import SolutionsSection from '~/components/SolutionsSection.vue'
import FeaturesSection from '~/components/FeaturesSection.vue'

export default {
  name: 'IndexPage',
  components: { HeroSection, SolutionsSection, FeaturesSection }
}
</script>
