<template>
  <q-page>
    <Navbar />
    <div class="row">
      <div class="offset-lg-2 col-lg-8 mt-3" align="center">
        <div class="col-lg-10 w-full">
          <div class="card shadow-xl">
            <div class="row">
              <div class="col-12 p-5">
                <h2 class="text-[24px] leading-[2.50rem]" align="left">
                  <strong>Neki-Neko (In-Progress)</strong>
                  &nbsp;<a
                    href="https://github.com/jojohn456/Neki"
                    target="_blank"
                    ><i class="bi-github w-[20px]"></i
                  ></a>
                </h2>
                <p class="p-0" align="left"><small>2024</small></p>
                <p align="left">
                  An all-in-one business app built on a microservice
                  architechture. This app will also serve as a tool for our
                  family business and for project showcase which will make the
                  server cost much more worth it. Functionalities will be
                  separated per module that the user can add into their
                  individual business. The first modules that I will work on
                  would be a finance tracker and tabs (short term loan) which I
                  think is the most useful in our business. Other modules such
                  as POS and Inventory will follow after.
                </p>
                <br />
                <p align="left">
                  Tech: Laravel, QuasarJS (Vue) + DaisyUI, NGINX, MariaDB
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
          <div class="card shadow-xl">
            <div class="row">
              <div class="col-12 p-5">
                <h2 class="text-[24px] leading-[2.50rem]" align="left">
                  <strong>Piggy</strong>
                  &nbsp;<a
                    href="https://github.com/jojohn456/piggy"
                    target="_blank"
                    ><i class="bi-github w-[20px]"></i></a
                  >&nbsp;<a
                    href="https://www.youtube.com/watch?v=POCgDtqWLp4"
                    target="_blank"
                    ><i class="bi-youtube w-[20px]"></i
                  ></a>
                </h2>
                <p class="p-0" align="left"><small>2024</small></p>
                <p align="left">
                  A piggery management mobile application for our piggery
                  business. One of its functionality is calculate the sow
                  timecycles when the mom pigs goes into heat, when to inject
                  the vitamins and when it goes into labor (farrowing). It also
                  notifies the user via phone notification during the respective
                  dates.
                </p>
                <br />
                <p align="left">
                  Tech: QuasarJS (Vue) + DaisyUI, IndexedDB (DexieJS)
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
          <div class="card shadow-xl">
            <div class="row">
              <div class="col-12 p-5">
                <h2 class="text-[24px] leading-[2.50rem]" align="left">
                  <strong>Password-Manager</strong>
                  &nbsp;<a
                    href="https://github.com/jojohn456/Password-Manager"
                    target="_blank"
                    ><i class="bi-github w-[20px]"></i
                  ></a>
                </h2>
                <p class="p-0" align="left"><small>2020</small></p>
                <p align="left">
                  An aptly named password manager web application, designed in a
                  monolithic kind of architechture, utilizing vue inside of
                  laravel. As the name of the application suggest, it stores
                  user credentials like username and passwords which is
                  protected by a username/email and a master password. It was
                  hosted at some point as my project showcase but the server
                  cost didn't align with its usefulness.
                </p>
                <br />
                <p align="left">
                  Tech: Laravel + Vue + BootstrapVue, Apache, MariaDB
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
@import 'bootstrap-icons/font/bootstrap-icons.css';
</style>

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
