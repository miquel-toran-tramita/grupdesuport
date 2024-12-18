<script lang="ts">
  import { languageList } from '@/i18n/ui'
  export let lang: string

  const swapLang = (newLang: string) => {
    let currentURL = window.location.href

    const regexIdioma = /\/(es|ca|en)\//

    if (regexIdioma.test(currentURL)) {
      currentURL = currentURL.replace(regexIdioma, `/${newLang}/`)
    } else {
      const url = new URL(currentURL)
      currentURL = `${url.origin}/${newLang}${url.pathname}${url.search}${url.hash}`
    }

    // Redirige a la nueva URL
    window.location.href = currentURL
  }
</script>

<style lang="scss">
  .language-selector {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    color: inherit;
    height: fit-content;
    margin-top: 15px;
    font-size: 12px;
    gap: 5px;

    button {
      transition: 0.3s ease;
      cursor: pointer;
      border: 1px solid var(--colorText3);
      color: var(--colorText3);
      border-radius: 5px;
      width: 30px;
      line-height: 1.6;
      text-transform: uppercase;

      &.active {
        border: 1px solid var(--colorPrimary);
        background-color: var(--colorText3);
        color: var(--colorPrimary);
      }
    }
  }
</style>

<div class="language-selector">
  {#each languageList as item}
    <button class:active={lang === item} on:click={() => swapLang(item)}>{item}</button>
  {/each}
</div>
