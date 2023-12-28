<template>
      <q-layout container style="height: calc(100vh)" class="shadow-2 rounded-borders">
  <router-view />
</q-layout>
</template>

<style>
html,
body {
  width: 100%;
  height: auto;
  margin: 0px;
  padding: 0px;
  scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6 { 
  padding: 0px;
  margin: 0px;
  word-wrap: break-word;
}

p{
 padding: 5px;
}

small{
  padding: 5px
}

.img-responsive {
  max-width: 100%;
  height: auto;
}

ul{
  list-style-type: circle; 
  list-style-position: inside;
  color: black;
}


</style>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useDarkMode, useTheme } from '@code-coaching/vuetiful';
import useQuasar from 'quasar/src/composables/use-quasar.js';

import '@code-coaching/vuetiful/styles/all.css';
import '@code-coaching/vuetiful/css/overrides/quasar.css'; // This provides overrides for Quasar components
import '@code-coaching/vuetiful/themes/theme-vuetiful.css';

const { autoModeWatcher, chosenMode, MODE } = useDarkMode();
const { changeDataTheme } = useTheme();
const $q = useQuasar();

onMounted(() => {
  changeDataTheme('vuetiful'); // adds data-theme="vuetiful" to the <body> tag
  autoModeWatcher(); // automatically use the dark preference of the OS
  handleQuasarDarkMode(chosenMode.value);
});

const handleQuasarDarkMode = (mode: string) => {
  $q.dark.set(mode === MODE.DARK);
  if (mode === MODE.LIGHT) {
    document.body.classList.remove('body--light');
  } else {
    document.body.classList.remove('body--dark');
  }
};

watch(
  () => chosenMode.value,
  (newMode) => {
    handleQuasarDarkMode(newMode);
  }
);
</script>
