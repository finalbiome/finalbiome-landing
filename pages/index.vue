<template>
  <div>
    <HeroSection />
    <SolutionsSection />
    <FeaturesSection />
    <JoinSection />
    <RoadmapSection />
  </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue'
import SolutionsSection from '~/components/SolutionsSection.vue'
import FeaturesSection from '~/components/FeaturesSection.vue'
import JoinSection from '~/components/JoinSection.vue'
import RoadmapSection from '~/components/RoadmapSection.vue'

export default {
  name: 'IndexPage',
  components: { HeroSection, SolutionsSection, FeaturesSection, JoinSection, RoadmapSection }
}
</script>
