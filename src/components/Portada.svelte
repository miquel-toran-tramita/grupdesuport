<script lang="ts">
  import Tarifas from './Tarifas.svelte'
  import Testimonials from './sections/Testimonials.svelte'
  import Faqs from '@/components/Faqs.svelte'
  import Logros from './sections/Logros.svelte'
  import Servicios from './sections/Servicios.svelte'

  let firstMove: boolean = false

  const handleScroll = () => (firstMove = window.scrollY > 120)
</script>

<style lang="scss">
  @use 'src/sass/mixins.scss' as *;

  .hero {
    position: relative;
    height: 100vh;
    background-color: var(--colorPrimary);
    background: linear-gradient(180deg, var(--colorPrimary) 0%, rgba(255, 255, 255, 0) 100%);

    .g-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 30px;
      height: 100%;

      h1 {
        color: var(--colorText3);
        font-size: 70px;
        text-align: center;
        text-wrap: balance;
        font-family: 'Jost';
        @include notDesktop {
          font-size: 40px;
        }
      }

      h2 {
        color: var(--colorText3);
        font-size: 25px;
        padding-bottom: 30px;
      }
    }
  }

  .front-text {
    color: var(--colorPrimary);
    font-size: 16px;
    background-color: white;
    margin: auto;
    height: 60vh;

    .text {
      max-width: 700px;
      h2 {
        font-size: 28px;
        color: var(--colorPrimary);
      }

      p {
        padding: 10px 0;
      }
    }
  }

  #pluma {
    transition: 1s ease;
    animation: float 4s ease-in-out infinite; /* Animación */

    &.firstMove {
      animation: firstMove 1s ease-in-out forwards; /* Animación */
    }
  }

  /*p {
    padding: 10px 0;
    font-size: 16px;
    text-align: justify;
  }*/

  @keyframes float {
    0% {
      transform: translateY(0); /* Posición inicial */
    }
    50% {
      transform: translateY(-10px); /* Subir */
    }
    100% {
      transform: translateY(0); /* Volver a la posición inicial */
    }
  }

  @keyframes firstMove {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(300px);
    }
  }
</style>

<div class="hero">
  <div class="g-wrapper">
    <!--
      Eres increíble llevando tu negocio, pero un desastre con las cuentas. Nosotros no.
      Después de todo lo que has pasado, no metas la pata con la contabilidad.
      A nadie le gusta la contabilidad (a nosotros si, te explicamos el porqué)
      Si no quieres contar, cuenta con nostros. 
      No te distraigas con la contabilidad. Delega. Olvídate.
      Tu negocio es tu pasión; la contabilidad es la nuestra.
      Haz lo que amas, nosotros nos encargamos de los números.
      ¿Qué sientes al enfrentarte a la contabilidad?
    -->
    <h1 class="title">Si tu contabilidad no es ligera, algo estás haciendo mal</h1>
    <img id="pluma" class:firstMove src="/assets/pluma.png" alt="pluma" width="240px" />
  </div>
</div>

<div class="g-wrapper">
  <div class="front-text g-box">
    <div class="text">
      <p>Debería ser un indicador de salud, que te simplifique la toma de decisiones.</p>
      <p>Que te deje dormir por las noches sabiendo que todas las cuestiones legales están cubiertas.</p>

      <p>Que no te haga perder el tiempo, ni perder los papeles...</p>

      <p>Bueno, eso último ya no te volverá a pasar nunca más.</p>
      <p>
        Somos una gestoría contable online, que os ayudará a desmontar vuestra contabilidad para montarla de nuevo, sin trucos ni chapuzas.
      </p>

      <p>
        Podrás vaciar la oficina de archivadores y papeles innecesarios y convertirla en un espacio Zen en el que solamente hará falta tener
        ideas, llegar a acuerdos y tomar decisiones.
      </p>

      <p>Si esto resuena contigo, no eres la única persona, sigue leyendo.</p>
    </div>
  </div>
</div>
<Testimonials />

<Servicios />
<Tarifas />

<svelte:window on:scroll={handleScroll} />
