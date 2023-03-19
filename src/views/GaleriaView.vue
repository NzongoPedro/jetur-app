<template>
  <v-container grid-list-xs class="my-15">
    <br /><br /><br />
    <v-row>
      <v-col
        v-for="(foto, i) in galeria"
        :key="i"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src="foto.foto"
          :lazy-src="foto.foto"
          aspect-ratio="1"
          cover
          class="bg-grey-lighten-2 foto"
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "GaleriaView",
  data() {
    return {
      galeria: [
        {
          foto: "http://teste1.bcc.ao/gets/images/jetur/pagina_inicial/destaques/1.jpg",
        },
        {
          foto: "http://teste1.bcc.ao/gets/images/jetur/pagina_inicial/destaques/2.jpeg",
        },
        {
          foto: "http://teste1.bcc.ao/gets/images/jetur/pagina_inicial/destaques/3.jpg",
        },
        {
          foto: "http://teste1.bcc.ao/gets/images/jetur/pagina_inicial/KV_pics/1.jpg",
        },
        {
          foto: "http://teste1.bcc.ao/gets/images/jetur/pagina_inicial/KV_pics/2.jpg",
        },
        {
          foto: "http://teste1.bcc.ao/gets/images/jetur/pagina_inicial/KV_pics/3.jpg",
        },
      ],
    };
  },

  mounted() {
    document.title = "Galerias de Foto";
  },
};
</script>

<style scoped>
.foto {
  transition: 0.5s;
}
.foto:hover {
  transition: 0.5s;
  transform: scale(1.05);
}
</style>
