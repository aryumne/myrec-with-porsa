<template>
  <v-app>
    <v-main>
      <SnackbarInfo />
      <v-responsive class="align-center text-center fill-height bg-image">
        <v-container class="mx-auto">
          <slot />
        </v-container>
      </v-responsive>
    </v-main>
  </v-app>
</template>

<script setup>
import SnackbarInfo from "../components/SnackbarInfo.vue";
</script>

<style scoped>
.bg-image {
  background-image: url("@/assets/bg-landing.jpg");
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(8px);
  filter: brightness(90%);
}
</style>
