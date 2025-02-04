<script lang="ts">
  import Modal from '@/components/Modal.svelte'
  import Button from '@/components/Button.svelte'
  import ContactForm from '@/components/ContactForm.svelte'
  import { useTranslations, languageList } from '@/i18n/ui'

  export let closed: boolean = true

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

  .modal-content {
    padding: 20px;
  }
</style>

<div class="tarifas" id="contacto">
  <h2 class="g-title g-wrapper">{t('pricesTitle')}</h2>
  <div class="g-mini-wrapper">
    <div class="text">
      {@html t('pricesText')}
    </div>

    <Button click={() => (closed = false)}>{t('pricesCTA')}</Button>
  </div>
</div>

<Modal bind:closed>
  <div slot="modal-header">{t('contactFormTitle')}</div>

  <div slot="modal-content" class="modal-content">
    <ContactForm {lang} />
  </div>
</Modal>
