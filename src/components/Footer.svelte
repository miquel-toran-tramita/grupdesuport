<script lang="ts">
  import Svg from './Svg.svelte'

  const social = [
    { name: 'linkedin', url: 'https://www.linkedin.com/in/grup-de-suport-scc-797501127/' },
    { name: 'facebook', url: 'https://www.facebook.com/grupdesuport/' },
    { name: 'twitter', url: 'https://x.com/grupdesup' },
  ]
</script>

<style lang="scss">
  .footer-container {
    border-radius: 16px 16px 0 0;
    background-color: var(--colorSecondary);
    margin-top: 100px;
    padding: 20px;

    display: flex;
    justify-content: space-between;

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
    }
  }
</style>

<div class="footer-container g-wrapper">
  <span class="logo"> GRUP DE SUPORT SCC {new Date().getFullYear()}</span>

  <div class="footer-links">
    <a href="/aviso-legal">Aviso legal</a>
    <a href="/politica-de-privacidad">Política de privacidad</a>
  </div>

  <div class="RRSS">
    {#each social as RRSS}
      <a href={RRSS.url} target="blank_">
        <Svg name={RRSS.name} width="25" height="25" fill="var(--colorText2)" />
      </a>
    {/each}

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
