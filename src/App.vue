<template>
  <v-app>
    <v-app-bar flat class="bg-primary">
      <v-container class="fill-height">
        <router-link to="/">
          <v-img
            class="my-n8"
            width="22vh"
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
        <div class="mt-n7">
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
            class="mt-n8"
          >
            TEST DRIVE
          </v-btn>
        </router-link>
      </v-container>
    </v-app-bar>
    <router-view></router-view>
    <the-footer></the-footer>
    <div id="menu-flutuante" class="menu-flutuante">
      <img
        v-for="(icon, i) in menu_flutuante"
        :key="i"
        class="icons"
        :src="icon.foto"
        alt="alt"
      />
      <br />
    </div>
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

    menu_flutuante: [
      { foto: "http://teste1.bcc.ao/gets/images/menu-flutuante/car_h.png" },
      { foto: "http://teste1.bcc.ao/gets/images/menu-flutuante/call_h.png" },
      { foto: "http://teste1.bcc.ao/gets/images/menu-flutuante/what_h.png" },
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
  border-bottom: 2px solid #f22 !important;
  transition: 0.5s;
}

#menu-flutuante.menu-flutuante {
  position: fixed !important;
  background: rgba(255, 255, 255, 0.3);
  border: 5px solid #fff;
  padding: 5px;
  border-radius: 50px;
  margin-top: 12vh;
  top: 50px; /* ajuste essa altura de acordo com sua necessidade */
  left: 95%; /* ajuste a posição horizontal de acordo com sua necessidade */
}
#menu-flutuante.menu-flutuante img {
  max-width: 100%;
  width: 40px;
  height: 40px;
  display: block;
  margin-top: 8px;
}
</style>
