<script lang="ts">
  export let name: string = ''
  export let src: string = ''
  export let description: string = ''
  export let title: string = ''
  export let studies: string = ''
</script>

<style lang="scss">
  .team-member {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;

    img {
      width: 100%;
      height: 300px;
      padding: 0;
      flex-shrink: 0;
      object-fit: cover;
    }

    .info {
      position: relative;
      background-color: var(--colorSecondary);
      z-index: 2;

      .name {
        text-align: center;
        font-size: 24px;
      }

      .title {
        text-align: center;
        font-size: 14px;
        color: var(--colorText2);
      }
    }

    .description {
      position: relative;
      background-color: var(--colorSecondary);
      z-index: 2;
      font-size: 14px;
      height: 100%;
    }
  }
</style>

<div class="team-member">
  <img class="g-box" src="/assets/team/{src}.jpg" alt={name} />

  <div class="info g-box">
    <h3 class="name">{name}</h3>
    <div class="title">{title}</div>
  </div>

  <div class="description g-box">
    {@html description}
  </div>
</div>
