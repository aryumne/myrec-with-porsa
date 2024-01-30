<template>
  <v-container class="pt-0">
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
      <v-btn icon @click.prevent="logout">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </v-container>
</template>

<script setup>
import { authService } from "@/services";
import { authStore } from "@/stores";

const logout = async () => {
  try {
    await authService.logout();
    authStore.userLoggedOut();
  } catch (e) {
    console.error(e.message);
  }
};
</script>

<style scoped></style>
@/stores
