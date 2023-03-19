<template>
  <!-- SECTION DESTAQUES -->
  <section class="bg-white my-10">
    <v-divider></v-divider>
    <v-container grid-list-lg>
      <v-card-title class="mb-10 mt-10 my-10 text-center align-center m-auto">
        <h1>Notícias</h1>
      </v-card-title>
      <v-row>
        <v-col lg="4" xl="4" col="4" v-for="(noticia, i) in noticias" :key="i">
          <v-card
            elevation="0"
            class="mx-auto bg-grey-lighten-4"
            data-aos="fade-up"
            :data-aos-duration="`${1000 * noticia.id}`"
          >
            <v-img
              class="align-end text-white"
              height="100%"
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
