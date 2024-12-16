<script lang="ts">
  import Svg from '../Svg.svelte'

  interface ICard {
    icon: string
    title: string
    description?: string
  }

  const servicios: ICard[] = [
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

  const valores: ICard[] = [
    {
      icon: 'person',
      title: 'Con confianza',
      description:
        'No queremos ocultar nada, porque nos gusta pensar que empezamos a vivir en una nueva época en la que ya nadie podrá esconder sus tropelías.',
    },
    {
      icon: 'gear',
      title: 'Con innovación',
      description: 'La contabilidad y los papeles son cosa del pasado.',
    },
    {
      icon: 'leaf',
      title: 'Con sostenibilidad',
      description:
        'No solamente ecológica. Queremos y podemos medir el impacto de nuestra actividad y también la de vuestro negocio si así nos lo solicitáis.',
    },
    {
      icon: 'diversity',
      title: 'Con solidaridad',
      description:
        'Porqué creemos que los proyectos colectivos o individuales de las personas emprendedoras pueden aportar tanto a la sociedad como lo hacen los subsidios del Estado.',
    },

    {
      icon: 'balance',
      title: 'Con justicia',
      description:
        'Internamente garantizando un trato equitativo con todos los miembros de nuestra organización y externamente procurando por mantener unos precios justos y una provechosa colaboración con nuestros clientes.',
    },
  ]
</script>

<style lang="scss">
  @use 'src/sass/mixins.scss' as *;
  .servicios-container,
  .valores-container {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;

    @include notDesktop {
      grid-template-columns: 1fr;
    }

    h3 {
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

    .valor {
      padding: 20px;
      display: flex;
      min-height: 230px;
      flex-direction: column;

      gap: 10px;

      .titles {
        display: flex;
        align-items: center;
        gap: 10px;

        .title {
          font-size: 18px;
          text-align: left;
          font-weight: bold;
        }
      }

      .description {
        padding-top: 10px;
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

      @include notDesktop {
        grid-column: 1;

        h3 {
          font-size: 30px;
          min-height: 100px;
          text-align: center;
        }
      }
    }
  }

  .valores-container {
    @include desktop {
      .g-box:nth-child(2) {
        order: -1;
      }
    }
  }
</style>

<div class="servicios-container g-wrapper">
  <div class="main g-box">
    <h3>¿Qué hacemos exactamente?</h3>
  </div>
  {#each servicios as servicio}
    <div class="servicio g-box">
      <Svg name={servicio.icon} fill="var(--colorPrimary)" height="60" width="60" />
      <div class="title">{servicio.title}</div>
      <!--<div class="description">{servicio.description}</div>-->
    </div>
  {/each}
</div>

<div class="valores-container g-wrapper">
  <div class="main g-box">
    <h3>¿Cómo trabajamos?</h3>
  </div>
  {#each valores as valor}
    <div class="valor g-box">
      <div class="titles">
        <Svg name={valor.icon} fill="var(--colorPrimary)" height="40" width="40" />
        <div class="title">{valor.title}</div>
      </div>
      <div class="description">{valor.description}</div>
    </div>
  {/each}
</div>
