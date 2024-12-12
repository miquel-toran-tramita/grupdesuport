<script lang="ts">
  import Reviso from './sections/Reviso.svelte'
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
    width: 90%;
    margin: auto;
    height: 60vh;
    display: flex;
    align-items: center;

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
    <h1 class="title">¿Qué sientes al enfrentarte a la contabilidad?</h1>
    <img id="pluma" class:firstMove src="/assets/pluma.png" alt="pluma" width="240px" />
  </div>
</div>

<div class="front-text g-box">
  <div class="g-wrapper">
    <h2 class="title"></h2>
    <div class="text">
      <p>Si, llevamos más de 30 años dedicandonos a ello y unos pocos más de forma totalmente online.</p>
      <p></p>
    </div>
  </div>
</div>

<Servicios />

<Logros />

<Reviso />

<Faqs />

<svelte:window on:scroll={handleScroll} />
