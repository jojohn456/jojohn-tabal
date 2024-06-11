<template>
  <q-page>
    <Navbar />
    <div class="row">
      <div class="offset-lg-2 col-lg-8 mt-3" align="center">
        <div class="col-lg-10 w-full">
          <div class="card shadow-xl h-[200px]">
            <div class="row">
              <div class="col-12 p-5">
                <h2 class="text-[24px] leading-[2.50rem]" align="left">
                  <strong>Zoning Evaluation System</strong>
                </h2>
                <p class="p-0" align="left"><small>2023</small></p>
                <p align="left">
                  A system that processes zoning requests and generates a
                  write-protected word file for the project assessment. It also
                  has an admin dashboard that manages zoning officer accounts
                  and logs their activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="offset-lg-2 col-lg-8 mt-3" align="center">
        <div class="col-lg-10 w-full">
          <div class="card shadow-xl h-[200px]">
            <div class="row">
              <div class="col-12 p-5">
                <h2 class="text-[24px] leading-[2.50rem]" align="left">
                  <strong>Moneylend</strong>
                </h2>
                <p class="p-0" align="left"><small>2020</small></p>
                <p align="left">
                  A lending management web application that's intended to only
                  work locally on the client's computer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="offset-lg-2 col-lg-8 mt-3" align="center">
        <div class="col-lg-10 w-full">
          <div class="card shadow-xl h-[200px]">
            <div class="row">
              <div class="col-12 p-5">
                <h2 class="text-[24px] leading-[2.50rem]" align="left">
                  <strong>Wrupup.ph</strong>
                </h2>
                <p class="p-0" align="left"><small>2020</small></p>
                <p align="left">
                  A freelancing website that lets you post jobs as a client and
                  apply for one as a freelancer.
                </p>
              </div>
            </div>
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
  name: 'WorkPage',
  components: { Navbar },
  props: {},
  data: function () {
    return {};
  },
  methods: {},
});
</script>
