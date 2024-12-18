<script lang="ts">
  import Input from '@/components/Input.svelte'
  import Checkbox from '@/components/Checkbox.svelte'
  import Svg from '@/components/Svg.svelte'
  import Button from '@/components/Button.svelte'
  import { useTranslations, languageList } from '@/i18n/ui'

  export let context: string = ''
  export let lang: string

  const t = useTranslations(lang as keyof typeof languageList)

  let btnCopy = 'Enviar'

  const data = {
    name: {
      value: '',
      validate: null,
      error: false,
    },
    email: {
      value: '',
      validate: null,
      error: false,
    },
    phone: {
      value: '',
      validate: null,
      error: false,
    },
    message: {
      value: '',
      validate: null,
      error: false,
      placeholder: '',
    },
    tanc: {
      value: false,
      validate: null,
      error: false,
      placeholder: '',
    },
  }

  let loading = false

  const sendLead = async () => {
    if (btnCopy != 'Enviar') return

    data.name.error = !data.name.value
    data.email.error = !data.email.value
    data.phone.error = !data.phone.value
    data.tanc.error = !data.tanc.value

    data.email.error = data.email.validate('La dirección de email no es válida')

    const errors = Object.values(data).map((field) => field.error)

    if (!errors.includes(true)) {
      loading = true
      const result = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name.value,
          email: data.email.value,
          phone: data.phone.value,
          message: data.message.value,
          context,
        }),
      })

      data.name.value = ''
      data.email.value = ''
      data.phone.value = ''
      data.message.value = ''

      loading = false

      if (!result) {
        btnCopy = 'Ups! Algo ha salido mal, vuélvelo a intentar más tarde. Sentimos las molestias 😓'
        return
      }

      btnCopy = '<div style="font-size: 12px;"> ¡Enviado! <br> Contactaremos contigo lo antes posible 😉 </div>'
    }
  }
</script>

<style lang="scss">
  .contact-form {
    .legal {
      position: relative;
      display: flex;
      align-items: center;
      gap: 10px;
      padding-bottom: 30px;
      font-size: 12px;

      .tandc-error {
        display: flex;
        align-items: center;
        gap: 5px;
        position: absolute;
        bottom: 5px;
        opacity: 0.8;

        .error {
          color: #8a1212;
          font-size: 12px;
        }
      }
    }
  }
</style>

<div class="contact-form">
  <Input
    id="1"
    prefix="person"
    error={data.name.error}
    bind:value={data.name.value}
    label={t('contactFormInputName')}
    placeholder={t('contactFormInputName')}
    autocomplete="name"
  />

  <Input
    id="2"
    prefix="email"
    error={data.email.error}
    bind:value={data.email.value}
    bind:externalValidate={data.email.validate}
    label={t('contactFormInputEmail')}
    placeholder={t('contactFormInputEmail')}
    autocomplete="email"
    type="email"
  />

  <Input
    id="3"
    prefix="phone"
    error={data.phone.error}
    bind:value={data.phone.value}
    label={t('contactFormInputPhone')}
    placeholder={t('contactFormInputPhone')}
    maxlength={20}
    autocomplete="tel"
    type="tel"
  />

  <Input
    id="4"
    bind:value={data.message.value}
    label={t('contactFormInputMsg')}
    placeholder={t('contactFormInputMsg')}
    maxlength={500}
    type="textarea"
  />

  <div class="legal">
    <Checkbox bind:value={data.tanc.value} />

    <p>{@html t('contactFormTandC')}</p>
    {#if data.tanc.error}
      <div class="tandc-error">
        <Svg name="error" width="18" fill="#8a1212" />
        <span class="error"> Debes aceptar la política de privacidad</span>
      </div>
    {/if}
  </div>

  <Button click={sendLead} disabled={btnCopy != 'Enviar'} width="100%">
    {#if loading}
      <Svg name="loading" />
    {/if}
    <span>{@html btnCopy}</span>
  </Button>
</div>
