<template>
  <div class="text-center">
    <v-snackbar
      rounded="pill"
      color="blue-lighten-5"
      timeout="10000"
      v-model="snackbar"
      class="mb-5 text-center"
    >
      Make your text come to life with an engaging voice!
    </v-snackbar>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { ref } from "vue";

const snackbar = ref(false);
onMounted(() => (snackbar.value = true));
</script>
