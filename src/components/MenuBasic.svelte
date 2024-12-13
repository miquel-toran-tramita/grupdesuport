<script lang="ts">
  import Svg from './Svg.svelte'

  interface IMenuItem {
    href: string
    title: string
    dropdown?: IMenuItem[]
  }

  const items: IMenuItem[] = [
    {
      href: '',
      title: 'Servicios',
    },
    {
      href: '',
      title: 'Tarifas',
    },
    {
      href: '',
      title: 'Nosotros',
    },
    {
      href: '',
      title: 'Contacto',
    },
  ]

  let open: boolean = false

  const openMenu = () => {
    open = !open

    document.body.style.overflow = open ? 'hidden' : 'auto'
  }

  let scrolled: boolean = false
  const handleScroll = () => (scrolled = window.scrollY > 20)
</script>

<style lang="scss">
  @use 'src/sass/mixins.scss' as *;
  $menuHeight: 70px;

  .menu {
    transition: 0.3s ease;
    height: $menuHeight;
    z-index: 7;
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;

    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);

    &.scrolled {
      //border-bottom: 1px solid var(--colorPrimary);

      box-shadow: rgba(65, 109, 252, 0.1) 0 15px 10px -5px;

      background-color: var(--colorSecondary);

      .item {
        color: var(--colorText) !important;

        &:hover {
          color: var(--colorPrimary) !important;
        }
      }

      .subtitle {
        font-size: 12px;
        color: var(--colorPrimary) !important;
      }
    }

    .menu-content {
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
              color: var(--colorText);
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
          color: var(--colorText) !important;
          font-size: 20px;

          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);

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

<div class="menu g-wrapper" class:scrolled>
  <div class="menu-content">
    <a href="/" class="logo">
      <Svg name="logo" width="100" height="100" />

      <div class="logo-texts">
        <span class="title">GRUP DE SUPORT SCC</span>
        <span class="subtitle">LA COMPTABILITAT LLEUGERA</span>
      </div>
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

    <button class="burger" on:click={openMenu} aria-label="button">
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

<svelte:window on:scroll={handleScroll} />
