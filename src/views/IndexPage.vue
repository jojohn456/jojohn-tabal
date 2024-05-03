<template>
  <q-page>
    <Navbar />
    <div class="row">
      <div class="offset-lg-2 col-lg-3 w-full p-1">
        <div class="card shadow-xl">
          <figure>
            <img src="/images/profile.jpg" />
          </figure>
          <div class="card-body">
            <h2 class="card-title"></h2>
            <div class="avatar self-center">
              <div class="max-w-[300px] rounded-full self-auto"></div>
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
      </div>
      <div class="col-lg-3 w-full p-1">
        <div class="card bg-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Tech Stack</h2>
          </div>
        </div>
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
  name: 'IndexPage',
  components: { Navbar },
  props: {},
  data: function () {
    return {};
  },
  methods: {},
});
</script>
