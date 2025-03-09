<script lang="ts">
  import Opinion from '../Opinion.svelte'

  const testimonials = [
    {
      opinion:
        '<p>Soy cliente de Grup de Suport desde hace muchos años y siempre he valorado su servicio fiable y su experiencia. </p> <p>Me han ayudado mucho a gestionar mi contabilidad personal y empresarial, así como los asuntos relacionados con los impuestos. </p></p>Los recomendaría con total confianza a cualquiera que busque un servicio fiable y personalizado.</p>',
      name: 'Boris Venkov',
    },
    {
      opinion: '<p>¡Excelente servicio siempre de Gemma, súper servicial y confiable! </p>',
      name: 'Simon Ankersen',
    },
    {
      opinion:
        '<p>Tras más de 10 años contando con los servicios de Grup de Suport, puedo garantizar que es una gestoría extraordinaria. </p> <p>Cuenta con un equipo altamente cualificado, dedicado, serio,<br/> con mucha experiencia - <br/>y además es muy buena gente. </p> <p>Sus tarifas son muy razonables y el trato siempre ha sido un 10 tanto a nivel profesional como personal.</p>  <p>¡Recomiendo 100%!</p>',
      name: 'Charlotte',
    },
  ]
</script>

<style lang="scss">
  @use 'src/sass/mixins.scss' as *;
  .testimonials {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: start;
    padding: 70px 0;
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
      position: sticky;
      top: 60px;
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
  <h3 class="title">Qué dicen los clientes que ya cuentan con nosotros...</h3>

  <div class="opinions">
    {#each testimonials as t}
      <Opinion text={t.opinion} name={t.name} />
    {/each}
  </div>
</div>
