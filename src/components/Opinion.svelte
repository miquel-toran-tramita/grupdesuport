<script lang="ts">
  import Svg from '@/components/Svg.svelte'

  export let stars: number = 5
  export let text: string = ''
  export let name: string = ''
</script>

<style lang="scss">
  .opinion {
    padding: 30px;
    background-color: white;
    max-width: 350px;
    text-align: center;

    .name {
      font-weight: bold;
      font-size: 12px;
      padding-bottom: 10px;
    }

    .text {
      font-size: 16px;

      :global(p) {
        padding: 5px 0;
      }
    }

    .stars {
      padding-top: 10px;
      display: flex;
      width: 100%;
      justify-content: center;
      gap: 5px;
    }
  }
</style>

<div class="opinion g-box">
  <div class="name">{name}</div>
  <div class="text">{@html text}</div>

  <div class="stars">
    {#each Array(stars) as _}
      <Svg name="star" fill="var(--colorPrimary)" />
    {/each}
  </div>
</div>
