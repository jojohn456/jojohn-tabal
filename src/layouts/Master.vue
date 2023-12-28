<template>
  <q-layout>
  <Navbar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue';
</script>
