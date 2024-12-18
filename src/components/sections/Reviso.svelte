<script lang="ts">
</script>

<style lang="scss">
  .reviso-container {
    background-color: white;
    width: 100%;
    padding: 75px;
    display: flex;
    justify-content: center;

    .reviso {
      display: flex;
      justify-content: space-between;

      img {
        height: 400px;
      }

      .info {
        display: flex;
        flex-direction: column;
        gap: 15px;
        height: 100%;
        max-width: 500px;
        position: relative;

        .title {
          font-size: 25px;
          font-weight: bolder;
          color: var(--colorPrimary);
        }

        .description {
          text-align: justify;
        }

        .motivo {
          display: flex;
          gap: 10px;

          :global(svg) {
            flex-shrink: 0;
          }
        }

        .more {
          border: 1px solid var(--colorPrimary);
          border-radius: 50px;
          padding: 5px 15px;
          transition: 0.3s ease;
          width: fit-content;
          font-size: 15px;
          color: var(--colorPrimary);
          position: absolute;
          bottom: 0;
          right: 0;

          &:hover {
            transition: 0.3s ease;
            background-color: var(--colorPrimary);
            color: var(--colorText3);
          }
        }
      }
    }
  }
</style>

<div class="reviso-container">
  <div class="reviso g-wrapper">
    <img src="public/assets/remote.svg" alt="" loading="lazy" />
    <div class="info">
      <div class="title">¿Por qué <a href="http://www.reviso.com" target="_">Reviso</a>?</div>

      <div class="description">
        Cambiar la font de "Reviso" y poner el underline para dar a entender que es un enlace. <br /> <br />Puede que el botón y el título
        cambien de contenido según si es mas importante mostrar una cosa u otra en la portada.
      </div>

      <button class="more">¿Qué es Reviso?</button>
    </div>
  </div>
</div>
