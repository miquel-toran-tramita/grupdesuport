<script lang="ts">
  import InfiniteLoop from '@/components/InfiniteLoop.svelte'

  const testimonials = [
    {
      title: '¡Increíble crecimiento!',
      opinion: 'Gracias a este servicio, mi negocio ha crecido más rápido que mi apellido.',
      name: 'Rosa Melano',
      business: 'Floristería "El Ramo Ideal"',
    },
    {
      title: 'Éxito garantizado',
      opinion: 'Nunca pensé que podría alcanzar el éxito con tanta facilidad. ¡Recomendado al 100%!',
      name: 'Aitor Tilla',
      business: 'Empresa de Fletes y Mudanzas',
    },
    {
      title: 'Servicio impresionante',
      opinion: 'Mejor que cualquier otro servicio que he probado. ¡Impresionante!',
      name: 'Elsa Pato',
      business: 'Academia de Natación "La Laguna"',
    },
    {
      title: 'Cambio total',
      opinion: 'Mi vida y mi negocio han dado un giro de 180 grados. No podría estar más feliz.',
      name: 'Benito Camela',
      business: 'Fábrica de Ventiladores Industriales',
    },
    {
      title: 'La pizza perfecta',
      opinion: 'Gracias a este servicio, ahora mis pizzas siempre llegan a tiempo.',
      name: 'Pepe Roni',
      business: 'Pizzería "El Sabor del Barrio"',
    },
  ]
</script>

<style lang="scss">
  .testimonials {
    position: relative;
    min-height: 70vh;

    .testimonial {
      padding: 20px;

      .title {
        color: var(--colorPrimary);
        font-size: 25px;
      }

      .opinion {
        text-align: justify;
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
  <InfiniteLoop>
    {#each testimonials as testimonial}
      <div class="testimonial">
        <h3 class="title">{testimonial.title}</h3>
        <p class="opinion">
          {@html testimonial.opinion}
        </p>

        <div class="person">
          <span class="name">{testimonial.name}</span>
          <span class="business">{testimonial.business}</span>
        </div>
      </div>
    {/each}
  </InfiniteLoop>
</div>
