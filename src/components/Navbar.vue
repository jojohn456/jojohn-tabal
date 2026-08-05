<template>
  <div class="row">
    <div class="offset-lg-2 col-lg-8">
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">Jojohn Tabal</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li><a @click="$router.push('/')">Home</a></li>
            <li><a @click="$router.push('/projects')">Projects</a></li>
            <li><a @click="$router.push('/freelance')">Freelance</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Navbar',
});
</script>
