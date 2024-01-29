<template>
  <v-container class="pt-0">
    <!-- <v-alert
      v-model="alert"
      closable
      color="blue-darken-4"
      variant="tonal"
      class="rounded-0 py-2 text-center"
    >
      Make your text come to life with an engaging voice!
    </v-alert> -->
    <v-toolbar
      elevation="5"
      color="blue-darken-4"
      text="My Recording"
      :floating="true"
      class="mt-2"
      rounded
    >
      <v-btn icon class="hidden-xs-only">
        <v-icon>mdi-speaker-message</v-icon>
      </v-btn>

      <v-toolbar-title>My Rec</v-toolbar-title>
      <v-btn icon :to="{ name: 'Landing' }">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </v-container>
</template>

<script setup>
// import { ref } from "vue";

// const alert = ref(true);
</script>

<style scoped></style>
