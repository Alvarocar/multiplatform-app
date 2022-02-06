<template>
<div>
  <index />
</div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Index from '../pages/Index.vue'
export default defineComponent({
  name: "MainLayout",
  components: {
    Index
  }
});
</script>
