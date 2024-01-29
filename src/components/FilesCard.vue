<template>
  <v-card class="mx-auto">
    <v-list lines="two">
      <v-list-subheader inset>Collections</v-list-subheader>

      <v-list-item
        v-for="folder in folders"
        :key="folder.title"
        :title="folder.title"
        :subtitle="folder.subtitle"
      >
        <template v-slot:prepend>
          <v-avatar color="grey-lighten-1">
            <v-icon color="white">mdi-folder</v-icon>
          </v-avatar>
        </template>

        <template v-slot:append>
          <v-btn
            color="grey-lighten-1"
            icon="mdi-information"
            variant="text"
          ></v-btn>
        </template>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-subheader inset>Last opened</v-list-subheader>

      <v-list-item
        v-for="file in files"
        :key="file.title"
        :title="file.title"
        :subtitle="file.subtitle"
      >
        <template v-slot:prepend>
          <v-avatar :color="file.color">
            <v-icon color="white">{{ file.icon }}</v-icon>
          </v-avatar>
        </template>

        <template v-slot:append>
          <v-btn
            color="grey-lighten-1"
            icon="mdi-information"
            variant="text"
          ></v-btn>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const files = ref([
  {
    color: "blue",
    icon: "mdi-clipboard-text",
    subtitle: "Jan 20, 2014",
    title: "Vacation itinerary",
  },
  {
    color: "amber",
    icon: "mdi-gesture-tap-button",
    subtitle: "Jan 10, 2014",
    title: "Kitchen remodel",
  },
  {
    color: "amber",
    icon: "mdi-gesture-tap-button",
    subtitle: "Jan 10, 2014",
    title: "Kitchen remodel",
  },
  {
    color: "amber",
    icon: "mdi-gesture-tap-button",
    subtitle: "Jan 10, 2014",
    title: "Kitchen remodel",
  },
  {
    color: "amber",
    icon: "mdi-gesture-tap-button",
    subtitle: "Jan 10, 2014",
    title: "Kitchen remodel",
  },
  {
    color: "amber",
    icon: "mdi-gesture-tap-button",
    subtitle: "Jan 10, 2014",
    title: "Kitchen remodel",
  },
  {
    color: "amber",
    icon: "mdi-gesture-tap-button",
    subtitle: "Jan 10, 2014",
    title: "Kitchen remodel",
  },
  {
    color: "amber",
    icon: "mdi-gesture-tap-button",
    subtitle: "Jan 10, 2014",
    title: "Kitchen remodel",
  },
  {
    color: "amber",
    icon: "mdi-gesture-tap-button",
    subtitle: "Jan 10, 2014",
    title: "Kitchen remodel",
  },
  {
    color: "amber",
    icon: "mdi-gesture-tap-button",
    subtitle: "Jan 10, 2014",
    title: "Kitchen remodel",
  },
  {
    color: "amber",
    icon: "mdi-gesture-tap-button",
    subtitle: "Jan 10, 2014",
    title: "Kitchen remodel",
  },
]);
const folders = ref([
  {
    subtitle: "Jan 9, 2014",
    title: "Photos",
  },
  {
    subtitle: "Jan 17, 2014",
    title: "Recipes",
  },
  {
    subtitle: "Jan 28, 2014",
    title: "Work",
  },
  {
    subtitle: "Jan 28, 2014",
    title: "Work",
  },
]);
</script>
