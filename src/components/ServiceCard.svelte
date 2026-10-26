<script lang="ts">
  import Svg from '@/components/Svg.svelte'

  export let icon: string
  export let title: string
  export let href: string
  export let linkLabel: string
</script>

<style lang="scss">
  .service-card {
    display: flex;
    min-height: 230px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 0;
    padding: 20px;
    background-color: white;
    color: var(--colorText);
    text-align: center;
    text-decoration: none;
    transition:
      border-color 0.2s ease,
      transform 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      border-color: var(--colorPrimary);
      box-shadow: rgba(44, 153, 221, 0.18) 0 12px 24px -8px;
      transform: translateY(-3px);
    }

    &:focus-visible {
      border-color: var(--colorPrimary);
      box-shadow: rgba(44, 153, 221, 0.18) 0 12px 24px -8px;
      transform: translateY(-3px);
    }

    &:focus-visible {
      outline: 3px solid var(--colorPrimary);
      outline-offset: 3px;
    }
  }

  .title {
    font-size: 18px;
  }

  .link-label {
    color: var(--colorPrimary);
    font-size: 14px;
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    .service-card {
      transition: none;
    }
  }
</style>

<a class="service-card g-box" {href}>
  <Svg name={icon} fill="var(--colorPrimary)" height="60" width="60" />
  <span class="title">{title}</span>
  <span class="link-label">{linkLabel}</span>
</a>
