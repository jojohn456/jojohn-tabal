<template>
  <q-page>
    <Navbar />
    <div class="row">
      <div class="offset-lg-2 col-lg-3 w-full p-1">
        <div class="card shadow-xl h-[500px]">
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
              <strong>Education:</strong>&nbsp;<a
                class="text-blue"
                href="https://drive.google.com/drive/folders/1B4-JLYTOo5P1Li9Mmo-1o_UrEz-s5xSM?usp=drive_link"
                target="_blank"
                >BS-Information Technology (2020)</a
              >
              <br />
              <strong>Email:</strong>&nbsp;
              <a class="text-blue" href="mailto:tabal.jojohn@gmail.com"
                >tabal.jojohn@gmail.com</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-5 w-full p-1">
        <div class="card shadow-xl p-5 h-[500px]">
          <h2 class="text-[20px] leading-none">
            <strong>About Me</strong>
          </h2>
          <p class="mt-1">
            Hi, I'm John a web/application developer. I worked in a startup once
            as a junior web developer before moving on to public service.
            Eventually, I left that life as well and decided to take care of our
            family business while doing freelancing at the side. I like learning
            stuffs in general and applying them in my work.
          </p>
        </div>
      </div>
    </div>
    <div class="row pb-4">
      <div class="offset-lg-2 col-lg-8 w-full p-1">
        <div class="card bg-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Tech Stack</h2>
            <h4><strong>Programming Language</strong></h4>
            <p>PHP, Javascript, Kotlin (Learning)</p>
            <h4><strong>Backend</strong></h4>
            <p>ExpressJS, Laravel</p>
            <h4><strong>Frontend</strong></h4>
            <p>JQuery + Bootstrap, QuasarJS + DaisyUI [HTML/CSS]</p>
            <h4><strong>Database</strong></h4>
            <p>MariaDB, IndexedDB (DexieJS)</p>
            <h4><strong>Web Server</strong></h4>
            <p>Digital Ocean, Ubuntu, Nginx</p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
@import 'bootstrap-icons/font/bootstrap-icons.css';
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
