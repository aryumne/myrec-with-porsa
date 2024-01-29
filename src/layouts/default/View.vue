<template>
  <v-app>
    <app-bar />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from "./AppBar.vue";
</script>
