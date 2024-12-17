<script lang="ts">
  import Tarifas from './Tarifas.svelte'
  import Testimonials from './sections/Testimonials.svelte'
  import Servicios from './sections/Servicios.svelte'
  import { useTranslations, languageList } from '@/i18n/ui'

  export let lang: string

  const t = useTranslations(lang as keyof typeof languageList)

  let move: string = 'animation-stand-by'

  const handleScroll = () => {
    const vh100 = window.innerHeight

    if (window.scrollY < vh100) move = 'animation-stand-by'
    if (window.scrollY > vh100 / 5) move = 'animation-one'
    if (window.scrollY > vh100 / 1.2) move = 'animation-two'
    if (window.scrollY > vh100 * 1.2) move = 'animation-three'
    if (window.scrollY > vh100 * 1.8) move = 'animation-four'
    if (window.scrollY > vh100 * 2.4) move = 'animation-five'
    if (window.scrollY > vh100 * 2.8) move = 'animation-six'
    if (window.scrollY > vh100 * 3.2) move = 'animation-seven'
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
      height: 100vh;

      .title {
        color: var(--colorText3);
        font-size: 60px;
        text-align: center;
        text-wrap: balance;
        font-family: 'Jost';

        @include notDesktop {
          font-size: 40px;
        }
      }

      h1 {
        color: var(--colorText3);
        font-family: 'Poppins';
        font-size: 24px;
        padding-bottom: 30px;
      }
    }

    #pluma {
      transition: 1s ease;
      position: absolute;
      top: 70vh;
      z-index: 6;

      &.animation-stand-by {
        animation: standBy 3s ease-in-out infinite; /* Animación */
      }

      @include desktop {
        &.animation-one {
          transition: 3s cubic-bezier(0.5, 0.4, 0.6, 1);
          transform: translateY(25vh) translateX(180%) rotateZ(-20deg);
        }

        &.animation-two {
          transition: 3s cubic-bezier(0.5, 0.4, 0.6, 1);
          transform: translateY(calc(25vh + 400px)) translateX(180%) rotateZ(-40deg);
        }

        &.animation-three {
          transition: 5s cubic-bezier(0.5, 0.4, 0.6, 1);
          transform: translateY(calc(25vh + 400px + 50vh)) translateX(-250%) rotateZ(20deg);
        }

        &.animation-four {
          transition: 3s cubic-bezier(0.5, 0.4, 0.6, 1);
          transform: translateY(calc(25vh + 400px + 70vh + 280px)) translateX(100%) rotateZ(-20deg); //initial + firsText + testimonals + servicesHeight/2
        }

        &.animation-five {
          transition: 3s cubic-bezier(0.5, 0.4, 0.6, 1);
          transform: translateY(calc(25vh + 400px + 70vh + 280px + 440px)) translateX(0%) rotateZ(0deg);
        }

        &.animation-six {
          transition: 3s cubic-bezier(0.5, 0.4, 0.6, 1);
          transform: translateY(calc(25vh + 400px + 70vh + 280px + 440px + 350px)) translateX(-70%) rotateZ(30deg);
        }

        &.animation-seven {
          transition: 3s cubic-bezier(0.5, 0.4, 0.6, 1);
          transform: translateY(calc(25vh + 400px + 70vh + 280px + 440px + 350px + 920px)) translateX(0%) rotateZ(0deg);
        }
      }
    }
  }

  .front-text {
    position: relative;
    color: var(--colorPrimary);
    font-size: 16px;
    background-color: white;
    margin: auto;
    height: 100%;
    margin-bottom: 50px;
    padding: 50px;

    @include notDesktop {
      padding: 30px;
    }

    .text {
      max-width: 800px;
      h2 {
        font-size: 28px;
        color: var(--colorPrimary);
      }

      p {
        padding: 8px 0;
      }

      .last-p {
        margin-top: 50px;
        color: var(--colorText2);
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
      margin-top: 0;
    }
    50% {
      margin-top: -20px;
    }
    100% {
      margin-top: 0;
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
    <h2 class="title">{t('pageTitle')}</h2>
    <h1>{t('pageSubtitle')}</h1>
    <div style="height: 100px;"></div>
    <img id="pluma" class={move} src="/assets/pluma.png" alt="pluma" width="240px" />
  </div>
</div>

<div class="g-wrapper">
  <div class="front-text g-box">
    <div class="text">
      <p>
        Muchas veces nos enfocamos en <span class="g-color"> ganar más dinero,</span> pero es igual o más importante
        <span class="g-color">perder menos.</span>
      </p>

      <p>Y sin hablar de dinero,</p>

      <p><b>¿Que pasa si tienes un problema con Hacienda por no hacer las cosas bien?</b></p>
      <br />
      <p>
        Una contabilidad mediocre, te entrega números a final de año, y nada más, <span class="g-color"
          >una contabilidad bien gestionada
        </span> es una herramienta para optimizar lo que ganas para perder menos, especialmente en un país donde los laberintos administrativos
        y burocráticos son cada vez más complicados.
      </p>

      <p>
        <b>Si estabas enfocando bien el problema,</b> tus energías deben estar en ganar más, pero solamente cuando delegar la parte contable
        y fiscal en buenas manos.
      </p>

      <p class="last-text">Si este resuena contigo, ya hay personas que los han solucionado. <b> Sigue leyendo.</b></p>
    </div>
  </div>
</div>
<Testimonials />

<Servicios />
<Tarifas />

<svelte:window on:scroll={handleScroll} />
