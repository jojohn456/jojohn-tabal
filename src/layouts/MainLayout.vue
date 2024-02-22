<template>
  <q-layout style="min-height: 0px">
    <Navbar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';

export default defineComponent({
  name: 'MainLayout',
  components: { Navbar },
});
</script>
