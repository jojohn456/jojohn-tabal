<template>
  <q-page>
    <Navbar />
    <div class="row">
      <div class="offset-lg-2 col-lg-8 mt-3" align="center">
        <div class="avatar">
          <div class="w-full max-w-[400px] rounded-full">
            <img src="/images/profile.jpg" />
          </div>
        </div>
        <p>
          <strong>Name:</strong>&nbsp;Jojohn M. Tabal Jr.
          <br />
          <strong>Nationality:</strong>&nbsp;Filipino
          <br />
          <strong>Language:</strong>&nbsp;English, Filipino, Bisaya
          <br />
          <strong>Address:</strong>&nbsp;Philippines
          <br />
          <strong>Education:</strong>&nbsp;BS-Information Technology (2020)
          <br />
          <strong>Email:</strong>&nbsp;
          <a class="text-blue" href="mailto:tabal.jojohn@gmail.com"
            >tabal.jojohn@gmail.com</a
          >
        </p>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
@import '../css/index.css';
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';

export default defineComponent({
  name: 'Index',
  setup() {
    console.log('Index');
  },
  components: { Navbar },
  props: {},
  data: function () {
    return {};
  },
  mounted() {
    console.log('Index');
  },
  methods: {},
});
</script>
