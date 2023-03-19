<template>
  <!-- SECTION DESTAQUES -->
  <section class="bg-white my-10">
    <v-divider></v-divider>
    <br /><br /><br />
    <v-container grid-list-lg>
      <v-row>
        <v-col cols="5">
          <v-img
            size="500"
            src="http://teste1.bcc.ao/gets/images/jetur/Noticias/teste.jpg"
          ></v-img>
        </v-col>
        <div></div>
        <v-col cols="7">
          <v-form>
            <v-container>
              <div primary-title class="mb-10">
                <h1 class="text-uppercase mb-5">MARCAR TESTE DRIVE</h1>
              </div>
              <v-row>
                <v-col cols="12" sm="12">
                  <div class="mt-5">
                    <h3 class="mb-5 text-uppercase">1.1 Escolha um modelo</h3>
                  </div>
                  <v-text-field
                    label="SELECIONE UM MODELO"
                    variant="outlined"
                    dense
                    lg
                    elevatio="0"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12">
                  <div class="mt-5">
                    <h3 class="mb-5 text-uppercase">
                      2. A sua informação pessoal
                    </h3>
                  </div>
                  <v-text-field
                    label="NOME"
                    variant="outlined"
                    dense
                    lg
                    elevatio="0"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12">
                  <v-text-field
                    label="NÚMERO DE TELEFONE"
                    variant="outlined"
                    dense
                    lg
                    elevatio="0"
                    prepend-inner-icon="mdi-phone"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12">
                  <v-text-field
                    label="E-MAIL"
                    variant="outlined"
                    dense
                    lg
                    elevatio="0"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12">
                  <v-text-field
                    label="DATA DA MARCAÇAO"
                    variant="outlined"
                    dense
                    lg
                    elevatio="0"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <div class="">
              <v-checkbox label="Conconrdo com Políticas e Privacidade">
              </v-checkbox>
            </div>

            <div class="my-8 fill-height ml-4">
              <v-btn
                size="large"
                variant="flat"
                color="error"
                rounded="0"
                type="submit"
                >SUBMETER</v-btn
              >
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
//import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { onMounted } from "vue";
import AOS from "aos";

export default {
  /*  components: { VueDatePicker }, */
  name: "TestDriveView",
  data() {
    return {
      date: "2018-03-02",
    };
  },

  methods: {
    allowedDates: (val) => parseInt(val.split("-")[2], 10) % 2 === 0,
  },

  mounted() {
    document.title = "Fazer test drive";
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
