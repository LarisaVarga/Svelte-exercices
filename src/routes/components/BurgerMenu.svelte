<script>
  import { fly } from 'svelte/transition';

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
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
    <ul class="list-none p-0 m-4 pt-6">
      <li class="mb-4 transition ease-in duration-300">Menu Item 1</li>
      <li class="mb-4 transition ease-in duration-300">Menu Item 2</li>
      <li class="mb-4 transition ease-in duration-300">Menu Item 3</li>
    </ul>
  </div>
</div>

  <style>

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