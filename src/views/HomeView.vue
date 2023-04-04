<template>
  <div>
    <br>
    <v-carousel
      cycle
      height="700"
      hide-delimiters
      show-arrows="hover"
      class="mb-0 mt-11 my-16"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        cover
      >
        <!--   <v-container
          class="mt-10 slide animate__heartBeat"
          width="200"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <h1>{{ item.title }}</h1>
          <h5>{{ item.description }}</h5>
        </v-container> -->
      </v-carousel-item>
    </v-carousel>
    <!-- HERO CARS -->
    <section class="container bg-grey-lighten-4">
      <v-container grid-list-xs>
        <v-card class="card-car" elevation="0">
          <div v-for="(carro, car) in dados_carro" :key="car">
            <v-card-title primary-title>
              <div>
                <h2 class="headline mb-0 text-uppercase animate__flash mt-15">
                  {{ carro.nome }} {{ carro.modelo }}
                </h2>
                <div>
                  <h5>{{ carro.slogan }}</h5>
                  <p class="t">
                    <router-link
                      :to="`/jetur/modelo/${carro.id}`"
                      class="text-black traco"
                      >ver mais
                      <span class="mx-4">
                        <v-icon>mdi-arrow-right</v-icon>
                      </span>
                    </router-link>
                  </p>
                </div>
              </div>
            </v-card-title>
            <v-card-text class="my-5 mt-5">
              <v-img
                :src="carro.capa"
                class="img-car-cover animate__heartBeat"
                cover
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
              </v-img>
            </v-card-text>
          </div>
          <v-card-actions class="acoes">
            <v-row justify="space-around">
              <v-col v-for="(icone, car) in icon_car" :key="car">
                <v-img
                  width="18vh"
                  @click="infoCarById(icone.id)"
                  height="50vh"
                  class="img-icon-car my-n1"
                  :src="icone.icon"
                  :alt="icone.nome"
                ></v-img>
                <v-card-title class="name-car">
                  <h5 class="text-black">{{ icone.nome }}</h5></v-card-title
                >
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-container>
    </section>
    <!-- SECTION DESTAQUES -->
    <section class="bg-white">
      <v-divider></v-divider>
      <v-container grid-list-lg>
        <v-card-title class="mb-10 mt-10 my-10 text-center align-center m-auto">
          <h1>Nossos Destaques Mais Recentes</h1>
        </v-card-title>
        <v-row>
          <v-col
            cols="4"
            v-for="(noticia, i) in noticias"
            :key="i"
            class="border-0"
          >
            <v-card
              elevation="10"
              rounded="0"
              class="w-100 bg-grey-lighten-4 border-0"
              data-aos="fade-up"
              :data-aos-duration="`${1000 * noticia.id}`"
            >
              <v-img
                class="align-end text-white border-0"
                height="38vh"
                :src="noticia.foto"
                cover
              >
              </v-img>

              <div class="pa-4 mt-3 my-3 text--grey-darken-4">
                <router-link
                  :to="`/noticia/${noticia.id}`"
                  class="text--grey-darken-4 link-noticia"
                >
                  {{ noticia.titulo }}
                </router-link>
              </div>

              <v-container class="noticia">
                <v-card-subtitle>
                  <v-icon>mdi-calendar-month</v-icon>
                  <span class="ml-3 text-uppercase data-noticia">{{
                    noticia.data
                  }}</span>
                </v-card-subtitle>
                <v-card-text
                  class="bg-grey-lighten-4 text-truncate noticia-texto"
                >
                  <p>
                    {{ noticia.texto }}
                  </p>
                  <p>
                    {{ noticia.texto }}
                  </p>
                </v-card-text>
                <div class="mb-3 text-error mx-3">
                  <span>
                    <router-link class="text-red" :to="`/noticia/${noticia.id}`"
                      >ver mais
                      <v-icon class="ml-2">mdi-arrow-right</v-icon></router-link
                    >
                  </span>
                </div>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import { onMounted } from "vue";
import AOS from "aos";
import axios from "axios";
//import TheNavbarVue from "@/layouts/TheNavbar.vue";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      dados_carro: "",
      idcar: "",
      noticias: "",
      items: [
        {
          src: "http://teste1.bcc.ao/gets/images/jetur/pagina_inicial/KV_pics/1.png",
          title: "X90 Plus",
          description: "ULTRA ESPAÇOSO, MOSTRANDO EXTREMO LUXO",
        },
        {
          src: "http://teste1.bcc.ao/gets/images/jetur/pagina_inicial/KV_pics/2.png",
          title: "X70 Plus",
          description: "UMA EXPRESSÃO DE ELEGÂNCIA",
        },
        {
          src: "http://teste1.bcc.ao/gets/images/jetur/pagina_inicial/KV_pics/3.png",
          title: "X70",
          description: "O Melhor e Prático carro para família angola   ",
        },
        /*  {
          src: "http://teste1.bcc.ao/gets/images/jetur/pagina_inicial/KV_pics/4.png",
          title: "",
          description: "",
        }, */
      ],
      icon_car: [
        {
          icon: "http://teste1.bcc.ao/gets/images/jetur/pagina_inicial/X90/JETOUR_X90_zilong_black_066.png",
          nome: "X90 PLUS",
          id: 1,
        },
        {
          icon: "http://teste1.bcc.ao/gets/images/jetur/pagina_inicial/X70Plus/PNG.png",
          nome: "X70 PLUS",
          id: 2,
        },
        {
          icon: "http://teste1.bcc.ao/gets/images/jetur/pagina_inicial/X70/X70_.png",
          nome: "X70",
          id: 3,
        },
      ],
    };
  },

  methods: {
    async infoCar() {
      await axios.get(`/api/database.json`).then((responsta) => {
        this.dados_carro = responsta.data["automoveis"].filter(
          (item) => item.id == 1
        );
      });
      return this.dados_carro;
    },

    async infoCarById(id) {
      await axios.get(`/api/database.json`).then((responsta) => {
        this.dados_carro = responsta.data["automoveis"].filter(
          (item) => item.id == id
        );
      });
      return this.dados_carro;
    },

    async getNoticias() {
      await axios.get(`/api/noticias.json`).then((resposta) => {
        this.noticias = resposta.data["noticias"];
      });
      return this.noticia;
    },
  },

  mounted() {
    document.title = "Jetour Angola";
    this.infoCar();
    this.getNoticias();
  },
};
onMounted(() => {
  AOS.init();
});
</script>

<style scoped>
.slide {
  padding: 20px;
  top: 0;
  left: 0;
}
.slide h1 {
  color: #1a1a1a;
  font-size: 50px;
  text-transform: uppercase;
  font-family: "Acto Medium";
  margin-top: 20px;
}
.slide h5 {
  color: #fafafa;
  font-size: 30px;
  text-transform: uppercase;
  margin: auto;
  word-wrap: break-word;
  width: 500px;
  margin-left: 0;
}

.card-car {
  background: transparent !important;
}
.card-car h1 {
  color: #171717;
  font-size: 45px;
  margin-bottom: 20px;
}
.card-car h5 {
  color: #444;
  font-size: 15px;
  margin-bottom: 20px;
  padding: 0;
  font-weight: bold;
  margin-top: 5px;
  text-transform: uppercase;
}
.card-car p {
  color: #000;
  margin-left: 10px;
}

.img-car-cover {
  max-width: 100%;
  width: 50% !important;
  object-fit: cover;
  object-position: center;
  margin: auto;
  margin-top: -50px;
}

.acoes {
  width: 500px !important;
  margin: auto;
  margin-top: -90px;
}
.acoes .img-icon-car {
  transition: 0.5s;
  background: transparent;
  max-width: 100%;
  height: 300px !important;
  object-fit: cover;
  object-position: center;
  margin: auto;
}
.acoes .img-icon-car:hover {
  transform: scale(1.8);
  transition: 0.5s;
  cursor: pointer;
}
.acoes .name-car {
  color: #000 !important;
  font-weight: bold !important;
  margin: auto;
  text-align: center;
  margin-top: -300px;
}
.acoes .name-car h5 {
  font-weight: bold !important;
  font-size: 18px;
  margin: auto;
  margin-top: 200px;
}

.link-noticia {
  color: #000 !important;
  text-transform: capitalize;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
}
.data-noticia {
  font-size: 10px !important;
  margin-bottom: 0;
  margin-top: -10px !important;
}

.noticia-texto {
  margin-top: -2px;
}
.noticia {
  margin-top: -20px !important;
}

.t {
  margin-left: -2px !important;
  margin-top: -20px !important;
}
.traco:hover {
  color: #f22 !important;
}
</style>
