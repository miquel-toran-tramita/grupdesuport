<script lang="ts">
  import InfiniteLoop from '@/components/InfiniteLoop.svelte'
  import SliderX from '../SliderX.svelte'

  const testimonials = [
    {
      title: '¡Una tranquilidad absoluta!',
      opinion:
        'Gracias a esta gestoría, puedo centrarme en hacer crecer mi negocio mientras ellos se encargan de toda la parte fiscal y contable.',
      name: 'Rosa Pérez',
      business: 'Floristería "El Ramo Ideal"',
    },
    {
      title: 'Eficiencia garantizada',
      opinion: 'Nunca pensé que cumplir con Hacienda y optimizar mis finanzas podría ser tan sencillo. ¡Totalmente recomendados!',
      name: 'Aitor Gutiérrez',
      business: 'Empresa de Fletes y Mudanzas',
    },
    {
      title: 'Un servicio impecable',
      opinion: 'Su asesoramiento contable y fiscal es mejor que cualquier otro servicio que he probado. ¡De 10!',
      name: 'Elsa Montes',
      business: 'Academia de Natación "La Laguna"',
    },
    {
      title: 'Un cambio radical',
      opinion:
        'Desde que confío en esta gestoría, mi empresa está más organizada y mis números mejor gestionados. No puedo estar más satisfecho.',
      name: 'Benito Hernández',
      business: 'Fábrica de Ventiladores Industriales',
    },
    {
      title: '¡Sin preocupaciones!',
      opinion:
        'Gracias a esta gestoría, ahora mis obligaciones fiscales están siempre al día, y puedo dedicarme a lo que realmente importa: mis clientes.',
      name: 'Pepe Roni',
      business: 'Pizzería "El Sabor del Barrio"',
    },
  ]
</script>

<style lang="scss">
  .testimonials {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 70vh;

    .testimonial {
      height: 100%;
      padding: 20px;
      max-width: 300px;

      .title {
        color: var(--colorPrimary);
        font-size: 25px;
      }

      .person {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-top: 30px;

        .name,
        .business {
          font-size: 14px;
        }

        .name {
          color: var(--colorPrimary);
        }
        color: var(--colorText2);
      }
    }
  }
</style>

<div class="testimonials">
  <SliderX>
    {#each testimonials as testimonial}
      <div class="testimonial">
        <span class="title">{testimonial.title}</span>
        <p class="opinion">
          {@html testimonial.opinion}
        </p>

        <div class="person">
          <span class="name">{testimonial.name}</span>
          <span class="business">{testimonial.business}</span>
        </div>
      </div>
    {/each}
  </SliderX>
</div>
