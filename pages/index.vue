<template>
  <div>
    <HeroSection />
    <SolutionsSection />
    <FeaturesSection />
    <JoinSection />
    <RoadmapSection />
    <WhitepaperSection />
  </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue'
import SolutionsSection from '~/components/SolutionsSection.vue'
import FeaturesSection from '~/components/FeaturesSection.vue'
import JoinSection from '~/components/JoinSection.vue'
import RoadmapSection from '~/components/RoadmapSection.vue'
import WhitepaperSection from '~/components/WhitepaperSection.vue'
import MenuSection from '~/components/MenuSection.vue'

export default {
  name: 'IndexPage',
  components: { HeroSection, SolutionsSection, FeaturesSection, JoinSection, RoadmapSection, WhitepaperSection, MenuSection }
}
</script>
