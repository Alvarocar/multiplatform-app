<template>
  <main class="q-pa-md">
  <random-video v-if="isVisible" />
  <section class="btn-section">

    <q-btn
      color="secondary"
      size="xl"
      :rounded="true"
      @click="pressButton"
    >Presione aqu&iacute;</q-btn>
  </section>
  </main>
</template>

<script>
import { defineComponent, ref } from "vue";
import RandomVideo from "src/components/RandomVideo.vue";

export default defineComponent({
    name: "PageIndex",
    setup() {
        const isVisible = ref(false)
        const pressButton = () => {
          isVisible.value = !isVisible.value
        };
        return { pressButton, isVisible };
    },
    components: { RandomVideo }
});
</script>

<style lang="scss" scoped>
  .btn-section {
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  main {
    min-height: 100vh;
   }
</style>
