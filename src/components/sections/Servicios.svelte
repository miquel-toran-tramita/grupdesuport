<script lang="ts">
  import Svg from '../Svg.svelte'

  interface IServicio {
    icon: string
    title: string
    description: string
  }

  const servicios: IServicio[] = [
    {
      icon: 'handshake',
      title: 'Con confianza',
      description:
        'No queremos ocultar nada, porque nos gusta pensar que empezamos a vivir en una nueva época en la que ya nadie podrá esconder sus tropelías.',
    },
    { icon: 'gear', title: 'Con innovación', description: 'Tendréis suficiente con un ordenador. [...]' },
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
  .servicios-container {
    width: 100%;
    padding: 25px;
    margin-top: 75px;
    margin-bottom: 75px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;

    .servicio {
      border-radius: 16px;
      background-color: white;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .title {
        font-size: 20px;
        font-weight: bolder;
        margin-top: 10px;
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
  <div class="main">
    <span>Explora nuestros servicios</span>
    <button class="more">Ver más...</button>
  </div>
  {#each servicios as servicio}
    <div class="servicio">
      <Svg name={servicio.icon} fill="var(--colorPrimary)" height="30" width="30" />
      <div class="title">{servicio.title}</div>
      <div class="description">{servicio.description}</div>
    </div>
  {/each}
</div>
