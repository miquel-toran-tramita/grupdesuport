<script lang="ts">
  import Modal from '@/components/Modal.svelte'
  import Button from '@/components/Button.svelte'
  import ContactForm from '@/components/ContactForm.svelte'

  export let closed: boolean = true
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

<div class="tarifas">
  <h2 class="g-title g-wrapper">Queremos empatizar con tu situación y buscar el bien común</h2>
  <div class="g-mini-wrapper">
    <div class="text">
      <p>
        Nos gusta ofrecer una comunicación fluida, cercana y honesta, por eso mismo no podemos darte un precio sin conocer tu situación.
      </p>

      <p>
        <b>Haz click en el botón de abajo</b>
        y hablaremos sobre cuestiones como: <br />Que pasa si eres autónomo o pyme, si tu proyecto está en perdidas, si tiene menos de un
        año de vida o qué servicios necesitas.
      </p>
    </div>

    <Button click={() => (closed = false)}>Concertar una cita</Button>
  </div>
</div>

<Modal bind:closed>
  <div slot="modal-header">Formulario de contacto</div>

  <div slot="modal-content" class="modal-content">
    <ContactForm />
  </div>
</Modal>
