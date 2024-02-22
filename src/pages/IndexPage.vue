<template>
  <q-page style="min-height: 0px">
    <div class="row justify-center">
      <div class="col-lg-8">
        <v-card>
          <v-card-body>
            <h3 align="center">Goals</h3>
            <ul>
              <li>
                Interested in projects involving Laravel, JQuery and/or
                QuasarJS.
              </li>
            </ul>
          </v-card-body>
        </v-card>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-lg-8">
        <v-card class="m-[10px]">
          <v-card-body>
            <h3 align="center">Details</h3>
            <p>
              <q-icon name="person" size="24px" /> Name: Jojohn M. Tabal Jr.
            </p>
            <p><q-icon name="flag" size="24px" /> Nationality: Filipino</p>
            <p>
              <q-icon name="closed_caption" size="24px" /> Language: English,
              Filipino, Bisaya
            </p>
            <p>
              <q-icon name="home" size="24px" /> Address: Iligan City,
              Philippines
            </p>
            <p>
              <q-icon name="mail" size="24px" /> Email:
              <a href="mailto:tabal.jojohn@gmail.com">tabal.jojohn@gmail.com</a>
            </p>
            <p>
              <q-icon name="school" size="24px" /> Education: BS-Information
              Technology (St. Michael's College Iligan 2020)
            </p>
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
import { VCard, VCardBody } from '@code-coaching/vuetiful';

export default defineComponent({
  name: 'IndexPage',
  components: { VCard, VCardBody },
});
</script>
