<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-lg-8">
        <v-card>
          <v-card-body>
            <h3>Administrative Assistant III | LGU Iligan</h3>
            <small>March 2023 - September 2023</small>
            <p>
              By using the QGIS software, I assist in creating maps such
              population heat maps, barangay maps and building footprints. I'm
              also responsible in troubleshooting network, pc and printer
              problems. As the goverment digitization effort took place, I was
              tasked to developed the Zoning Evaluation System to reduce the
              office paperwork and improves the productivity of the Zoning
              Officer.
            </p>
          </v-card-body>
        </v-card>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-lg-8">
        <v-card>
          <v-card-body>
            <h3>Web Developer | Wrupup Inc.</h3>
            <small>April 2019 - October 2019</small>
            <p>
              As a junior web developer, I'm responsible of maintaining the
              back-end and front-end of the website with the help of an expert
              designer. I'm also tasked in maintaining the running computers
              inside the office.
            </p>
          </v-card-body>
        </v-card>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-lg-8">
        <v-card>
          <v-card-body>
            <h3>Computer Technician</h3>
            <small>2010</small>
            <p>
              I've studied as a computer technician with the original goal of
              maintaining our computer shop business. But eventually moved on to
              repairing as a service.
            </p>
          </v-card-body>
        </v-card>
      </div>
    </div>
  </q-page>
</template>

<style scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';
import { VCard, VCardBody } from '@code-coaching/vuetiful';

export default defineComponent({
  name: 'WorkPage',
  components: { VCard, VCardBody },
});
</script>
