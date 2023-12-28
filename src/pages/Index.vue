<template>
         <q-page-container>
    <q-page>
      <div class="row justify-center">
      <div class="col-lg-8">
  <v-card>
    <v-card-body>
      <h3 align="center">Goals</h3>
      <ul>
          <li>Interested in projects involving Laravel, JQuery and/or QuasarJS.</li>
      </ul>
    </v-card-body>
  </v-card>
  </div>
</div>
    <div class="row justify-center">
    <div class="col-lg-8">
  <v-card >
    <v-card-body>
      <h3 align="center">Details</h3>
      <p>
        <q-icon name="person" size="24px"/> Name: Jojohn M. Tabal Jr.
      </p>
      <p>
        <q-icon name="flag" size="24px"/> Nationality: Filipino
      </p>
      <p>
        <q-icon name="closed_caption" size="24px"/> Language: English, Filipino, Bisaya
      </p>
      <p>
        <q-icon name="home" size="24px"/> Address: Iligan City, Philippines
      </p>
      <p>
        <q-icon name="mail" size="24px"/> Email: <a href="mailto:tabal.jojohn@gmail.com">tabal.jojohn@gmail.com</a>
      </p>
      <p>
        <q-icon name="school" size="24px"/> Education: BS-Information Technology (St. Michael's College Iligan 2020)
      </p>
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
