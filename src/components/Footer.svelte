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
    background-color: var(--colorPrimary);
    margin-top: 100px;
    padding: 20px;

    display: flex;
    justify-content: space-between;

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo-texts {
      display: flex;
      flex-direction: column;
      text-align: center;

      .title {
        font-size: 20px;
      }
      .subtitle {
        transition: 0.3s ease;
        font-size: 12px;
        color: var(--colorSecondary);
      }
    }
  }
</style>

<div class="footer-container g-wrapper">
  <div class="logo">
    <a href="/" class="logo">
      <Svg name="logo" width="100" height="100" />

      <div class="logo-texts">
        <span class="title"> GRUP DE SUPORT SCC</span>
        <span class="subtitle">LA COMPTABILITAT LLEUGERA</span>
      </div>
    </a>

    <div class="copyright">2020</div>
  </div>

  <div class="RRSS">
    {#each social as RRSS}
      <a href={RRSS.url} target="_">
        <Svg name={RRSS.name} width="35" height="35" fill="white" />
      </a>
    {/each}

    <a href="info@grupdesuport.com">
      <Svg name="email" width="35" height="35" fill="white" />
      <span>info@grupdesuport.com</span>
    </a>

    <a href="info@grupdesuport.com">
      <Svg name="phone" width="35" height="35" fill="white" />
      <span>650 36 90 27</span>
    </a>
  </div>
</div>
