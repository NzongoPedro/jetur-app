<template>
  <!-- SECTION DESTAQUES -->
  <section class="bg-white my-10">
    <v-divider></v-divider>
    <br /><br /><br />
    <v-container grid-list-lg>
      <v-row>
        <v-col cols="7" v-for="(noticia, i) in noticias" :key="i">
          <v-card
            elevation="0"
            class="mx-auto bg-white"
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
              <!--  <router-link
                :to="`/noticia/${noticia.id}`"
                class="text--grey-darken-4 link-noticia"
              >
                {{ noticia.titulo }}
              </router-link> -->
              <h5 class="text-uppercase data-noticia">
                <v-icon>mdi-calendar-month</v-icon>
                <span class="mx-5"> {{ noticia.data }}</span>
              </h5>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12">
                  <v-text-field
                    label="SEARCH"
                    append-inner-icon="mdi-magnify"
                    variant="outlined"
                    dense
                    lg
                    elevatio="0"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <v-card elevation="0">
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-10">Notícias</h3>
              </div>
            </v-card-title>
            <v-card-text>
              <v-list lines="three">
                <v-list-item
                  v-for="(item, i) in titulos"
                  :key="i"
                  class="titulos text-truncate"
                >
                  <a :href="`/noticia/${item.id}`" class="text-black"
                    >{{ item.titulo }}
                  </a>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container grid-list-xs>
      <v-col v-for="(noticia, i) in noticias" :key="i">
        <v-card elevation="0">
          <v-card-title primary-title>
            <div>
              <h1 class="headline mb-3 text-uppercase text-black">
                <b>{{ noticia.titulo }}</b>
              </h1>
            </div>
          </v-card-title>
          <v-card-text>
            <v-container class="noticia">
              <v-card-text class="text-truncate noticia-texto">
                <p>
                  {{ noticia.texto }}
                </p>
                <p>
                  {{ noticia.texto }}
                </p>
              </v-card-text>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-container>
  </section>
</template>

<script>
import { onMounted } from "vue";
import AOS from "aos";
import axios from "axios";
export default {
  name: "NoticiaView",
  data() {
    return {
      noticias: "",
      idNoticia: "",
      titulos: "",
    };
  },
  methods: {
    async getNoticias() {
      if (this.$route.params.id) {
        this.idNoticia = this.$route.params.id;
        await axios.get(`/api/noticias.json`).then((resposta) => {
          this.noticias = resposta.data["noticias"].filter(
            (item) => item.id == this.idNoticia
          );
        });
      }
      return this.noticia;
    },
    async getTitulo() {
      await axios.get(`/api/noticias.json`).then((resposta) => {
        this.titulos = resposta.data["noticias"];
      });

      return this.titulos;
    },
  },

  mounted() {
    document.title = "Notícias ";
    this.getTitulo();
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

.noticia-texto p {
  padding: 10px;
  font-size: 20px;
  font-family: "Acto Medium" !important;
  font-weight: normal;
  margin-top: 10px;
  color: #444;
}
.noticia {
  margin-top: -20px !important;
}

.titulos {
  font-size: 20px;
  border-top: 1px solid #444;
}
</style>
