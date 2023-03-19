<template>
  <div>
    <v-carousel
      cycle
      height="700"
      hide-delimiters
      show-arrows="hover"
      class="mb-0"
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
    <v-container>
      <v-row>
        <v-col>
          <v-card
            class="text-center align-center centered my-15 mb-15 bg-transparent bg-none"
            elevation="0"
            data-aos="fade-up"
          >
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">SOBRE JETOUR</h3>
              </div>
            </v-card-title>
            <v-card-text>
              <h3 class="my-2">
                A Jetour faz parte de um grupo automóvel globalizado baseado na
                China com mais de 20 anos de formidável experiência em
                engenharia automóvel. A associação orgulha-se de possuir uma
                série de marcas próprias e de joint-venture com as suas filiais
                independentes centradas em marcas particulares de segmentos de
                veículos no mercado, tais como a JETOUR. O grupo deixou a sua
                marca no negócio em termos de evolução do aspecto tecnológico
                das suas marcas.
              </h3>
              <br />
              <div class="text-center centered">
                <h5>
                  <router-link to="/sobre" class="text-error"
                    >ver mais</router-link
                  >
                </h5>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <section class="container bg-grey-lighten-4">
      <v-container grid-list-xs>
        <v-card class="card-car" elevation="0">
          <div v-for="(carro, car) in dados_carro" :key="car">
            <v-card-title primary-title>
              <div>
                <h1 class="headline mb-0 text-uppercase animate__flash">
                  {{ carro.nome }} {{ carro.modelo }}
                </h1>
                <div>
                  <h5>{{ carro.slogan }}</h5>
                  <p>
                    <router-link
                      :to="`/jetur/modelo/${carro.id}`"
                      class="text-black"
                      >ver mais</router-link
                    >
                    <span class="mx-4">
                      <v-icon>mdi-arrow-right</v-icon>
                    </span>
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
          <v-card-actions
            class="acoes"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-anchor-placement="bottom-bottom"
          >
            <v-row justify="space-around">
              <v-col v-for="(icone, car) in icon_car" :key="car">
                <v-img
                  width="15vh"
                  @click="infoCarById(icone.id)"
                  height="30vh"
                  class="img-icon-car"
                  :src="icone.icon"
                  :alt="icone.nome"
                ></v-img>
                <v-card-subtitle class="name-car">
                  <h5>{{ icone.nome }}</h5></v-card-subtitle
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
            lg="4"
            xl="4"
            col="4"
            v-for="(noticia, i) in noticias"
            :key="i"
          >
            <v-card
              elevation="0"
              class="mx-auto bg-grey-lighten-4"
              data-aos="fade-up"
              :data-aos-duration="`${1000 * noticia.id}`"
            >
              <v-img
                class="align-end text-white"
                height="200"
                :src="noticia.foto"
                cover
              >
              </v-img>

              <v-card-title class="pt-4 mt-3 my-3 text--grey-darken-4">
                <router-link
                  :to="`/noticia/${noticia.id}`"
                  class="text--grey-darken-4 link-noticia"
                >
                  {{ noticia.titulo }}
                </router-link>
              </v-card-title>

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
                      >ver mais</router-link
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

export default {
  name: "HomeView",
  data() {
    return {
      dados_carro: "",
      idcar: "",
      noticias: "",
      items: [
        {
          src: "http://teste1.bcc.ao/gets/images/jetur/pagina_inicial/KV_pics/1.jpg",
          title: "X90 Plus",
          description: "ULTRA ESPAÇOSO, MOSTRANDO EXTREMO LUXO",
        },
        {
          src: "http://teste1.bcc.ao/gets/images/jetur/pagina_inicial/KV_pics/2.jpg",
          title: "X70 Plus",
          description: "UMA EXPRESSÃO DE ELEGÂNCIA",
        },
        {
          src: "http://teste1.bcc.ao/gets/images/jetur/pagina_inicial/KV_pics/3.jpg",
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
    document.title = "Jetour";
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
  width: 95% !important;
  object-fit: cover;
  object-position: center;
  margin: auto;
}

.acoes {
  width: 500px !important;
  margin: auto;
  margin-top: 50px;
}
.acoes .img-icon-car {
  transition: 0.5s;
  background: transparent;
  max-width: 100%;
  height: 120px !important;
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
  font-size: 20px;
  text-align: center;
}

.link-noticia {
  color: #000 !important;
  text-transform: capitalize;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
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
</style>
