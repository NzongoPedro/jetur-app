<template>
  <v-app>
    <v-app-bar flat class="bg-primary pa-2">
      <v-container class="fill-height">
        <router-link to="/">
          <v-img
            class="my-0"
            width="22vh"
            src="http://teste1.bcc.ao/gets/images/jetur/logo.png"
          >
          </v-img>
        </router-link>
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
      { title: "MODELOS", to: "/jetur/modelos" },
      { title: "GALERIA", to: "/galeria" },
      { title: "NOTÍCIA", to: "/noticias" },
      { title: "PÓS-VENDA", to: "/pos-venda" },
      { title: "SOBRE NÓS", to: "/sobre" },
      { title: "CATÁLOGOS", to: "/catalogos" },
    ],
  }),
};
</script>

<style lang="css" scoped>
.links-nav {
  color: #fbfbfb !important;
  background: none !important;
  padding: 8px;
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
