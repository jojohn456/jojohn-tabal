<template>
  <q-page>
    <Navbar />
    <div class="row">
      <div class="offset-lg-2 col-lg-8 mt-3 w-full">
        <div class="card shadow-xl p-5">
          <h2 class="text-[24px] leading-[2.50rem] text-start">
            <strong class="flex items-center gap-x-2">
              Zoning Evaluation System
            </strong>
          </h2>
          <p class="text-start"><small>2023</small></p>
          <p class="text-justify">
            A system that processes zoning requests and generates a
            write-protected word file for the project assessment. It also has an
            admin dashboard that manages zoning officer accounts and logs their
            activity. As the sole developer, I worked on both the frontend and
            the backend of the system. It was made during my stay in the public
            service.
          </p>
          <p class="mt-2 text-start">
            Tech: Laravel, JQuery + Bootstrap, NGINX, Postgresql
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="offset-lg-2 col-lg-8 mt-3 w-full">
        <div class="card shadow-xl p-5">
          <h2 class="text-[24px] leading-[2.50rem] text-start">
            <strong class="flex items-center gap-x-2">Moneylend</strong>
          </h2>
          <p class="text-start"><small>2020</small></p>
          <p class="text-justify">
            A lending management web application that's intended to work only on
            the local network of the client's computer. I worked on both the
            frontend and the backend of the system.
          </p>
          <p class="mt-2 text-start">
            Tech: Laravel, JQuery + Bootstrap, Apache, MariaDB
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="offset-lg-2 col-lg-8 mt-3 w-full">
        <div class="card shadow-xl p-5">
          <h2 class="text-[24px] leading-[2.50rem] text-start">
            <strong class="flex items-center gap-x-2"
              >Wrupup.ph
              <a href="https://wrupup.ph" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"
                  />
                  <path
                    d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"
                  />
                </svg>
              </a>
            </strong>
          </h2>
          <p class="text-start"><small>2019</small></p>
          <p class="text-start">
            A freelancing website that lets you post jobs as a client and apply
            for one as a freelancer. As a junior web developer, I worked on both
            the frontend and the backend of the system.
          </p>
          <p class="mt-2 text-start">
            Tech: Laravel, JQuery + Bootstrap, NGINX, MariaDB
          </p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';

export default defineComponent({
  name: 'WorkPage',
  components: { Navbar },
  props: {},
  data: function () {
    return {};
  },
  methods: {},
});
</script>
