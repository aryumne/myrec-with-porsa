<template>
  <v-app>
    <v-main>
      <SnackbarInfo />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import SnackbarInfo from "@/components/SnackbarInfo.vue";
</script>
