<template>
  <v-app>
    <v-app-bar flat class="bg-primary">
      <v-container class="fill-height">
        <v-avatar class="me-10 ms-4" color="grey-darken-1" size="32"></v-avatar>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <router-link
          v-for="link in links"
          :key="link"
          :to="`${link.to}`"
          class="links-nav"
        >
          <v-btn variant="text">
            {{ link.title }}
          </v-btn>
        </router-link>
        <v-spacer></v-spacer>
        <v-btn prepend-icon="mdi-car" variant="tonal" color="red">
          Test Drive
        </v-btn>
      </v-container>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
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

<style lang="css" scoped>
.links-nav {
  color: #fbfbfb !important;
}
</style>
