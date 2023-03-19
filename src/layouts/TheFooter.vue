<template>
  <v-footer class="footer" data-aos="fade-up">
    <div class="w-100 align-center div">
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
                  class="link-rapido"
                  >{{ item.nome }}</router-link
                >
              </v-card-text>
              <v-card-text class="my-0">
                <v-card-title>
                  <h3 class="text-white">Contanctos</h3>
                </v-card-title>
                <span class="text-white">
                  <v-icon class="mr-3">mdi-phone</v-icon>
                  949 836 673
                </span>
                <br />
                <span class="text-white">
                  <v-icon class="mr-3">mdi-email</v-icon>
                  administrativo@jeturangola.com
                </span>
                <br />
                <span class="text-white">
                  <v-icon class="mr-3">mdi-email</v-icon>
                  markting@jetur.com
                </span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="bg-transparent bg-none" elevation="0">
              <v-card-title class="my-0">
                <h5 class="text-white">Luanda</h5>
              </v-card-title>
              <v-card-text>
                <p class="text-white text-justify">
                  Viana, Av Fidel de Castro Km 26 Kilamba, Rua imperial Santana,
                  Zona NE Kilamba, Kilamba Kiaxi.
                  <br />
                  Chamavo Rua Alameda Manuel Vandunem Maculusso, Nº 428.
                  <br />
                  Benfica Rua direita do Patriota.
                </p>
              </v-card-text>

              <v-card-title class="my-6">
                <h5 class="text-white">BENGUELA</h5>
              </v-card-title>
              <v-card-text>
                <p class="text-white">
                  Zona comercial Do 28, Rua Marecal Carmona.
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="bg-transparent bg-none" elevation="0">
              <v-card-title class="my-0">
                <h5 class="text-white">Modelos</h5>
              </v-card-title>
              <v-card-text>
                <router-link to="/jetur/modelo/1" class="link-rapido"
                  >X70</router-link
                >
                <router-link to="/jetur/modelo/2" class="link-rapido"
                  >X70 Plus</router-link
                >
                <router-link to="/jetur/modelo/3" class="link-rapido"
                  >X90 Plus</router-link
                >
              </v-card-text>
              <v-card-title class="my-15">
                <h5 class="text-white my-0">LUBANGO</h5>
              </v-card-title>
              <v-card-text>
                <p class="text-white my-0">
                  Zona industrial, ex oficina Ruber Hudson-Ford
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="bg-transparent bg-none" elevation="0">
              <v-card-title class="my-0">
                <h5 class="text-white">Pós venda</h5>
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
export default {
  data: () => ({
    items: [
      { nome: "Home", link: "/" },
      { nome: "Modelos", link: "/jetur/modelos" },
      { nome: "Notícias", link: "/noticias" },
      { nome: "Pós venda", link: "/pos-venda" },
      { nome: "TesteDrive", link: "/test-drive" },
    ],
  }),
};
</script>
<style scoped>
.footer {
  background: #1a1a1a;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.link-rapido {
  color: #fff;
  display: block;
  line-height: 25px !important;
  font-size: 18px;
  font-weight: normal !important;
}

.head-title {
  color: #fbfbfb;
  font-weight: normal !important;
}

.div {
  background: rgb(26, 26, 26);
  background: linear-gradient(
    90deg,
    rgba(26, 26, 26, 0.1) 10%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(27, 27, 27, 0.3) 90%
  );
}
</style>
