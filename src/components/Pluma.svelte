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
    if (window.scrollY > vh100 * 3.7) move = 'animation-seven'
    if (window.scrollY > vh100 * 4) move = 'animation-eight'
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
      $a1: 25vh;
      $a2: 400px;
      $a3: 83vh;
      $a4: 580px;
      $a5: 360px;
      $a6: 430px;
      $a7: 660px;
      $a8: 570px;

      &.animation-one {
        transition: 3s cubic-bezier(0.5, 0.4, 0.6, 1);
        transform: translateY($a1) translateX(180%) rotateZ(-20deg);
      }

      &.animation-two {
        transition: 3s cubic-bezier(0.5, 0.4, 0.6, 1);
        transform: translateY(calc($a1 + $a2)) translateX(180%) rotateZ(-40deg);
      }

      &.animation-three {
        transition: 5s cubic-bezier(0.5, 0.4, 0.6, 1);
        transform: translateY(calc($a1 + $a2 + $a3)) translateX(-230%) rotateZ(40deg);
      }

      &.animation-four {
        transition: 3s cubic-bezier(0.5, 0.4, 0.6, 1);
        transform: translateY(calc($a1 + $a2 + $a3 + $a4)) translateX(190%) rotateZ(-30deg); //initial + firsText + testimonals + servicesHeight/2
      }

      &.animation-five {
        transition: 3s cubic-bezier(0.5, 0.4, 0.6, 1);
        transform: translateY(calc($a1 + $a2 + $a3 + $a4 + $a5)) translateX(0%) rotateZ(0deg);
      }

      &.animation-six {
        transition: 3s cubic-bezier(0.5, 0.4, 0.6, 1);
        transform: translateY(calc($a1 + $a2 + $a3 + $a4 + $a5 + $a6)) translateX(0%) rotateZ(0deg);
      }

      &.animation-seven {
        transition: 3s cubic-bezier(0.5, 0.4, 0.6, 1);
        transform: translateY(calc($a1 + $a2 + $a3 + $a4 + $a5 + $a6 + $a7)) translateX(-200%) rotateZ(20deg);
      }

      &.animation-eight {
        transition: 3s cubic-bezier(0.5, 0.4, 0.6, 1);
        transform: translateY(calc($a1 + $a2 + $a3 + $a4 + $a5 + $a6 + $a7 + $a8)) translateX(0%) rotateZ(0deg);
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

<img id="pluma" class={move} src="/assets/pluma.webp" alt="pluma" width="250px" height="141px" loading="lazy" />

<svelte:window on:scroll={handleScroll} />
