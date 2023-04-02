<template>
  <v-footer class="footer" data-aos="fade-up">
    <div class="w-100 align-center div d-flex">
      <v-container class="">
        <v-row no-gutters>
          <v-col>
            <v-card class="bg-transparent bg-none" elevation="0">
              <v-card-media src="src" height="200px"> </v-card-media>
              <v-card-title primary-title>
                <div>
                  <v-img
                    width="20vh"
                    src="http://teste1.bcc.ao/gets/images/jetur/logo.png"
                  ></v-img>
                </div>
              </v-card-title>
              <v-card-text>
                <router-link
                  v-for="(item, i) in items"
                  :key="i"
                  :to="item.link"
                  class="link-rapido text-uppercase"
                  >{{ item.nome }}</router-link
                >
              </v-card-text>
              <v-card-text class="my-6 bg-none bg-transparent">
                <v-card-title>
                  <h5 class="text-white ml-n4 text-uppercase">
                    Mais informações
                  </h5>
                </v-card-title>
                <span class="text-white text-footer">
                  <v-icon class="mr-3">mdi-phone</v-icon>
                  949 836 673 - 999 345 678
                </span>
                <br />
                <span class="text-white text-footer">
                  <v-icon class="mr-3 icon-footer">mdi-email</v-icon>
                  administrativo@jetourangola.com
                  <span class="ml-9 my-15 mt-n16 p-0 i"
                    >marketing@jetourangola.com</span
                  >
                  <br />
                </span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="bg-transparent bg-none" elevation="0">
              <v-card-title class="my-0">
                <h5 class="text-white text-uppercase">Luanda</h5>
              </v-card-title>
              <v-card-text>
                <p class="text-white text-footer">
                  Viana, Av Fidel de Castro Km 26 Kilamba, Rua imperial Santana,
                  Zona NE Kilamba, Kilamba Kiaxi.
                  <br /><br />
                  Chamavo Rua Alameda Manuel Vandunem Maculusso, Nº 428.
                  <br /><br />
                  Benfica Rua direita do Patriota.
                </p>
              </v-card-text>

              <v-card-title class="my-6">
                <h5 class="text-white">BENGUELA</h5>
              </v-card-title>
              <v-card-text>
                <p class="text-white mt-n7">
                  Zona comercial Do 28, Rua Marecal Carmona.
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="bg-transparent bg-none" elevation="0">
              <v-card-title class="my-0">
                <h5 class="text-white text-uppercase">Modelos</h5>
              </v-card-title>
              <v-card-text>
                <a
                  v-for="(modelo, i) in modelos"
                  :key="i"
                  :href="modelo.link"
                  class="link-rapido"
                  >{{ modelo.nome }}</a
                >
              </v-card-text>
              <br />
              <v-card-text class="ml-n4">
                <v-card-title class="my-0">
                  <h5 class="text-white my-15">LUBANGO</h5>
                </v-card-title>
                <p class="text-white my-0 mt-n14 ml-4">
                  Zona industrial, ex oficina Ruber Hudson-Ford
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="bg-transparent bg-none" elevation="0">
              <v-card-title class="my-0">
                <h5 class="text-white text-uppercase">Pós venda</h5>
              </v-card-title>
              <v-card-text>
                <p class="text-white">
                  Serviços de manutenção
                  <br />
                  Acessórios
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-footer>
</template>
<script>
//import MenuFlutuanteVue from "../components/MenuFlutuante.vue";
export default {
  components: {},
  data: () => ({
    items: [
      { nome: "Home", link: "/" },
      { nome: "Modelos", link: "/jetur/modelos" },
      { nome: "Notícias", link: "/noticias" },
      { nome: "Pós venda", link: "/pos-venda" },
      { nome: "Sobre nós", link: "/sobre" },
      { nome: "TesteDrive", link: "/fazer-test-driver" },
    ],
    modelos: [
      { nome: "X90 Plus", link: "/jetur/modelo/1" },
      { nome: "X70 Plus", link: "/jetur/modelo/2" },
      { nome: "X70", link: "/jetur/modelo/3" },
    ],
  }),
};
</script>
<style scoped>
.footer {
  background: #1b1b1b;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
}

.link-rapido {
  color: #fff;
  display: block;
  line-height: 25px !important;
  font-size: 18px;
  width: 100%;
  font-weight: bold !important;
}

.head-title {
  color: #fbfbfb;
  font-weight: normal !important;
}

.div {
  width: 100%;
  background: #1b1b1b;
}

.text-footer {
  font-weight: normal !important;
  font-family: "Nunito" !important;
}

.i {
  margin-top: -20px !important;
}
</style>
