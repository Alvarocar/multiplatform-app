<template>
<div>
  <h1 >{{ fecha }}</h1>
  <button @click="pressButton()">presione aquí</button>
</div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const isVisible = ref(false)
    const fecha = ref("")
    const pressButton = () => {
      isVisible.value = !isVisible.value
      const date = new Date()
      fecha.value = date.toString()  
    }
    

    return { pressButton, isVisible, fecha }
  },
});
</script>
