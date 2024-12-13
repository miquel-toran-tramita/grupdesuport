<script lang="ts">
  import { onMount } from 'svelte'

  let HTMLInfiniteLoop: HTMLElement
  let x: number = 0

  const animate = () => {
    HTMLInfiniteLoop.style.transform = `translateX(${x}px)`
    //x += 0.5
    requestAnimationFrame(animate)
  }

  onMount(() => {
    requestAnimationFrame(animate)
  })
</script>

<style lang="scss">
  .infinite-loop {
    display: flex;
    align-items: center;
    gap: 50px;
    height: 100%;
    width: 150%;
    border: 1px solid;
  }
</style>

<div class="infinite-loop" bind:this={HTMLInfiniteLoop}>
  <slot></slot>
</div>
