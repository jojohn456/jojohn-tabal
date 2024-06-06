<template>
  <q-page>
    <Navbar />
    <div class="row">
      <div class="offset-lg-2 col-lg-8 mt-3" align="center">
        <div class="col-lg-10 w-full">
          <div class="card shadow-xl p-2">
            <div class="row">
              <div class="col-4 p-3">
                <img
                  class="img-fluid"
                  src="/images/projects/Zoning Evaluation System.jpg"
                  style="width: 700px; height: auto"
                />
              </div>
              <div class="col-8 px-3">
                <h2 class="text-[24px] leading-[2.50rem]" align="left">
                  <strong>Zoning Evaluation System</strong>
                </h2>
                <p class="p-0" align="left"><small>2023</small></p>
                <p align="left">
                  A system that processes zoning requests and generates a
                  write-protected file for the project assessment. It also has
                  an admin dashboard that manages zoning officer accounts and
                  logs their activity.
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
          <div class="card shadow-xl p-2">
            <div class="row">
              <div class="col-4 p-3">
                <img
                  class="img-fluid"
                  src="/images/projects/Zoning Evaluation System.jpg"
                  style="width: 700px; height: auto"
                />
              </div>
              <div class="col-8 px-3">
                <h2 class="text-[24px] leading-[2.50rem]" align="left">
                  <strong>Moneylend</strong>
                </h2>
                <p class="p-0" align="left"><small>2020</small></p>
                <p align="left">
                  A freelancing website that lets you post jobs and apply for
                  one.
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
          <div class="card shadow-xl p-2">
            <div class="row">
              <div class="col-4 p-3">
                <img
                  class="img-fluid"
                  src="/images/projects/Zoning Evaluation System.jpg"
                  style="width: 700px; height: auto"
                />
              </div>
              <div class="col-8 px-3">
                <h2 class="text-[24px] leading-[2.50rem]" align="left">
                  <strong>Wrupup.ph</strong>
                </h2>
                <p class="p-0" align="left"><small>2019</small></p>
                <p align="left">
                  A freelancing website that lets you post jobs and apply for
                  one.
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
