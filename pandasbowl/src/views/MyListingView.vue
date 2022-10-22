<script>

  export default {
    components: {

    },
    data() {
      return {
        value: 20,
        format: {
          prefix: '< $',
          decimals: 2
        },
        products:[
              {
                  id:1,
                  name:'BLACK TEE',
                  type:'Jackets',
                  price:'18.00',
                  src:require('../assets/img/shop/1.jpg')
              },
              {
                  id:2,
                  name:'WHITE TEE',
                  type:'Polo',
                  price:'40.00',
                  src:require('../assets/img/shop/2.jpg')
              },
              {
                  id:3,
                  name:'Zara limited...',
                  type:'Denim',
                  price:'25.00',
                  src:require('../assets/img/shop/3.jpg')
              },
              {
                  id:4,
                  name:'SKULL TEE',
                  type:'Jackets',
                  price:'30.00',
                  src:require('../assets/img/shop/4.jpg')
              },
              {
                  id:5,
                  name:'MANGO WINTER',
                  type:'Sweaters',
                  price:'50.00',
                  src:require('../assets/img/shop/5.jpg')
              },
              {
                  id:6,
                  name:'SHIRT',
                  type:'Denim',
                  price:'34.00',
                  src:require('../assets/img/shop/6.jpg')
              },
              {
                  id:7,
                  name:'TRUCKER JACKET',
                  type:'Jackets',
                  price:'38.00',
                  src:require('../assets/img/shop/7.jpg')
              },
              {
                  id:8,
                  name:'COATS',
                  type:'Jackets',
                  price:'25.00',
                  src:require('../assets/img/shop/8.jpg')
              },{
                  id:9,
                  name:'MANGO WINTER',
                  type:'Sweaters',
                  price:'50.00',
                  src:require('../assets/img/shop/9.jpg')
              },
              {
                  id:10,
                  name:'SHIRT',
                  type:'Denim',
                  price:'34.00',
                  src:require('../assets/img/shop/10.jpg')
              },
              {
                  id:11,
                  name:'TRUCKER JACKET',
                  type:'Jackets',
                  price:'38.00',
                  src:require('../assets/img/shop/11.jpg')
              }
          ]
      }
    }
  }
</script>

<template>
  <div class="container mx-auto">
      <!-- Filter portion -->
      <div
         class="md:flex flex-row"
      >
        
        <!-- Marketplace section -->
        <div
          class="ml-6 my-4 px-3 py-3 w-full md:w-full"
        >
            <p class="ml-2 mb-2 text-2xl font-bold">My Listings</p>

             <div class="ml-2 flex flex-row justify-between">
                <form class="flex items-center w-1/2">   
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-4 text-white-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
                    </div>
                    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span class="sr-only">Search</span>
                    </button>
                </form>

                
            </div>

            <p class="border-b border-gray-300 mt-4"></p>

             <!-- Cards for all the rendered items -->
            <body class="antialiased text-gray-900 font-sans">
              <div class="container mx-auto">
                <div class="flex flex-wrap -mx-4" >
                    
                    <!-- First card to add more cards -->
                  <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                    <div class="c-card block bg-amber-50 hover:bg-amber-200 shadow-md hover:shadow-xl rounded-lg overflow-hidden ">
                      <div class="relative pb-48 overflow-hidden md:ml-36 ml-28 mt-32">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" class="absolute"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                      </div>
                    </div>
                  </div>

                  <!-- Every other card that comes thereafter -->
                  <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"  :key="product.id" v-for="product in products">
                    <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                      <div class="relative pb-48 overflow-hidden">
                        <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="">
                      </div>
                      <div class="p-4">
                        <h2 class="mt-2 mb-2  font-bold">Purus Ullamcorper Inceptos Nibh</h2>
                        <p class="text-sm">Cras justo odio, dapibus ac facilisis in.</p>
                        <div class="mt-3 flex items-center">
                          <span class="text-sm font-semibold">ab</span>&nbsp;<span class="font-bold text-xl">45,00</span>&nbsp;<span class="text-sm font-semibold">€</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </body>

        </div>

       
    </div>
  </div>
</template>



<style>
  .slider-blue {
    --slider-connect-bg: #3B82F6;
    --slider-tooltip-bg: #3B82F6;
    --slider-handle-ring-color: #3B82F630;
  }
</style>

<style src="@vueform/slider/themes/default.css"></style>