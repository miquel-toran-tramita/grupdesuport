<script lang="ts">
  import Svg from '../Svg.svelte'

  interface IServicio {
    icon: string
    title: string
    description: string
  }

  const servicios: IServicio[] = [
    {
      icon: 'money',
      title: 'Facturación y pagos',
      description: '',
    },
    { icon: 'gear', title: 'Configuración y Asesoría Tecnológica', description: '' },
    {
      icon: 'handshake',
      title: 'Conciliaciones y Registros Contables',
      description: '',
    },
    {
      icon: 'balance',
      title: 'Presentaciones y Obligaciones Legales',
      description: '',
    },
    {
      icon: 'receipt',
      title: 'Informes y Estados Financieros',
      description: '',
    },
  ]
</script>

<style lang="scss">
  .servicios-container {
    width: 100%;
    margin-top: 75px;
    margin-bottom: 75px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;

    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-size: 50px;
      color: white;
    }

    .servicio {
      background-color: white;
      padding: 20px;
      display: flex;
      min-height: 230px;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap: 0px;

      .title {
        font-size: 18px;
        text-align: center;
      }

      .description {
        font-size: 14px;
      }
    }

    .main {
      background-color: var(--colorPrimary);
      border-radius: 16px;
      padding: 20px;
      grid-column: span 3;
      color: var(--colorText3);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-family: var(--fontPrimary);
      font-weight: 300;

      .more {
        border: 1px solid var(--colorText3);
        border-radius: 50px;
        padding: 5px 15px;
        transition: 0.3s ease;
        width: fit-content;
        font-size: 15px;

        &:hover {
          transition: 0.3s ease;
          background-color: var(--colorText3);
          color: var(--colorPrimary);
        }
      }
    }
  }
</style>

<div class="servicios-container g-wrapper">
  <div class="main g-box">
    <h2>¿Qué hacemos exactamente?</h2>
  </div>
  {#each servicios as servicio}
    <div class="servicio g-box">
      <Svg name={servicio.icon} fill="var(--colorPrimary)" height="60" width="60" />
      <div class="title">{servicio.title}</div>
      <!--<div class="description">{servicio.description}</div>-->
    </div>
  {/each}
</div>
