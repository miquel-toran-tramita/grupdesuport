<script lang="ts">
  import Tarifas from './Tarifas.svelte'
  import Testimonials from './sections/Testimonials.svelte'
  import Faqs from '@/components/Faqs.svelte'
  import Logros from './sections/Logros.svelte'
  import Servicios from './sections/Servicios.svelte'
  import { onMount } from 'svelte'

  let move: string = 'animation-stand-by'

  const handleScroll = () => {
    const vh100 = window.innerHeight

    if (window.scrollY < vh100) move = 'animation-stand-by'
    if (window.scrollY > vh100 / 5) move = 'animation-one'
    if (window.scrollY > vh100 / 1.6) move = 'animation-two'
    if (window.scrollY > vh100) move = 'animation-three'
    if (window.scrollY > vh100 * 1.8) move = 'animation-four'
    if (window.scrollY > vh100 * 2.4) move = 'animation-five'
  }
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

    #pluma {
      transition: 1s ease;
      position: absolute;
      bottom: 15vh;
      z-index: 9;

      &.animation-stand-by {
        //animation: standBy 3s ease-in-out infinite; /* Animación */
      }

      &.animation-one {
        transition: 3s cubic-bezier(0.5, 0.4, 0.6, 1);
        transform: translateY(25vh) translateX(150%) rotateZ(-20deg);
      }

      &.animation-two {
        transition: 3s cubic-bezier(0.5, 0.4, 0.6, 1);
        transform: translateY(70vh) translateX(180%) rotateZ(-40deg);
      }

      &.animation-three {
        transition: 5s cubic-bezier(0.5, 0.4, 0.6, 1);
        transform: translateY(140vh) translateX(-200%) rotateZ(10deg);
      }

      &.animation-four {
        transition: 3s cubic-bezier(0.5, 0.4, 0.6, 1);
        transform: translateY(190vh) translateX(90%) rotateZ(-20deg);
      }

      &.animation-five {
        transition: 3s cubic-bezier(0.5, 0.4, 0.6, 1);
        transform: translateY(290vh) translateX(0%) rotateZ(0deg);
      }
    }
  }

  .front-text {
    position: relative;
    color: var(--colorPrimary);
    font-size: 16px;
    background-color: white;
    margin: auto;
    height: 60vh;
    margin-bottom: 50px;
    padding: 50px;

    .text {
      max-width: 700px;
      h2 {
        font-size: 28px;
        color: var(--colorPrimary);
      }

      p {
        padding: 8px 0;
      }

      .last-p {
        position: absolute;
        color: var(--colorText2);
        bottom: 30px;
      }
    }
  }

  /*p {
    padding: 10px 0;
    font-size: 16px;
    text-align: justify;
  }*/

  @keyframes standBy {
    0% {
      transform: translateY(0); /* Posición inicial */
    }
    50% {
      transform: translateY(-20px); /* Subir */
    }
    100% {
      transform: translateY(0); /* Volver a la posición inicial */
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
    <img id="pluma" class={move} src="/assets/pluma.png" alt="pluma" width="240px" />
  </div>
</div>

<div class="g-wrapper">
  <div class="front-text g-box">
    <div class="text">
      <p>Debería ser un <b>indicador de salud</b>, que te simplifique la toma de decisiones.</p>
      <p>Que te deje dormir por las noches sabiendo que las cuestiones legales están cubiertas.</p>

      <p>Que no te haga perder el tiempo, ni perder los papeles...</p>

      <p>Bueno, eso último ya no te volverá a pasar nunca más.</p>
      <br />
      <p>
        <span class="g-color">Somos una gestoría contable online</span>, que os ayudará a desmontar vuestra contabilidad para montarla de
        nuevo, sin trucos ni chapuzas.
      </p>

      <p>
        Podreis vaciar la oficina de archivadores, papeles innecesarios y convertirla en un espacio Zen en el que solamente hará falta tener
        ideas y llegar a acuerdos.
      </p>

      <p class="last-p">Si esto resuena contigo, no eres la única persona, <b>sigue leyendo.</b></p>
    </div>
  </div>
</div>
<Testimonials />

<Servicios />
<Tarifas />

<svelte:window on:scroll={handleScroll} />
