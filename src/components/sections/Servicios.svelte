<script lang="ts">
  import Svg from '@/components/Svg.svelte'
  import { useTranslations, languageList } from '@/i18n/ui'

  interface ICard {
    icon: string
    title: string
    description?: string
  }

  export let lang: string

  const t = useTranslations(lang as keyof typeof languageList)

  const servicios: ICard[] = [
    { icon: 'money', title: t('servicesA') },
    { icon: 'gear', title: t('servicesB') },
    { icon: 'handshake', title: t('servicesC') },
    { icon: 'balance', title: t('servicesD') },
    { icon: 'receipt', title: t('servicesE') },
  ]

  const valores: ICard[] = [
    {
      icon: 'person',
      title: t('howWeWorkATitle'),
      description: t('howWeWorkADescription'),
    },
    {
      icon: 'gear',
      title: t('howWeWorkBTitle'),
      description: t('howWeWorkBDescription'),
    },
    {
      icon: 'leaf',
      title: t('howWeWorkCTitle'),
      description: t('howWeWorkCDescription'),
    },
    {
      icon: 'diversity',
      title: t('howWeWorkDTitle'),
      description: t('howWeWorkDDescription'),
    },

    {
      icon: 'balance',
      title: t('howWeWorkETitle'),
      description: t('howWeWorkEDescription'),
    },
  ]
</script>

<style lang="scss">
  @use 'src/sass/mixins.scss' as *;
  .servicios-container,
  .valores-container {
    width: 100%;
    padding-top: 50px;
    margin-bottom: 20px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;

    @include notDesktop {
      grid-template-columns: 1fr;
    }

    .title-section {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-size: 40px;
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

        .title-section {
          font-size: 30px;
          min-height: 100px;
          text-align: center;
        }
      }
    }
  }

  .valores-container {
    @include desktop {
      margin-top: 300px;
      .g-box:nth-child(2) {
        order: -1;
      }
    }
  }
</style>

<div class="servicios-container g-wrapper" id="servicios">
  <div class="main g-box">
    <p class="title-section">{t('servicesTitle')}</p>
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
    <p class="title-section">{t('howWeWorkTitle')}</p>
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
