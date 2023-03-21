<template>
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
      <div class="mt-n3">
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <router-link to="#!" class="links-nav" v-bind="props">
              MODELOS
            </router-link>
          </template>

          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>
                <router-link :to="item.link" class="links-nav-submenu">
                  {{ item.title }}
                </router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <router-link
        v-for="link in links"
        :key="link"
        :to="`${link.to}`"
        class="links-nav"
      >
        {{ link.title }}
      </router-link>
      <v-spacer></v-spacer>
      <router-link to="/fazer-test-driver">
        <v-btn variant="flat" rounded="0" prepend-icon="mdi-car" color="error">
          TEST DRIVE
        </v-btn>
      </router-link>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "TheNavbar",
  data: () => ({
    links: [
      /*    { title: "SOBRE NÓS", to: "/sobre" }, */
      /* { title: "MODELOS", to: "/jetur/modelos" }, */
      /*    { title: "CATÁLOGOS", to: "/catalogos" }, */
      { title: "NOTÍCIA", to: "/noticias" },
      /*   { title: "GALERIA", to: "/galeria" }, */
      { title: "PÓS-VENDA", to: "/pos-venda" },
    ],
    items: [
      { title: "X90 PLUS", link: "jetur/modelo/1" },
      { title: "X70 PLUS", link: "jetur/modelo/2" },
      { title: "X70", link: "jetur/modelo/3" },
      { title: "Catálogos", link: "catalogos" },
    ],
  }),

  mounted() {
    document.title = "Jetour Angola";
  },
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
.links-nav-submenu {
  color: #1a1a1a !important;
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
