<script lang="ts">
  import { onMount } from 'svelte'
  import Svg from '@/components/Svg.svelte'

  export let itemWidth: number = 600

  let HTMLslides: HTMLElement
  let index: number = 0

  let disableNext: boolean = false
  let disablePrev: boolean = true
  let onMounted: boolean = false

  $: if (HTMLslides) HTMLslides.style.transform = `translateX(${itemWidth * index}px)`
  $: disablePrev = index >= 0
  $: disableNext = onMounted && -itemWidth < window.innerWidth - HTMLslides.getBoundingClientRect().right

  const previous = () => {
    if (index < 0) {
      index++
      disableNext = false
    }
  }

  const next = () => {
    const sizes = HTMLslides.getBoundingClientRect()

    if (0 > window.innerWidth - sizes.right) index--
  }

  onMount(() => {
    const nItems: number = HTMLslides.children.length
    HTMLslides.style.width = `${nItems * itemWidth}px`
    onMounted = true
  })
</script>

<style lang="scss">
  @use 'src/sass/mixins.scss' as *;

  .slider-x {
    height: fit-content;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .slides {
      display: flex;
      gap: 100px;
      transition: 0.3s ease;
    }
  }

  .arrows {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding-top: 50px;

    .arrow {
      width: 100px;
      height: 100px;

      display: flex;
      justify-content: center;
      align-items: center;

      border: 1px solid var(--colorPrimary);
      border-radius: 100%;
      transition: 0.3s ease;

      :global(svg) {
        transform: translateX(1px);
      }

      &.disabled {
        opacity: 0.2;
      }

      &.left {
        transform: rotate(180deg);
      }

      &:hover {
        transition: 0.3s ease;
        background-color: var(--colorPrimary);

        :global(svg) {
          fill: white;
        }
      }
    }
  }
</style>

<div class="container-slider">
  <div class="slider-x">
    <div class="g-wrapper">
      <div class="slides" bind:this={HTMLslides}>
        <slot />
      </div>
    </div>
  </div>

  <div class="arrows g-wrapper">
    <button class="arrow left" class:disabled={disablePrev} on:click={previous} aria-label="left">
      <Svg name="arrowSlim" width="30" height="30" fill="var(--colorPrimary)" />
    </button>

    <button class="arrow right" class:disabled={disableNext} on:click={next} aria-label="right">
      <Svg name="arrowSlim" width="30" height="30" fill="var(--colorPrimary)" />
    </button>
  </div>
</div>
