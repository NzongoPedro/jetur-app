<template>
  <!-- SECTION DESTAQUES -->
  <section class="bg-white my-10">
    <v-divider></v-divider>
    <v-container grid-list-lg>
      <v-card-title class="mb-10 mt-10 my-10 text-center align-center m-auto">
        <h1>Notícias</h1>
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
</template>

<script>
import { onMounted } from "vue";
import AOS from "aos";
import axios from "axios";
export default {
  name: "NoticiasView",
  data() {
    return {
      noticias: "",
    };
  },
  methods: {
    async getNoticias() {
      await axios.get(`/api/noticias.json`).then((resposta) => {
        this.noticias = resposta.data["noticias"];
      });
      return this.noticia;
    },
  },

  mounted() {
    document.title = "Notícias ";
    this.getNoticias();
  },
};

onMounted(() => {
  AOS.init();
});
</script>

<style scoped>
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
</style>
