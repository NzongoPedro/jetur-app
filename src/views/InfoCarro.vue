<template>
  <div>
    <div class="w-100" data-aos="fade-in">
      <v-img
        v-for="(carro, i) in dados_carro"
        :key="i"
        width="100%"
        height="100vh"
        cover
        class="img-car-cover"
        :src="carro.capa_2"
      >
        <v-container grid-list-xs class="my-10">
          <div class="my-10 slide" justify-start>
            <h1 class="text-white">{{ carro.nome }} {{ carro.modelo }}</h1>
            <!--     <h5>{{ carro.visao_geral[0].capa }}</h5> -->
            <h5>{{ carro.description }}</h5>
          </div>
        </v-container>
      </v-img>
    </div>
    <!-- tabs -->
    <v-card rounded="0" bg-color="primary" class="p-10">
      <div bg-color="primary" class="w-100 bg-primary">
        <v-container grid-list-xs>
          <v-tabs v-model="tab" bg-color="primary" class="p-12">
            <v-tab value="tab-1" color="error">
              <span class="text-white"> VISÃO GERAL</span>
            </v-tab>
            <v-tab value="tab-2" color="error">
              <span class="text-white">DESEMPENHO</span>
            </v-tab>
            <v-tab value="tab-3" color="error">
              <span class="text-white">EXTERIOR</span>
            </v-tab>
            <v-tab value="tab-4" color="error">
              <span class="text-white">INTRIOR</span>
            </v-tab>
            <v-tab value="tab-5" color="error">
              <span class="text-white">TECNOLOGIA</span>
            </v-tab>
            <v-tab value="tab-6" color="error">
              <span class="text-white">EXPERIÊNCIA</span>
            </v-tab>
          </v-tabs>
        </v-container>
      </div>
      <v-card-text>
        <v-container grid-list-xs>
          <v-window v-model="tab">
            <div v-for="(detalhe, i) in dados_carro" :key="i">
              <v-window-item v-for="num in 6" :key="num" :value="`tab-${num}`">
                <div v-if="num == 1">
                  <div v-if="!cor_carro">
                    <v-img :src="`${detalhe.visao_geral[0].capa}`"> </v-img>
                  </div>
                  <div v-else>
                    <v-img :src="cor_carro" class="capa-colorida"> </v-img>
                  </div>

                  <div class="my-5 text-center centered m-auto">
                    <v-avatar
                      v-for="(cor, i) in dados_carro[0].cores"
                      :key="i"
                      size="60"
                      elevation="5"
                      class="cores"
                      :class="`${cor.fundo} p-1  mx-2`"
                      @click="getColorCar(cor.link)"
                    >
                      <v-tooltip activator="parent" location="top">{{
                        cor.nome
                      }}</v-tooltip>
                    </v-avatar>
                  </div>
                </div>
              </v-window-item>
            </div>
          </v-window>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { onMounted } from "vue";
import AOS from "aos";
import axios from "axios";

export default {
  name: "InfoCarro",
  data() {
    return {
      cores: [
        {
          nome: "preto",
          fundo: "bg-black",
          link: "http://teste1.bcc.ao/gets/images/jetur/X90Plus/Color/JETOUR_X90_zilong_black_013.png",
        },
        {
          nome: "cinzento",
          fundo: "bg-grey-lighten-2",
          link: "http://teste1.bcc.ao/gets/images/jetur/X90Plus/Color/JETOUR_X90_zilong_grey_013.png",
        },
        {
          nome: "violeta",
          fundo: "bg-pink-darken-4",
          link: "http://teste1.bcc.ao/gets/images/jetur/X90Plus/Color/JETOUR_X90_zilong_violet_013.png",
        },
        {
          nome: "braco",
          fundo: "bg-white",
          link: "http://teste1.bcc.ao/gets/images/jetur/X90Plus/Color/JETOUR_X90_zilong_white_013.png",
        },
        {
          nome: "azul",
          fundo: "bg-light-blue-darken-4",
          link: "http://teste1.bcc.ao/gets/images/jetur/X90Plus/Color/JETOUR_X90PLUS_008-PNG.png",
        },
      ],
      dados_carro: "",
      idcar: "",
      link_cor: "",
      cor_carro: "",
      tab: null,
    };
  },

  methods: {
    async infoCar() {
      if (this.$route.params.id) {
        this.idcar = this.$route.params.id;
        await axios.get(`/api/database.json`).then((responsta) => {
          this.dados_carro = responsta.data["automoveis"].filter(
            (item) => item.id == this.idcar
          );
        });
      }
      this.link_cor =
        this.dados_carro[0].cores[(this.idcar = this.$route.params.id - 1)];
      console.log(this.link_cor);
      return this.dados_carro;
    },
    async getColorCar(color) {
      this.idcar = this.$route.params.id;
      await axios.get(`/api/database.json`).then((responsta) => {
        this.dados_carro = responsta.data["automoveis"].filter(
          (item) => item.id == this.idcar
        );
      });
      this.cor_carro = color;
      this.link_cor =
        this.dados_carro[0].cores[(this.idcar = this.$route.params.id - 1)];
    },
  },

  mounted() {
    document.title = "Modelos Jetur";

    this.infoCar();
  },
};
onMounted(() => {
  AOS.init();
});
</script>

<style scoped>
.slide {
  top: 0;
  left: 0;
  float: left !important;
  margin-left: 0 !important;
  width: 100% !important;
}
.slide h1 {
  color: #1a1a1a;
  font-size: 50px;
  text-transform: uppercase;
  font-family: "Acto Medium";
  margin-top: 10px;
  margin-left: 0 !important;
}
.slide h5 {
  color: #fbfbfb;
  font-size: 30px;
  text-transform: uppercase;
  margin: auto;
  word-wrap: break-word;
  width: 500px;
  margin-left: 0 !important;
}

.link-tab {
  border-bottom: #f22 2px solid;
}

.cores {
  border: 3px solid #ddd;
}
.cores:hover {
  cursor: pointer;
}
</style>
