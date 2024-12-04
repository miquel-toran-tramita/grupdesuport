<script lang="ts">
  import Svg from './Svg.svelte'

  interface IMenuItem {
    href: string
    title: string
    dropdown?: IMenuItem[]
  }

  const items: IMenuItem[] = [
    {
      href: 'Equip',
      title: 'Equip',
    },
    {
      href: 'Especialitats',
      title: 'Especialitats',
    },
    {
      href: 'DemanaCita',
      title: 'Contacte',
    },
    {
      href: 'DemanaCita',
      title: 'Demana Cita',
    },
  ]

  let open: boolean = false

  const openMenu = () => {
    open = !open

    document.body.style.overflow = open ? 'hidden' : 'auto'
  }
</script>

<style lang="scss">
  @import 'src/sass/mixins.scss';
  $menuHeight: 60px;

  .menu {
    //background-color: var(--colorSecondary);
    height: $menuHeight;
    z-index: 7;
    position: fixed;
    width: 100%;
    top: 0;

    .g-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      overflow: hidden;

      .logo {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .items {
        display: flex;

        .item-group {
          padding: 27px;

          &:hover .dropdown {
            display: flex;
          }

          .item {
            color: var(--colorText3);
            transition: 0.2s ease;

            &.cita {
              text-decoration: underline;
            }

            &:hover {
              color: var(--colorBrandSoft);
              transition: 0.2s ease;
            }
          }

          .dropdown {
            display: none;
            position: absolute;
            overflow: hidden;
            flex-direction: column;
            gap: 10px;
            margin-top: 10px;
            padding: 20px;
            background-color: var(--colorBackground);
            border: 1px solid var(--colorBorder);
            border-radius: var(--radius);
          }
        }
      }

      .items-mobile,
      .burger {
        display: none;
      }

      @include notDesktop {
        .items {
          display: none;
        }

        .items-mobile {
          position: fixed;
          top: 0px;
          left: 0;

          width: 100%;
          height: 100dvh;

          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          padding: 75px;
          color: white;
          font-size: 20px;

          background-color: rgba(43, 54, 41, 0.9);
          backdrop-filter: blur(8px);

          &.open {
            display: flex;
          }

          :global(.close) {
            transform: rotate(45deg);
            position: absolute;

            top: 10px;
            right: 40px;
          }

          .item,
          .sub-item {
            padding: 10px;
          }

          .sub-item {
            color: var(--colorText2);
            padding-left: 20px;
          }
        }

        .burger {
          display: block;
          margin-top: 2px;
        }
      }
    }
  }
</style>

<div class="menu">
  <div class="g-wrapper">
    <a href="/" class="logo">
      <Svg name="logo" width="100" height="100" />
    </a>

    <div class="items">
      {#each items as item, i}
        <div class="item-group">
          <a class="item" href="https://nomadpsicologia.com/#{item.href}" class:cita={i === 3}>{item.title}</a>

          {#if item.dropdown}
            <div class="dropdown">
              {#each item.dropdown as subItem}
                <a class="item" href={subItem.href} title={subItem.title}>{subItem.title}</a>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <button class="burger" on:click={openMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" fill="white" viewBox="0 -960 960 960"
        ><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg
      >
    </button>

    <div class="items-mobile" class:open>
      <button on:click={openMenu}>
        <Svg name="plus" height="40" width="40" fill="white" className="close" />
      </button>

      {#each items as item}
        <a class="item" href="https://nomadpsicologia.com/#{item.href}" title={item.title} on:click={openMenu}>{item.title}</a>

        {#if item.dropdown}
          {#each item.dropdown as subItem}
            <a class="sub-item" href={subItem.href} title={subItem.title}>{subItem.title}</a>
          {/each}
        {/if}
      {/each}
    </div>
  </div>
</div>
