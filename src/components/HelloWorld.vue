<template>
  <v-responsive class="align-center text-center fill-height bg-image">
    <v-img height="200" src="@/assets/logo.svg" />

    <div class="text-body-2 font-weight-light mb-n1 text-white">Welcome to</div>

    <h1 class="text-h3 font-weight-bold mt-2 text-white">MyRec</h1>

    <div class="py-12" />
    <v-btn
      color="blue-darken-4"
      :to="{ name: 'Home' }"
      min-width="228"
      rel="noopener noreferrer"
      size="x-large"
      elevation="12"
      rounded="xl"
    >
      <v-icon icon="mdi-speedometer" size="large" start />

      Get Started
    </v-btn>
  </v-responsive>
</template>

<script setup>
//
</script>

<style scoped>
.bg-image {
  background-image: url("@/assets/bg-landing.jpg");
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(5px);
}
</style>
