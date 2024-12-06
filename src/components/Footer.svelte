<style lang="scss">
  footer {
    background-color: var(--colorPrimary);

    display: flex;
    flex-direction: column;

    .top-side {
      height: 300px;
      width: 100%;
      background-color: var(--colorNeutral);

      .g-wrapper {
        display: flex;
        align-items: center;
        height: 100%;
      }
    }

    .bottom-side {
      width: 100%;
      height: 40px;

      .g-wrapper {
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: space-between;

        .right {
          display: flex;
          gap: 30px;
        }

        a,
        .left {
          color: var(--colorText3);
          font-size: 14px;
        }
      }
    }
  }
</style>

<footer>
  <div class="top-side">
    <div class="g-wrapper">
      <img src="/assets/logos.png" alt="Logos" />
    </div>
  </div>

  <div class="bottom-side">
    <div class="g-wrapper">
      <div class="left">GRUP DE SUPORT SCC Copyright {new Date().getFullYear()}</div>
      <div class="right">
        <a href="/aviso-legal">Aviso legal</a>
        <a href="/politica-de-cookies">Política de cookies</a>
      </div>
    </div>
  </div>
</footer>
