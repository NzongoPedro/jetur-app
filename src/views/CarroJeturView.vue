<template>
  <div>
    <br /><br /><br /><br /><br />
    <setction class="my-5 mt-5">
      <v-container grid-list-xs>
        <div class="v-card-title mb-5" data-aos="fade-up">
          <h3>Modelos de Jetur</h3>
        </div>
        <v-row>
          <v-col
            cols="4"
            lg="4"
            sm="12"
            v-for="(carro, i) in dados_carro"
            :key="i"
            data-aos="fade-right"
          >
            <v-card class="h-100 hover">
              <v-card-media height="300px" class="p-5">
                <v-img sizes="150" :src="carro.capa" class="my-3 p-5"></v-img>
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0 text-capitalize">
                    <router-link
                      :to="`/jetur/modelo/${carro.id}`"
                      class="text-black"
                    >
                      {{ carro.nome }} {{ carro.modelo }}
                    </router-link>
                  </h3>
                </div>
              </v-card-title>
              <v-card-text>
                <p class="p-5 text-uppercase">{{ carro.description }}</p>
              </v-card-text>
              <div class="center text-center centered mb-5">
                <v-btn
                  variant="flat"
                  color="error"
                  prepend-icon="mdi-file-pdf-box"
                >
                  BAIXAR CATALÓGO
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </setction>
    <br /><br />
  </div>
</template>

<script>
import { onMounted } from "vue";
import AOS from "aos";
import axios from "axios";

export default {
  name: "CarroJeturView",
  data() {
    return {
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

      dados_carro: "",
      idcar: "",
    };
  },

  methods: {
    async infoCar() {
      await axios.get(`/api/database.json`).then((responsta) => {
        this.dados_carro = responsta.data["automoveis"].filter(
          (item) => item.id != 0
        );
      });

      return this.dados_carro;
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
