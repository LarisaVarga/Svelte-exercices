<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
    // Run this code after the component is rendered
  onMount(() => {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', toggleMenu);
    });
  });
  
</script>

<div class:open={isMenuOpen}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="burger-menu fixed top-2.5 right-2.5 flex flex-col justify-between	w-7 h-6 cursor-pointer z-50" on:click={toggleMenu}>
    <div class="line w-full h-1 bg-black rounded-sm"></div>
    <div class="line w-full h-1 bg-black rounded-sm"></div>
    <div class="line w-full h-1 bg-black rounded-sm"></div>
  </div>

  <div class="menu fixed top-0 right-0 w-72 h-full bg-white shadow-md z-40" transition:fly={{ x: isMenuOpen ? 0 : '100%', duration: 300 }}>
    <!-- <button class="close-btn" on:click={toggleMenu}>
      <span class="close-icon">+</span>
    </button> -->
    <div class="p-0 m-4 pt-6 flex flex-col">
      <a href="/" class="menu-item mb-4">Page One</a>
      <a href="/page-two" class="menu-item mb-4">Page Two</a>
      <a href="/" class="menu-item mb-4">Menu Item 3</a>
    </div>
  </div>
</div>

  <style>
    .burger-menu .line {
      transition: transform 0.3s ease;
    }
    .open .burger-menu .line {
      transition: transform 0.3s ease;
    }
    .open .burger-menu .line:nth-child(1) {
      transform: rotate(45deg) translate(7px, 7px);
    }
    .open .burger-menu .line:nth-child(2) {
      opacity: 0;
    }
    .open .burger-menu .line:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }
    .menu {
      transform: translate(100%, 0);
      transition: transform 0.3s ease;
    }
    .open .menu { 
      transform: translate(0%, 0);
      transition: transform 0.3s ease;
    }

  </style>