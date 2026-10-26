<script lang="ts">
  import Button from '@/components/Button.svelte'
  import ContactForm from '@/components/ContactForm.svelte'
  import Modal from '@/components/Modal.svelte'
  import { languageList, useTranslations } from '@/i18n/ui'

  export let lang: string
  export let label: string
  export let customClass: string = ''

  let closed = true

  const t = useTranslations(lang as keyof typeof languageList)
</script>

<style lang="scss">
  .modal-content {
    padding: 20px;
  }
</style>

<Button customClass={customClass} click={() => (closed = false)}>{label}</Button>

<Modal bind:closed>
  <div slot="modal-header">{t('contactFormTitle')}</div>

  <div slot="modal-content" class="modal-content">
    <ContactForm {lang} />
  </div>
</Modal>
