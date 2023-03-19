<template>
  <div class="bg-white">
    <br /><br />
    <v-container grid-list-xs class="my-15">
      <v-card elevation="0" class="mb-10 text-uppercase" data-aos="fade-up">
        <div class="my-10 m-auto centered align-center text-center">
          <v-img
            class="m-auto logo"
            src="http://teste1.bcc.ao/gets/images/jetur-logo-preto.png"
          ></v-img>
        </div>
        <v-card-title primary-title>
          <div
            class="pa-5 ma-5 text-uppercase centered text-center align-center"
          >
            <h1 class="mb-0"><b>Sobre NÓS</b></h1>
          </div>
        </v-card-title>
        <v-card-text>
          <p class="text-uppercase pa-5 text-justify text-black texto-sobre">
            <b>
              A Jetour faz parte de um grupo automóvel globalizado baseado na
              China com mais de 20 anos de formidável experiência em engenharia
              automóvel. A associação orgulha-se de possuir uma série de marcas
              próprias e de joint-venture com as suas filiais independentes
              centradas em marcas particulares de segmentos de veículos no
              mercado, tais como a JETOUR. O grupo deixou a sua marca no negócio
              em termos de evolução do aspecto tecnológico das suas marcas.

              <br /><br />
              A Jetour é o mais recente produto do seu compromisso de duas
              décadas para construir uma marca que se irá destacar na indústria
              automóvel com a intenção de diversificar o seu negócio para se
              tornar uma marca de classe mundial, concentrando-se na criação dos
              melhores modelos de SUV chineses.

              <br /><br />
              É uma marca notável cujo nome deriva das palavras ''Jet" + "Tour"
              que significa conveniente + viagem, traduzidas na língua mandarim.
              JETOUR reflecte a visão do grupo de fabricar os melhores modelos
              de SUV que proporcionam uma viagem conveniente para os
              passageiros. Especificamente concebido para ser elegante, único,
              inteligente, espaçoso, e multifuncional, está agora pronto para
              ser visto e conduzido. JETOUR é criado para aqueles que desejam
              tecnologia moderna, conforto, aventura, e luxo acessível.

              <br /><br />
              A JETOUR compromete-se a criar os melhores carros de luxo chineses
              cobrindo SUV/MPV/EV a um preço acessível.
            </b>
          </p>
        </v-card-text>
      </v-card>

      <v-card data-aos="fade-up" elevation="0">
        <div class="my-10 m-auto centered align-center text-center">
          <v-img
            class="m-auto logo"
            src="http://teste1.bcc.ao/gets/images/chinangol-logo.png"
          ></v-img>
        </div>
        <v-card-title primary-title>
          <div class="pa-5 ma-5">
            <h1 class="headline mb-0 centered text-center">
              <b>SOBRE A CHINANGOL</b>
            </h1>
          </div>
        </v-card-title>
        <v-card-text>
          <p class="pa-5 text-justify texto-sobre">
            <b
              >Originário de África, Chinangol tem vindo a operar com sucesso em
              África há quase 30 anos e tem-se dedicado ao comércio e
              investimento em mais de 20 países africanos. A LDA, uma das
              maiores empresas privadas financiadas pela Chinangol, tem uma
              vasta experiência operacional e de investimento e desempenho de
              projectos no continente africano, especializada na importação e
              exportação de materiais de construção, máquinas e equipamentos e
              veículos, transporte marítimo, desenvolvimento imobiliário e
              construção, e investimento e desenvolvimento mineiro. Durante
              muitos anos o grupo tem sido o importador número um de cimento em
              Angola (vendendo a sua própria marca de cimento África No.1), o
              importador de veículos pesados e o maior transportador de carga
              seca a granel na rota China-Sudoeste de África; desenvolveu e
              construiu as moradias mobiladas mais sofisticadas e mobilou
              apartamentos altos em Luanda, a capital de Angola, bem como
              armazéns de cimento, lojas 4S e alojamentos para empregados.
            </b>
          </p>
        </v-card-text>
      </v-card>
      <v-row>
        <v-col cols="4">
          <div class="my-15 d-flex justify-center align-content-center align-center">

          </div>
          <v-img
            size="500"
            src="http://teste1.bcc.ao/gets/images/icone-de-missao.jpg"
          ></v-img>
        </v-col>
        <v-col lg="8" cols="8">
          <v-card data-aos="fade-up" elevation="0">
            <v-card-title primary-title>
              <div class="pa-5 ma-5">
                <h1 class="headline mb-0">
                  <b> NOSSA MISSÃO</b>
                </h1>
              </div>
            </v-card-title>

            <v-card-text>
              <p class="pa-5 text-justify texto-sobre">
                <b>
                  Ao entrar no mercado angolano em 2019,a Jetour tinha apenas
                  uma missão - fornecer aos consumidores angolanos a gama mais
                  completa de SUVS económicos luxuosos e de alto desempenho.
                  Apos 3anos，mais de 4.000 veículos vendidos e varias vidas
                  impactadas positivamente. A Jetour continua profundamente
                  comprometida com nossa missão inicial. O que vislumbramos para
                  o futuro do Jetour e estar profundamente enraizado na cultura
                  angolanas vislumbramos um mundo onde todos possam desfrutar da
                  bela experiência de dirigiram modelo Jetour.
                </b>
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { onMounted } from "vue";
import AOS from "aos";

export default {
  name: "SobreView",
  data() {
    return {};
  },

  mounted() {
    document.title = "Sobre a JETOUR";
  },
};

onMounted(() => {
  AOS.init();
});
</script>

<style scoped>
.texto-sobre {
  font-size: 20px;
  color: #000;
  line-height: 30px;
  text-transform: uppercase;
}

.logo {
  font-size: 520px !important;
  width: 50vh;
  margin: auto;
}
</style>
