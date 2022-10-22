<script>
  import Slider from '@vueform/slider'

  export default {
    components: {
      Slider,
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
              },
              {
                  id:12,
                  name:'COATS',
                  type:'Jackets',
                  price:'25.00',
                  src:require('../assets/img/shop/12.jpg')
              }
          ]
      }
    }
  }
</script>

<template>
  <div class="container mx-auto">

      <div
         class="md:flex flex-row"
      >
        <!-- Filter portion -->
        <!-- card -->
        <div class=" ml-6 my-6 p-6 h-128 w-12/12 md:w-3/12 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <!-- card title -->
            <p class="font-semibold text-slate-600 mb-4 text-xl">Filters</p>

            <p class="border-t border-gray-300"></p>

            <p class="font-semibold text-slate-500 mt-5 mb-5">Price Range</p>


            <Slider class="slider-blue" showTooltip="focus" tooltipPosition="bottom" v-model="value" :format="format" />

            <div class="flex justify-between">
              <p class="font-semibold text-slate-600 text-l">$0</p>
              <p class="font-semibold text-slate-600 text-l">$100</p>
            </div>

            <p class="border-b border-gray-300 mt-4"></p>

            <p class="font-semibold text-slate-500 mt-5 mb-5">Categories</p>

            <div class="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="default-checkbox" class="ml-2 text-sm font-medium text-slate-500 dark:text-gray-300">Vegan</label>
            </div>
            <div class="flex items-center mb-4">
                <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-slate-500 dark:text-gray-300">Primal</label>
            </div>

            <div class="flex items-center mb-4">
                <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-slate-500 dark:text-gray-300">Whole 30</label>
            </div>
            <div class="flex items-center mb-4">
                <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-slate-500 dark:text-gray-300">Gluten free</label>
            </div>
            <div class="flex items-center mb-4">
                <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-slate-500 dark:text-gray-300">Diary free</label>
            </div>
            <div class="flex items-center mb-4">
                <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-slate-500 dark:text-gray-300">Paleolithic</label>
            </div>
            <div class="flex items-center">
                <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-slate-500 dark:text-gray-300">Primal</label>
            </div>
        </div>

        <!-- Marketplace section -->
        <div
          class="ml-6 my-4 px-3 py-3 w-12/12 md:w-8/12"
        >
            <nav class="ml-2 w-full text-gray-700" aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                  <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    Marketplace
                  </a>
                </li>
                
                <!-- Show based on categories -->
                <li>
                  <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">All</a>
                  </div>
                </li>
              </ol>
            </nav>


            <div class="ml-2 flex flex-row justify-between">
              <div class="mt-6 text-xs">
                Showing 1-12 of 200 products
              </div>

              <div class="mb-3 md:w-60">
                  <select class="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-2
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                      <option selected>Default</option>
                      <option value="1">Popularity</option>
                      <option value="2">Price:Low to High</option>
                      <option value="3">Price: High to Low</option>
                  </select>
                </div>
            </div>
            
            <p class="border-b border-gray-300"></p>

             <!-- Cards for all the rendered items -->
            <body class="antialiased text-gray-900 font-sans p-6">
              <div class="container mx-auto">
                <div class="flex flex-wrap -mx-4" >
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

            <!-- Pagination -->
            <div class="flex flex-row justify-between">
              
              <!-- Previous Button -->
              <a href="#" class="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg aria-hidden="true" class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                Previous
              </a>
              <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
                <svg aria-hidden="true" class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>

            </div>
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