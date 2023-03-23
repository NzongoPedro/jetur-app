<template>
  <div class="menu-flutuante fixed">
    <img
      v-for="(icon, i) in menu_flutuante"
      :key="i"
      class="icons"
      :src="icon.foto"
      alt="alt"
    />
    <br />
  </div>
</template>

<script>
export default {
  name: "MenuFlutuante",

  data: () => ({
    menu_flutuante: [
      { foto: "http://teste1.bcc.ao/gets/images/menu-flutuante/car_h.png" },
      { foto: "http://teste1.bcc.ao/gets/images/menu-flutuante/call_h.png" },
      { foto: "http://teste1.bcc.ao/gets/images/menu-flutuante/what_h.png" },
    ],
  }),

  mounted() {
    document.title = "Jetour Angola";
  },
};
</script>

<style lang="css" scoped>
.menu-flutuante {
  position: fixed !important;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 50px;
  top: 50px; /* ajuste essa altura de acordo com sua necessidade */
  left: 90%; /* ajuste a posição horizontal de acordo com sua necessidade */
  height: 50px; /* ajuste a altura do elemento de acordo com sua necessidade */

}
.menu-flutuante img {
  max-width: 100%;
  width: 40px;
  height: 40px;
  display: block;
  margin-bottom: 10px;
}
</style>
