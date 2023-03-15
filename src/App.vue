<template>
  <v-app>
    <v-app-bar flat class="bg-primary pa-2">
      <v-container class="fill-height">
        <v-img src="http://teste1.bcc.ao/gets/images/jetur/logo.png"></v-img>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <router-link
          v-for="link in links"
          :key="link"
          :to="`${link.to}`"
          class="links-nav"
        >
          {{ link.title }}
        </router-link>
        <v-spacer></v-spacer>
        <v-btn variant="flat" prepend-icon="mdi-car" color="error">
          TEST DRIVE
        </v-btn>
      </v-container>
    </v-app-bar>
    <router-view></router-view>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
import TheFooter from "./layouts/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheFooter,
  },
  data: () => ({
    links: [
      { title: "HOME", to: "/" },
      { title: "MODELOS", to: "/jetur/modelos" },
      { title: "GALERIAS", to: "/campanhas" },
      { title: "NOTÍCIAS", to: "/noticias" },
      { title: "PÓS-VENDA", to: "/pos-venda" },
      { title: "SOBRE NÓS", to: "/pos-venda" },
    ],
  }),
};
</script>

<style lang="css" scoped>
.links-nav {
  color: #fbfbfb !important;
  background: none !important;
  padding: 10px;
  margin-right: 10px;
  margin-top: -10px;
  transition: 0.5s;
}
.links-nav:hover {
  background: none !important;
  border-bottom: 2px solid #f22 !important;
  transition: 0.5s;
}
</style>
