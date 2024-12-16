<script lang="ts">
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

    span {
      transition: 0.3s ease;
      cursor: pointer;
      border: 1px solid var(--colorText3);
      color: var(--colorText3);
      border-radius: 5px;
      width: 30px;
      line-height: 1.5;

      &.active {
        border: 1px solid var(--colorPrimary);
        background-color: var(--colorText3);
        color: var(--colorPrimary);
      }
    }
  }
</style>

<div class="language-selector">
  <span class="active">CA</span>
  <span>ES</span>
</div>
