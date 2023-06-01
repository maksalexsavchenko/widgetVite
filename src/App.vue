<template>
  <router-view/>
</template>

<script>

import {defineComponent} from "vue";
import WidgetComponent from "./components/WidgetComponent.vue";

export default defineComponent({
    components: {WidgetComponent}
})
</script>

<style scoped>

</style>
