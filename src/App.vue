<template>
  <q-layout
    container
    style="height: calc(100vh)"
    class="shadow-2 rounded-borders"
  >
    <router-view />
  </q-layout>
</template>

<style></style>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
/* Add in the line containing the useQuasar import from 'quasar', it gets parsed out for some reason */

import '@code-coaching/vuetiful/styles/all.css';
import '@code-coaching/vuetiful/css/overrides/quasar.css'; // This provides overrides for Quasar components
/**
 * Uncomment the theme you want to use
 */
import '@code-coaching/vuetiful/themes/theme-vuetiful.css';

export default defineComponent({
  name: 'App',
});
</script>
