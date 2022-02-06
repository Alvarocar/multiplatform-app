<template>
<div class="row" >
    <q-video
      :ratio="16/9"
      class="col"
      :title="video.title"
      :src="video.link"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import getVideo from '../mock/mock-video'
export default defineComponent({
  name: 'RandomVideo',
  setup() {
    const video = getVideo()
    console.log(video)
    return { video }
  },
})
</script>

<style lang="scss">
  .row {
    max-width: 40em;
    margin: 0 auto;
  }
</style>
