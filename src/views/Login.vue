<template>
  <v-row justify="center">
    <v-col cols="12" lg="4" md="6">
      <v-card class="mx-auto text-start pa-6 transparent-card">
        <v-card-item>
          <v-card-title class="mb-8"> Let me identify you! </v-card-title>
          <div
            class="text-subtitle text-medium-emphasis"
            style="color: white !important"
          >
            Email
          </div>
          <v-text-field
            density="compact"
            type="email"
            prepend-inner-icon="mdi-email-outline"
            variant="solo-filled"
            v-model="data.email"
            :rules="rules.email"
            placeholder="johndoe@gmail.com"
            required
          ></v-text-field>

          <div
            class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between mt-2"
            style="color: white !important"
          >
            Password

            <a
              class="text-caption text-decoration-none text-white"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Forgot login password?</a
            >
          </div>

          <v-text-field
            density="compact"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            placeholder="Enter your password"
            prepend-inner-icon="mdi-lock-outline"
            variant="solo-filled"
            v-model="data.password"
            :rules="rules.password"
            @click:append-inner="visible = !visible"
          ></v-text-field>

          <v-btn
            block
            class="mb-6 mt-2"
            color="blue-darken-4"
            size="large"
            elevation="5"
            variant="elevated"
            @click.prevent="submit"
          >
            Log In
          </v-btn>

          <v-card-actions class="text-center text-white">
            <router-link
              :to="{ name: 'Landing' }"
              class="text-white text-decoration-none text-center"
            >
              Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
            </router-link>
          </v-card-actions>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { authService } from "@/services";
import { authStore } from "@/stores";
import { ref } from "vue";

const visible = ref(false);
const data = ref({
  email: "",
  password: "",
});
const rules = ref({
  email: [(v) => !!v || "Email is required!"],
  password: [(v) => !!v || "Password is required!"],
});

const submit = async () => {
  try {
    const res = await authService.login(data.value);
    await authStore.setUserLoggedIn(res.data.token);
  } catch (e) {
    console.error(e);
  }
};
</script>

<style scoped>
.transparent-card {
  background: rgba(207, 220, 253, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0, 0.1);
  border-radius: 5%;
}
</style>
