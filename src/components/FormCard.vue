<template>
  <v-card class="mx-auto upload-card" variant="outlined">
    <v-card-item>
      <v-switch
        v-model="isFileMode"
        label="Upload file mode"
        color="blue-darken-4"
      ></v-switch>
      <v-textarea v-if="!isFileMode" label="Your text"></v-textarea>
      <v-file-input v-else clearable label="File input"></v-file-input>
    </v-card-item>

    <v-card-actions>
      <v-btn color="#0D47A1" variant="text"> Convert </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const isFileMode = ref(false);
</script>

<style scoped>
.upload-card {
  border: 3px dotted rgba(128, 128, 128, 0.616);
}
</style>
