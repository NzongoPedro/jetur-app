<template>
  <v-container grid-list-xs class="my-15">
    <br /><br /><br />
    <v-row>
      <v-col
        cols="4"
        lg="4"
        xl="4"
        v-for="(catalogo, i) in catalogos"
        :key="i"
        class=""
        data-aos="fade-up"
      >
        <v-img
          :src="catalogo.foto"
          :lazy-src="catalogo.foto"
          aspect-ratio="1"
          cover
          width="100%"
          height="80vh"
          class="bg-grey-lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <div class="my-3 centered text-center">
          <a
            :href="catalogo.link"
            :download="catalogo.nome_catalogo"
            target="_blank"
          >
            <v-btn
              variant="flat"
              color="error"
              prepend-icon="mdi-file-pdf-box"
              width="100%"
            >
              BAIXAR CATALÓGO
            </v-btn>
          </a>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { onMounted } from "vue";
import AOS from "aos";
export default {
  name: "CatalogosView",
  data() {
    return {
      catalogos: [
        {
          link: "http://teste1.bcc.ao/gets/catalogos/X70_Impressão_A4_Papel_Couchê.pdf",
          foto: "http://teste1.bcc.ao/gets/images/jetur/catalogo_capa/X70_Impressão_A4_Papel_Couchê-1.jpg",
        },
        {
          link: "http://teste1.bcc.ao/gets/catalogos/X70_Plus_Impressão_A4_Papel_Couchê.pdf",
          foto: "http://teste1.bcc.ao/gets/images/jetur/catalogo_capa/X70_Plus_Impressão_A4_Papel_Couchê-1.jpg",
        },
        {
          link: "http://teste1.bcc.ao/gets/catalogos/X90_Plus_Impressão_A4_Papel_Couchê.pdf",
          foto: "http://teste1.bcc.ao/gets/images/jetur/catalogo_capa/X90_Plus_Impressão_A4_Papel_Couchê-1.jpg",
        },
      ],
    };
  },
};

onMounted(() => {
  AOS.init();
});
</script>
