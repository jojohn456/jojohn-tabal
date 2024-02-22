<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-lg-8">
        <br />
        <v-card>
          <v-card-body>
            <h3>Personal Page</h3>
            <p>
              The site you're on that contains my personal information, past
              projects and work experience.
            </p>
            <i
              ><strong
                >Tech: HTML, CSS, Javascript, Typescript, Vue 3, Quasar 2,
                Vuetiful</strong
              ></i
            >
          </v-card-body>
        </v-card>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-lg-8">
        <v-card>
          <v-card-body>
            <h3>CPDO Zoning Evaluation System</h3>
            <p>
              A system that processes zoning requests and generates a
              write-protected file for the project assessment. It also has an
              admin dashboard that manages zoning officer accounts and logs
              their activity.
            </p>
            <i
              ><strong
                >Tech: HTML, CSS, PHP, Javascript, JQuery 3, Laravel 8,
                Bootstrap 4, Postgresql</strong
              ></i
            >
          </v-card-body>
        </v-card>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-lg-8">
        <v-card>
          <v-card-body>
            <h3>Wrupup.ph</h3>
            <p>
              A freelancing website that lets you post jobs and apply for one.
            </p>
            <i
              ><strong
                >Tech: HTML, CSS, PHP, Javascript, JQuery 3, Laravel 5,
                Bootstrap 3, MariaDB</strong
              ></i
            >
          </v-card-body>
        </v-card>
      </div>
    </div>
    <br />
  </q-page>
</template>

<style scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  VCard,
  VCardBody,
  VCardHeader,
  VCardFooter,
} from '@code-coaching/vuetiful';

export default defineComponent({
  name: 'ProjectsPage',
  setup() {
    console.log('ProjectsPage');
  },
  components: { VCard, VCardBody },
});
</script>
