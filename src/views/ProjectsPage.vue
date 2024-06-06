<template>
  <q-page>
    <Navbar />
  </q-page>
</template>

<style scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';

export default defineComponent({
  name: 'ProjectsPage',
  components: { Navbar },
  props: {},
  data: function () {
    return {};
  },
  methods: {},
});
</script>
