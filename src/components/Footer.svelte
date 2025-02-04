<script lang="ts">
  import { defaultLang, useTranslations, languageList } from '@/i18n/ui'
  import Svg from './Svg.svelte'

  export let lang: string

  const t = useTranslations(lang as keyof typeof languageList)

  const social = [
    { name: 'linkedin', url: 'https://www.linkedin.com/in/grup-de-suport-scc-797501127/' },
    { name: 'facebook', url: 'https://www.facebook.com/grupdesuport/' },
    { name: 'twitter', url: 'https://x.com/grupdesup' },
  ]
</script>

<style lang="scss">
  @use 'src/sass/mixins.scss' as *;
  .footer-container {
    border-radius: 16px 16px 0 0;
    background-color: var(--colorSecondary);
    margin-top: 200px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .up {
      display: flex;
      justify-content: space-between;

      @include notDesktop {
        flex-direction: column;
        gap: 30px;
      }

      .contacts {
        display: flex;
        flex-direction: column;
        gap: 20px;

        a {
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }
    }

    .down {
      display: flex;
      justify-content: space-between;

      @include notDesktop {
        flex-direction: column;
      }
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      justify-self: start;
    }

    .footer-links {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 13px;
    }
  }

  a:hover {
    color: var(--colorPrimary);

    :global(svg) {
      fill: var(--colorPrimary);
    }
  }
</style>

<div class="footer-container g-wrapper">
  <div class="up">
    <div class="RRSS">
      <div class="contacts">
        <a href="info@grupdesuport.com">
          <Svg name="email" width="25" height="25" fill="var(--colorText2)" />
          <span>info@grupdesuport.com</span>
        </a>

        <a href="info@grupdesuport.com">
          <Svg name="phone" width="25" height="25" fill="var(--colorText2)" />
          <span>650 36 90 27</span>
        </a>
      </div>
    </div>

    <img src="/assets/logos.webp" alt="Colegi d'economistes" width="300px" loading="lazy" />
  </div>

  <div class="down">
    <span class="logo"> GRUP DE SUPORT SCC {new Date().getFullYear()}</span>

    <div class="footer-links">
      <a href="{lang === 'ca' ? '/ca' : ''}/aviso-legal">{t('footerLegal')}</a>
      <a href="{lang === 'ca' ? '/ca' : ''}/politica-cookies">{t('footerCookies')}</a>

      {#each social as RRSS}
        <a href={RRSS.url} target="blank_">
          <Svg name={RRSS.name} width="25" height="25" fill="var(--colorText2)" />
        </a>
      {/each}
    </div>
  </div>
</div>
