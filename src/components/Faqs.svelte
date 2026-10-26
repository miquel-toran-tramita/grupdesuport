<script lang="ts">
  export let title: string
  export let faqs: { title: string; content: string }[]
</script>

<style lang="scss">
  .faq-section {
    padding-top: 200px;
  }

  .faqs {
    display: grid;
    gap: 14px;
    padding: 0 20px;
  }

  .faq {
    overflow: hidden;
    border-radius: var(--radius);
    background-color: var(--colorSecondary);
    box-shadow: 0 6px 18px rgba(25, 35, 49, 0.06);
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.2s ease;

    &:hover {
      border-color: var(--colorPrimary);
      box-shadow: 0 10px 24px rgba(44, 153, 221, 0.12);
      transform: translateY(-2px);
    }

    &[open] {
      border-color: var(--colorPrimary);
      box-shadow: 0 10px 24px rgba(44, 153, 221, 0.12);
    }
  }

  .faq__question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 20px 24px;
    color: var(--colorPrimary);
    cursor: pointer;
    font-family: var(--fontPrimary);
    font-size: 19px;
    font-weight: 700;
    list-style: none;

    &::-webkit-details-marker {
      display: none;
    }

    &::after {
      display: grid;
      flex: 0 0 30px;
      width: 30px;
      height: 30px;
      place-items: center;
      border-radius: 50%;
      background: rgba(44, 153, 221, 0.1);
      color: var(--colorPrimary);
      content: '+';
      font-family: sans-serif;
      font-size: 23px;
      font-weight: 400;
      line-height: 1;
      transition:
        background-color 0.2s ease,
        color 0.2s ease,
        transform 0.2s ease;
    }

    &:hover::after {
      background: var(--colorPrimary);
      color: white;
    }

    &:focus-visible {
      outline: 3px solid var(--colorPrimary);
      outline-offset: -4px;
    }
  }

  .faq[open] .faq__question::after {
    transform: rotate(45deg);
  }

  .faq__answer {
    margin: 0 24px;
    padding: 16px 0 22px;
    border-top: 1px solid var(--colorBorder);
    color: var(--colorText2);
    font-size: 16px;
    line-height: 1.7;
  }

  @media (max-width: 600px) {
    .faq-section {
      padding-bottom: 50px;
    }

    .faq__question {
      gap: 12px;
      padding: 17px;
      font-size: 17px;
    }

    .faq__answer {
      margin: 0 17px;
      padding: 14px 0 18px;
      font-size: 15px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .faq,
    .faq__question::after {
      transition: none;
    }
  }
</style>

<section class="faq-section g-wrapper" aria-label={title}>
  <h2 class="g-title">{title}</h2>

  <div class="faqs g-mini-wrapper">
    {#each faqs as faq}
      <details class="faq">
        <summary class="faq__question">{faq.title}</summary>
        <p class="faq__answer">{faq.content}</p>
      </details>
    {/each}
  </div>
</section>
