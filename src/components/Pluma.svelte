<script lang="ts">
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

<img id="pluma" class={move} src="/assets/pluma.webp" alt="pluma" width="240px" loading="lazy" />

<svelte:window on:scroll={handleScroll} />
