<template>
  <v-row>
    <v-col cols="12" lg="5">
      <FormCard />
    </v-col>
    <v-col cols="12" lg="7">
      <FilesCard />
    </v-col>
  </v-row>
</template>

<script setup>
import FilesCard from "@/components/FilesCard.vue";
import FormCard from "@/components/FormCard.vue";
</script>
