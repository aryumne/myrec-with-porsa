<template>
  <Default>
    <v-row justify="center" class="mt-4">
      <v-col cols="12" lg="4" md="6" sm="8">
        <v-card class="mx-auto text-start pa-6 transparent-card">
          <v-card-title class="mb-3 text-center"> Just type your target number👌 </v-card-title>
          <v-text-field density="compact" type="number" variant="solo-filled" v-model="phone" placeholder="start with your country code, example: 62" required></v-text-field>
           <a
              :href="`https://wa.me/${phone}`"
              class="text-white text-decoration-none text-center"
            >
              <v-btn
            block
            class="pa-4"
            color="green-lighten-2"
            size="small"
            elevation="2"
            variant="elevated"
          >
            Text me
          </v-btn>
            </a>
        </v-card>
      </v-col>
    </v-row>
  </Default>
</template>

<script setup>
import Default from './layouts/Default.vue';
import { ref } from 'vue';

const phone = ref(null)

</script>

<style scoped>
.transparent-card {
  background: rgba(185, 247, 216, 0.4);
  backdrop-filter: blur(3px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0, 0.1);
  border-radius: 5%;
}
</style>