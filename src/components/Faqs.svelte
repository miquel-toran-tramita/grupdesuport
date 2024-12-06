<script lang="ts">
  import Svg from '@/components/Svg.svelte'
  import type { ITitleContent } from '@/interfaces/ITitleContent'
  export let faqs: ITitleContent[] = [
    {
      title: '¿Qué servicios ofrece la gestoría?',
      content:
        'Ofrecemos servicios de contabilidad, gestión fiscal, elaboración de nóminas, asesoramiento financiero y presentación de impuestos para empresas y autónomos.',
      icon: 'services',
    },
    {
      title: '¿Trabajan con autónomos y pequeñas empresas?',
      content:
        'Sí, nos especializamos en brindar apoyo a autónomos, startups y pequeñas empresas, adaptándonos a sus necesidades específicas.',
      icon: 'business',
    },
    {
      title: '¿Pueden ayudar con la declaración de la renta?',
      content:
        'Por supuesto, gestionamos la declaración de la renta y nos aseguramos de que cumplas con todas las obligaciones fiscales mientras maximizamos tus deducciones.',
      icon: 'tax',
    },
    {
      title: '¿Cómo se puede contactar con ustedes?',
      content:
        'Puedes contactarnos por correo electrónico, teléfono o a través del formulario de nuestra página web. También ofrecemos reuniones presenciales o virtuales bajo cita previa.',
      icon: 'contact',
    },
    {
      title: '¿Cuál es el coste de sus servicios?',
      content:
        'Los costos dependen del tipo de servicio y la complejidad de las tareas. Ofrecemos paquetes personalizados para ajustarnos a tu presupuesto y necesidades.',
      icon: 'pricing',
    },
    {
      title: '¿Qué información necesitan para empezar a trabajar conmigo?',
      content:
        'Necesitamos tu información fiscal básica, documentos contables y cualquier detalle relevante sobre tus ingresos y gastos. Te guiaremos en el proceso para que sea sencillo.',
      icon: 'documents',
    },
    {
      title: '¿Ofrecen servicios de auditoría?',
      content:
        'Sí, contamos con expertos en auditoría que pueden ayudarte a evaluar la salud financiera de tu negocio y garantizar el cumplimiento normativo.',
      icon: 'audit',
    },
    {
      title: '¿Pueden ayudarme a iniciar mi negocio?',
      content:
        'Sí, ofrecemos asesoramiento para la creación de empresas, desde la elección de la forma jurídica hasta los trámites de constitución y alta en Hacienda y la Seguridad Social.',
      icon: 'startup',
    },
    {
      title: '¿Qué software utilizan para la contabilidad?',
      content:
        'Trabajamos con software líder en el mercado que garantiza seguridad, precisión y facilidad para compartir datos con nuestros clientes.',
      icon: 'software',
    },
    {
      title: '¿Qué diferencia a esta gestoría de otras?',
      content:
        'Nuestra atención personalizada, amplia experiencia y enfoque en soluciones adaptadas a cada cliente nos hacen destacar en el sector.',
      icon: 'difference',
    },
  ]

  let current: number = 0
</script>

<style lang="scss">
  @use 'src/sass/mixins.scss' as *;
  .faqs {
    padding-bottom: 30px;
    .faq {
      transition: 0.3s ease;
      padding: 10px 0;

      &.active {
        .faq__answer {
          max-height: 200px;
          opacity: 1;
        }
      }

      &__question {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: var(--fontPrimary);
        user-select: none;
        font-size: 18px;
        padding: 10px 0;
        width: 100%;
        gap: 10px;

        @include notDesktop {
          font-size: 16px;
        }

        h3,
        :global(svg) {
          transition: 0.3s ease;
        }

        h3 {
          text-align: left;
        }

        :global(svg) {
          flex-shrink: 0;
        }

        &:hover {
          h3 {
            color: var(--colorPrimary);
          }

          :global(svg) {
            fill: var(--colorPrimary);
          }
        }
      }

      &__answer {
        transition: 0.5s ease;
        color: var(--colorText2);
        overflow: hidden;
        height: 100%;
        max-height: 0;
        opacity: 0;

        font-size: 16px;

        @include notDesktop {
          font-size: 14px;
        }
      }
    }
  }
</style>

<h2 class="g-title">Preguntas frecuentes</h2>

<div class="faqs g-mini-wrapper g-box">
  {#each faqs as faq, i}
    <div class="faq" class:active={current === i}>
      <button class="faq__question" on:click={() => (current = i)}>
        <h3>{faq.title}</h3>
        <Svg name="arrow" fill="var(--colorBorder)" />
      </button>
      <p class="faq__answer">{faq.content}</p>
    </div>
  {/each}
</div>
