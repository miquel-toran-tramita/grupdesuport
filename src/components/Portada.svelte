<script lang="ts">
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
        padding: 30px 0;
        text-align: center;
        text-wrap: balance;
        font-family: 'Jost';
        text-shadow: 0px 0px 5px var(--colorPrimary);

        @include notDesktop {
          font-size: 40px;
        }
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

  p {
    padding: 10px 0;
    font-size: 16px;
    text-align: justify;
  }

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
    <h1 class="title">¿A que pensáis que la contabilidad es un palo?</h1>
    <img id="pluma" class:firstMove src="/assets/pluma.png" alt="pluma" width="240px" />
  </div>
</div>

<Logros />

<Servicios />

<div class="g-mini-wrapper front-text g-box">
  <p>Pues a nosotros nos gusta y os vamos a convencer de que es una herramienta divertida y útil para vuestro proyecto.</p>

  <p>
    Hay quien la entiende como un instrumento de control y de represión de la actividad de vuestro negocio. Hay quien piensa que solamente
    sirve para pagar impuestos…
  </p>

  <p>
    <span class="g-color"> Os podemos ayudar a desmontar vuestra contabilidad para montarla de nuevo </span>
    y convertirla en una pieza esencial de vuestro proyecto.
  </p>

  <p>
    Os ayudaremos a ordenar cajones y archivadores. Bien… en realidad, no los vais a necesitar. Los podréis vaciar y convertir vuestra
    oficina en un espacio Zen en el que solamente hará falta tener ideas, llegar a acuerdos y tomar decisiones.
  </p>
</div>

<Faqs />

<svelte:window on:scroll={handleScroll} />
