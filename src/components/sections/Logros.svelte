<script lang="ts">
  interface ILogro {
    number: number
    total: number
    description: string
  }

  let logros: ILogro[] = [
    {
      number: 0,
      total: 30,
      description: 'Años en el sector',
    },
    {
      number: 0,
      total: 300,
      description: 'Años en el sector',
    },
    {
      number: 0,
      total: 100,
      description: 'Años en el sector',
    },
    {
      number: 0,
      total: 50,
      description: 'Años en el sector',
    },
  ]

  const timeMS = 10 * 100

  logros.map((logro: ILogro, index: number) => {
    setInterval(() => {
      if (logro.number < logro.total) logro.number++
      logros[index] = logro
    }, timeMS / logro.total)
  })
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
