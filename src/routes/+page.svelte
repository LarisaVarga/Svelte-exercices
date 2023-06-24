
<script>
// @ts-nocheck

  import Icon from 'svelte-awesome';
  import chevronRight from 'svelte-awesome/icons/chevronRight';
  import heart from 'svelte-awesome/icons/heart';
  import star from 'svelte-awesome/icons/star';
  import shoppingCart from 'svelte-awesome/icons/shoppingCart';
  import BoopIcon from './components/BoopIcon.svelte';
  import BoopTextIconBtn from './components/BoopTextIconBtn.svelte';
    import BoopTextIconBtn2 from './components/BoopTextIconBtn2.svelte';

</script>


<h1 class="text-3xl font-bold mb-4"> Buttons </h1>

<div class="flex">
  <BoopTextIconBtn btnText={"See how we're different 1"} btnIcon={chevronRight}></BoopTextIconBtn>

  <button class="btn-animation bg-gradient-to-r from-blue-600 via-blue-600 via-cyan-400 to-blue-600 text-white uppercase py-2 px-6 rounded-full font-medium italic flex items-center mr-3">
  See how we're different 2
  </button>

  <button class="btn-animation bg-gradient-to-r from-sky-700 via-sky-400 via-cyan-400 to-sky-700 text-white uppercase py-2 px-6 rounded-lg font-medium italic flex items-center hover:drop-shadow-md mr-3">
  See how we're different 3
  </button>

  <button class="btn4 bg-blue-500 text-white rounded-full h-10 flex items-center hover:bg-blue-700 hover:drop-shadow-md mr-3">
    <p class="uppercase pl-6 font-medium italic">See how we're different 4</p>
    <div class="btn4-icon bg-blue-600 rounded-full h-10 w-10 flex items-center justify-center ml-1">
      <Icon class="h-3" data="{chevronRight}"/>
    </div>
  </button>

  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mr-3">
    Simple Btn
  </button>

</div>

<h1 class="text-3xl font-bold my-4">
  Cards
</h1>

<div class="flex gap-5">
  <!-- <div class="card w-1/4 rounded overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
    <img class="w-full h-64 object-cover" src="https://cdn.shopify.com/s/files/1/1132/5272/files/Nicks3_7b381e7a-f96d-4cbb-b42d-d7bb28e2f1e6.jpg?v=1685467325" alt="Sustainable Clothing">
    <div class="p-4">
      <div class="font-bold text-xl mb-2">Sustainable Clothing</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! 
      </p>
      <div class="mt-4">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Best Seller</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Sale</span>
      </div>
    </div>
  </div> -->
  
  
  <div class="card w-1/4 rounded overflow-hidden shadow-md cursor-pointer hover:shadow-lg hover:outline hover:outline-green-500">
    <div class="relative">
      <img class="w-full h-64 object-cover" src="https://ecocult.com/wp-content/uploads/2023/05/christydawnsundress.png.webp" alt="Sustainable Clothing">
      <div class="ml-4 mb-4 absolute bottom-0 left-0">
        <span class="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white">Best Seller</span>
        <span class="inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-white">Sale</span>
      </div>
      <div class="mr-4 mt-4 absolute top-0 right-0 flex items-center justify-center">
        <BoopIcon boopParams={{ scale: 1.2, timing: 200}} icon={heart} initialIconColor={'text-white'} favIconColor={'text-rose-700'}></BoopIcon>
      </div>
    </div>
    <div class="p-4 flex flex-col justify-between h-bottom-card">
      <div class="">
        <h3 class="font-bold text-xl mb-2">Sustainable Clothing 1</h3>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! 
        </p>
      </div>

      <div class="flex justify-between mt-4">
        <div>
          <div class="flex">
            <h4 class="uppercase font-medium">239dkk</h4> 
            <div class="relative ml-2">
              <h5 class="uppercase font-medium text-red-700">499dkk</h5> 
              <span class="absolute bg-red-700 w-full h-1px transform -rotate-12 bottom-5px origin-bottom-left"></span>
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <Icon class="h-6 text-yellow-500 mr-1" data="{star}"/>
          <h4>4.8</h4>
        </div>
      </div>
    </div>
  </div>

  <div class="card w-1/4 rounded overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
    <div class="relative">
      <img class="w-full h-64 object-cover" src="https://images.squarespace-cdn.com/content/v1/547a3834e4b053a861c4874e/b5dfe710-8106-4795-b7c5-d6fbbdb85328/Sustainably+Chic+%7C+Sustainable+Fashion+Blog+%7C+Best+Affordable+Sustainable+Clothing+Brands.jpeg?format=1000w" alt="Sustainable Clothing">
      <div class="mx-4 mb-4 absolute bottom-0 left-0 right-0 flex justify-between">
        <div>
          <span class="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white">Best Seller</span>
          <span class="inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-white">Sale</span>
        </div>
        <div class="flex items-center bg-white rounded-full px-2">
          <Icon class="h-6 text-yellow-500 mr-1" data="{star}"/>
          <span class="text-sm font-semibold">4.8</span>
        </div>
      </div>
      <div class="mr-4 mt-4 absolute top-0 right-0 flex items-center justify-center">
        <BoopIcon boopParams={{ scale: 1.2, timing: 200}} icon={heart}></BoopIcon>
      </div>
    </div>
    <div class="p-4 flex flex-col justify-between h-bottom-card">
      <div class="">
        <h3 class="font-bold text-xl mb-2">Sustainable Clothing 2</h3>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! 
        </p>
      </div>

      <div class="flex justify-between">
        <div>
          <div class="flex">
            <h4 class="uppercase font-medium">239dkk</h4> 
            <div class="relative ml-2">
              <h5 class="uppercase font-medium text-red-700">499dkk</h5> 
              <span class="absolute bg-red-700 w-full h-1px transform -rotate-12 bottom-5px origin-bottom-left"></span>
            </div>
          </div>
        </div>
        <div>
          <BoopTextIconBtn2 btnText={"Add to cart"}  btnIcon={shoppingCart} boopParams={{ rotation: 20, timing: 200}} btnColors={'bg-green-600'}></BoopTextIconBtn2>
        </div>

      </div>
    </div>
  </div>


  <div class="card w-1/4 rounded overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
    <div class="relative">
      <img class="w-full h-64 object-cover" src="https://cdn.shopify.com/s/files/1/1132/5272/files/Nicks3_7b381e7a-f96d-4cbb-b42d-d7bb28e2f1e6.jpg?v=1685467325" alt="Sustainable Clothing">
      <div class="mx-2 absolute bottom-0 left-0 right-0 flex justify-between">
        <div>
          <span class="inline-block bg-green-600 rounded-t-lg px-2 py-1 text-sm font-semibold text-white">Best Seller</span>
          <span class="inline-block bg-red-600 rounded-t-lg px-2 py-1 text-sm font-semibold text-white">Sale</span>
        </div>
        <div class="flex items-center bg-white rounded-t-lg px-2">
          <Icon class="h-6 text-yellow-500 mr-1" data="{star}"/>
          <span class="text-sm font-semibold">4.8</span>
        </div>
      </div>
      <div class="mr-2 mt-2 bg-white w-8 h-8 rounded-full absolute top-0 right-0 flex items-center justify-center">
        <BoopIcon boopParams={{ scale: 1.2, timing: 200}} icon={heart} initialIconColor={'text-slate-300'}></BoopIcon>
      </div>
    </div>
    <div class="p-4 flex flex-col justify-between h-bottom-card">
      <div class="">
        <h3 class="font-bold text-xl mb-2">Sustainable Clothing 3</h3>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! 
        </p>
      </div>

      <div class="flex justify-between">
        <div class="flex items-center">
          <h4 class="uppercase font-medium">239dkk</h4> 
          <div class="relative ml-2">
            <h5 class="uppercase font-medium text-red-700">499dkk</h5> 
            <span class="absolute bg-red-700 w-full h-1px transform -rotate-12 bottom-5px origin-bottom-left"></span>
          </div>
        </div>
        <div>
          <BoopTextIconBtn2 btnText={"Add to cart"}  btnIcon={shoppingCart} boopParams={{ rotation: 20, timing: 200}} btnColors={'bg-gradient-to-r from-green-600 to-green-900'}></BoopTextIconBtn2>
        </div>

      </div>
    </div>
  </div>
</div>


<h1 class="text-3xl font-bold my-4">
  Links
</h1>
<div>
  <a href="/" class="text-red-600 font-medium uppercase cursor-pointer">Click me</a>
  <a href="/" class="text-blue-600 font-medium uppercase cursor-pointer underline italic">Click me</a>
</div>


<style>
  .btn-animation {
      transition: all .4s ease-in-out;
      background-size: 300% 100%;
  }
  .btn-animation:hover {
    background-position: 100% 0;
    transition: all .4s ease-in-out;
  } 
  .btn4:hover .btn4-icon {
    animation: rotate 0.5s ease-in;
  }
  @keyframes rotate {
    0% {transform: rotate(0deg);}
    99.99% {transform: rotate(360deg);}
    100% {transform: rotate(0deg);}
  }
</style>


