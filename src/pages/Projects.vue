<template>
           <q-page-container>
    <q-page>
      <div class="row justify-center">
            <div class="col-lg-8">
      <br>
      <v-card >
    <v-card-body>
      <h3>Personal Page</h3>
      <p>
        The site you're on that contains my personal information, past projects and work experience.
      </p>
     <i><strong>Tech: HTML, CSS, Javascript, Typescript, Vue 3, Quasar 2, Vuetiful</strong></i>
    </v-card-body>
  </v-card>
</div>
</div>
<div class="row justify-center">
    <div class="col-lg-8">
      <v-card >
    <v-card-body>
      <div class="row">
        <div class="col-md-8">
      <h3>CPDO Zoning Evaluation System</h3>
      <p>
        A system that processes zoning requests and generates a write-protected file for the project assessment. It also has an admin dashboard that manages zoning officer accounts and logs their activity.
      </p>
      <i><strong>Tech: HTML, CSS, PHP, Javascript, JQuery 3, Laravel 8, Bootstrap 4, Postgresql</strong></i>
    </div>
    <div class="col-md-4">
      <img class="img-responsive" src="/images/Zoning Evaluation System.jpg" loading="lazy" style="width:100%;height:auto;" />
    </div>
    </div>
    </v-card-body>
  </v-card>
</div>
</div>
<div class="row justify-center">
            <div class="col-lg-8">
      <v-card >
    <v-card-body>
      <h3>Wrupup.ph</h3>
      <p>
        A freelancing website that lets you post jobs and apply for one.
      </p>
     <i><strong>Tech: HTML, CSS, PHP, Javascript, JQuery 3, Laravel 5, Bootstrap 3, MariaDB</strong></i>
    </v-card-body>
  </v-card>
</div>
</div>
<br>
  </q-page>
</q-page-container>
</template>

<style scoped>
.vuetiful-card {
margin: 10px;
}
</style>

<script setup lang="ts">
import { VCard, VCardBody, VCardHeader, VCardFooter } from '@code-coaching/vuetiful';
</script>
