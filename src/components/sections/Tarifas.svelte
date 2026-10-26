<script lang="ts">
  import ContactFormTrigger from '@/components/ContactFormTrigger.svelte'
  import { useTranslations, languageList } from '@/i18n/ui'

  export let lang: string

  const t = useTranslations(lang as keyof typeof languageList)
</script>

<style lang="scss">
  .tarifas {
    padding: 100px 0;
    .g-mini-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .text {
        padding: 20px 0;
      }
    }
  }

  .logo {
    text-align: center;
    padding-bottom: 50px;

    .title {
      font-size: 30px;
    }

    .desc {
      color: var(--colorPrimary);
    }
  }

</style>

<div class="tarifas" id="contacto">
  <h2 class="g-title g-wrapper">{t('pricesTitle')}</h2>
  <div class="g-mini-wrapper">
    <div class="text">
      {@html t('pricesText')}
    </div>

    <ContactFormTrigger {lang} label={t('pricesCTA')} />
  </div>
</div>

<div class="logo">
  <div class="title">GRUP DE SUPORT SCC</div>
  <div class="desc">LA COMPTABILITAT LLEUGERA</div>
</div>
