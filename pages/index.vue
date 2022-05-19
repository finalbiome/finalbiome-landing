<template>
  <div>
    <HeroSection />
    <SolutionsSection />
    <FeaturesSection />
    <JoinSection />
  </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue'
import SolutionsSection from '~/components/SolutionsSection.vue'
import FeaturesSection from '~/components/FeaturesSection.vue'
import JoinSection from '~/components/JoinSection.vue'

export default {
  name: 'IndexPage',
  components: { HeroSection, SolutionsSection, FeaturesSection, JoinSection }
}
</script>
