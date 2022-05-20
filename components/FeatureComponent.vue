<template>
  <div class="feature-wrapper">
    <div class="circle-img">
      <!-- <img src="~/assets/images/f1.svg"> -->
      <img :src="require(`~/assets/images/f${imgIdx}.svg`)">
    </div>
    <div class="content-wrapper">
      <div class="header">
        <h3>{{ title }}</h3>
      </div>
      <div class="content">
        <p>
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureComponent',
  props: ['imgIdx', 'title', 'text']
}
</script>

<style lang="scss" scoped>
$circle-diameter: 5em; //80px;

.feature-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.circle-img {
  background-color: #2C2C2C;
  width: $circle-diameter;
  height: $circle-diameter;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle-img > img {
  width: 55%;
  z-index: 1;
}
.content-wrapper {
  background-color: #2C2C2C;
  max-width: 26.25em; //420px;
  min-height: 14.375em; //230px;
  border-radius: 1.875em; //30px;
  margin-top: calc(-#{$circle-diameter}/2);

  display: flex;
  flex-direction: column;
  align-items: center;
}

.content > p {
  text-align: center;
  padding: 0 2.5em;
  color: #B4B4B4;
}

h3 {
  margin-top: 1.875em;
  margin-bottom: 0.625em;
  line-height: 1.625em;
  text-align: center;
}

</style>
