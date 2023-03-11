<template>
  <v-app>
    <v-app-bar flat class="primary">
      <v-container class="fill-height d-flex align-center">
        <v-avatar class="me-10 ms-4" color="grey-darken-1" size="32"></v-avatar>

        <router-link v-for="link in links" :key="link" :to="`${link.to}`">
          <v-btn variant="text">
            {{ link.title }}
          </v-btn>
        </router-link>
      </v-container>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "TheNavBar",
  data: () => ({
    links: [
      { title: "MODELOS", to: "/" },
      { title: "CAMPANHAS", to: "/campanhas" },
      { title: "NOTÍCIAS", to: "/noticias" },
      { title: "PÓS-VENDA", to: "/pos-venda" },
    ],
  }),
};
</script>
