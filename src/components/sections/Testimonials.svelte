<script lang="ts">
  import InfiniteLoop from '@/components/InfiniteLoop.svelte'
  import SliderX from '../SliderX.svelte'
  import Opinion from '../Opinion.svelte'

  const testimonials = [
    {
      title: 'Servicio fiable y personalizado',
      opinion:
        '<p>Soy cliente de Grup de Suport desde hace muchos años y siempre he valorado su servicio fiable y su experiencia. </p> <p>Me han ayudado mucho a gestionar mi contabilidad personal y empresarial, así como los asuntos relacionados con los impuestos. </p></p>Los recomendaría con total confianza a cualquiera que busque un servicio fiable y personalizado.</p>',
      name: 'Boris Venkov',
    },
    {
      title: 'Eficiencia garantizada',
      opinion: '¡Excelente servicio siempre de Gemma, súper servicial y confiable!',
      name: 'Simon Ankersen',
    },
  ]
</script>

<style lang="scss">
  @use 'src/sass/mixins.scss' as *;
  .testimonials {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 100vh;

    @include notDesktop {
      flex-direction: column;
      gap: 30px;
      padding: 50px 0;

      .title {
        font-size: 30px !important;
        text-align: center;
      }
    }

    .title {
      font-size: 80px;
      max-width: 500px;
    }

    .opinions {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }
</style>

<div class="testimonials g-wrapper">
  <!--<SliderX>
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
  </SliderX>-->

  <h3 class="title">Qué dicen los clientes que ya cuentan con nosotros...</h3>

  <div class="opinions">
    {#each testimonials as t}
      <Opinion text={t.opinion} name={t.name} />
    {/each}
  </div>
</div>
