<script lang="ts">
  import Button from './Button.svelte'
</script>

<style lang="scss">
  .tarifas {
    padding: 100px 0;
    .g-mini-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .text {
        padding: 20px 0;
      }
    }
  }
</style>

<div class="tarifas">
  <h2 class="g-title g-wrapper">Nos gusta el trato de tú a tú y <br /> empatizar con tu situación como si fuera la nuestra</h2>
  <div class="g-mini-wrapper">
    <div class="text">
      <p>
        Antes que poner 3 tarifas cerradas y que elijas la del medio,<br /> preferimos tener una primera toma de contacto y adaptarnos a tu situación.
      </p>

      <p>
        Hablaremos sobre cuestiones como: <br /> si tu proyecto está en perdidas, si tiene menos de un año de vida o qué servicios necesitas.
      </p>

      <p>Si quieres empezar hoy mismo, <b>haz click aquí abajo.</b></p>
    </div>

    <Button>Concertar una cita</Button>
  </div>
</div>
