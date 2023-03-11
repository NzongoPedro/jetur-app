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
        <v-container
          class="mt-10 slide animate__heartBeat"
          width="200"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <h1>{{ item.title }}</h1>
          <h5>{{ item.description }}</h5>
        </v-container>
      </v-carousel-item>
    </v-carousel>
    <!-- HERO CARS -->
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
                  <p>ver mais</p>
                </div>
              </div>
            </v-card-title>
            <v-card-text class="my-5 mt-5">
              <v-img
                :src="carro.capa"
                class="img-car-cover animate__heartBeat"
                cover
                data-aos="fade-right"
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
              <v-col>
                <v-avatar
                  v-for="(icone, car) in icon_car"
                  :key="car"
                  size="150"
                  @click="infoCarById(icone.id)"
                >
                  <v-img
                    class="img-icon-car"
                    :src="icone.icon"
                    :alt="icone.nome"
                  ></v-img>
                </v-avatar>
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
                  :to="`/noticias/${noticia.id}`"
                  class="text--grey-darken-4 link-noticia"
                >
                  {{ noticia.titulo }}
                </router-link>
              </v-card-title>

              <v-card-subtitle>
                <v-icon>mdi-calendar-month</v-icon>
                <span class="ml-3 text-uppercase">{{ noticia.data }}</span>
              </v-card-subtitle>

              <v-container grid-list-xs>
                <v-card-text class="bg-grey-lighten-4 text-truncate">
                  <p>
                    {{ noticia.texto }}
                  </p>
                  <p>
                    {{ noticia.texto }}
                  </p>
                </v-card-text>
              </v-container>

              <v-card-actions>
                <v-btn color="orange"> Share </v-btn>

                <v-btn color="orange"> Explore </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { onMounted } from "vue";
import AOS from "aos";
import axios from "axios";

export default defineComponent({
  name: "HomeView",
  /*  components: {
    App,
  }, */
  data() {
    return {
      dados_carro: "",
      idcar: "",
      noticias: "",
      items: [
        {
          src: "/images/slides/1.jpg",
          title: "X90 Plus",
          description: "ULTRA ESPAÇOSO, MOSTRANDO EXTREMO LUXO",
        },
        {
          src: "/images/slides/2.jpg",
          title: "X70 Plus",
          description: "UMA EXPRESSÃO DE ELEGÂNCIA",
        },
        {
          src: "/images/slides/3.jpg",
          title: "X70",
          description: "O Melhor e Prático carro para família angola   ",
        },
        /*  {
          src: "/images/slides/4.png",
          title: "",
          description: "",
        }, */
      ],

      icon_car: [
        {
          icon: "/images/jetur/x90Plus/icon-preto.png",
          nome: "X90 PLUS",
          id: 1,
        },
        {
          icon: "/images/jetur/x70Plus/icon-vermelho.png",
          nome: "X70 PLUS",
          id: 2,
        },
        {
          icon: "/images/jetur/x70/icon-azul.png",
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
    document.title = "Jetur";
    this.infoCar();
    this.getNoticias();
  },
});
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
  font-family: "Shojumaru", cursive;
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
  width: 50vh !important;
  object-fit: cover;
  object-position: center;
  margin: auto;
  transform: scale(1.5);
}

.acoes {
  width: 500px !important;
  margin: auto;
  margin-top: 50px;
}
.acoes .img-icon-car {
  transition: 0.5s;
  border-radius: 0 !important;
  background: transparent;
}
.acoes .img-icon-car:hover {
  transform: scale(1.8);
  transition: 0.5s;
  object-fit: cover;
  object-position: top;
  border: 2px solid #444;
  cursor: pointer;
}

.link-noticia {
  color: #000 !important;
  text-transform: capitalize;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
}
</style>
