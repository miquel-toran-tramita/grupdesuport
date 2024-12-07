<script lang="ts">
  interface ILogro {
    number: number
    description: string
  }

  const logros: ILogro[] = [
    {
      number: 30,
      description: 'Años en el sector',
    },
    {
      number: 30,
      description: 'Años en el sector',
    },
    {
      number: 30,
      description: 'Años en el sector',
    },
    {
      number: 30,
      description: 'Años en el sector',
    },
  ]
</script>

<style lang="scss">
  .logros-row {
    width: 100%;
    padding: 50px;
    display: flex;
    gap: 100px;
    background-color: white;
    justify-content: center;
    align-items: center;

    .logro {
      display: flex;
      flex-direction: column;
      align-items: center;

      .quantity {
        font-size: 25px;
        font-weight: bolder;
      }

      .description {
        font-size: 13px;
      }
    }

    .separation {
      height: 25px;
      width: 2px;
      background-color: var(--colorPrimary);
    }
  }
</style>

<div class="logros-row">
  {#each logros as logro, i}
    <div class="logro">
      <div class="quantity">{logro.number}</div>
      <div class="description">{logro.description}</div>
    </div>

    {#if i != logros.length - 1}
      <div class="separation"></div>
    {/if}
  {/each}
</div>
