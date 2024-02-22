<template>
  <div class="col-12" align="center">
    <transition v-bind:duration="1000">
      <img
        v-show="true"
        class="animated bounceInDown"
        id="profile-img"
        src="images/profile.jpg"
        width="200"
        height="auto"
        alt="Profile"
        loading="lazy"
        :duration="1000"
      />
    </transition>
    <h4>Jojohn Tabal</h4>
    <v-radio-group>
      <v-radio-item value="profile" v-on:click="$router.push('/')"
        >Profile</v-radio-item
      >
      <v-radio-item value="projects" v-on:click="$router.push('/projects')"
        >Projects</v-radio-item
      >
      <v-radio-item value="work" v-on:click="$router.push('/work')"
        >Work</v-radio-item
      >
    </v-radio-group>
  </div>
</template>

<style scoped>
#profile-img {
  margin: 2% 0% 0% 0%;
  border-radius: 50%;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { VRadioGroup, VRadioItem } from '@code-coaching/vuetiful';

export default defineComponent({
  name: 'Navbar',
  components: { VRadioGroup, VRadioItem },
});
</script>
