<template>
  <v-app>
    <v-app-bar flat class="bg-primary pa-1">
      <v-container class="fill-height">
        <router-link to="/">
          <v-img
            class="logo ma-auto"
            width="200px"
            
            src="http://teste1.bcc.ao/gets/images/jetur/logo.png"
          >
          </v-img>
        </router-link>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <div class="mt-n5">
          <v-menu open-on-hover rounded="0">
            <template v-slot:activator="{ props }">
              <router-link
                :key="$route.params.atr"
                to="/"
                class="links-nav"
                v-bind="props"
              >
                MODELOS
              </router-link>
            </template>
            <v-list rounded="0" class="bg-primary">
              <v-list-item
                rounded="0"
                v-for="(item, index) in items"
                :key="index"
              >
                <v-list-item-title rounded="0">
                  <router-link
                    :key="$route.params.atr"
                    :to="item.link"
                    class="links-nav-submenu"
                  >
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
          <v-btn
            variant="flat"
            rounded="0"
            prepend-icon="mdi-car"
            color="error"
            class="mt-n6"
          >
            TEST DRIVE
          </v-btn>
        </router-link>
      </v-container>
    </v-app-bar>
    <router-view></router-view>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
//import MenuFlutuanteVue from "./components/MenuFlutuante.vue";
import TheFooter from "./layouts/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheFooter,
    // MenuFlutuanteVue,
  },
  data: () => ({
    links: [
      /*    { title: "SOBRE NÓS", to: "/sobre" }, */
      /* { title: "MODELOS", to: "/jetur/modelos" }, */
      /*    { title: "CATÁLOGOS", to: "/catalogos" }, */
      { title: "CAMPANHAS", to: "#!" },
      { title: "NOTÍCIA", to: "/noticias" },
      { title: "PÓS-VENDA", to: "/pos-venda" },

      /*   { title: "GALERIA", to: "/galeria" }, */
    ],
    items: [
      { title: "X90 PLUS", link: "/jetur/modelo/1" },
      { title: "X70 PLUS", link: "/jetur/modelo/2" },
      { title: "X70", link: "/jetur/modelo/3" },
      /*   { title: "Catálogos", link: "/catalogos" }, */
    ],

  }),

  methods: {
    atualizarComponente() {
      // lógica para atualizar o componente com base no novo valor de atr
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.atr = to.params.atr;
    this.atualizarComponente();
    next();
  },

  mounted() {
    document.title = "Jetour Angola";
  },
};
</script>

<style lang="css" scoped>
.links-nav {
  color: #fbfbfb !important;
  background: none !important;
  padding: 25px;
  margin-right: 10px;
  margin-top: -20px;
  transition: 0.5s;
}
.links-nav-submenu {
  color: #fbfbfb !important;
  background: none !important;
  padding: 30px;
  margin-right: 10px;
  margin-top: -35px !important;
  transition: 0.5s;
}
.links-nav-submenu:hover {
  color: #f22 !important;
  transition: 0.5s;
}
.links-nav:hover {
  background: none !important;
  text-decoration: underline !important;
  color: #f22 !important;
  transition: 0.5s;
}

.logo{
  margin-top: -20px !important;
}

</style>
