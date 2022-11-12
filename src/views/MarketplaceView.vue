<script>
  import Slider from '@vueform/slider'
  import {ref} from "vue";

  import axios from "axios";

  const page = ref(1);
  const perPage = 12;

  export default {
    components: {
      Slider,
    },
    data() {
      return {
        isLoggedIn: localStorage.getItem('token'),
        value: 100,
        format: {
          prefix: '< $',
          decimals: 2
        },
        categoryList:['Vegan','Primal','Whole 30','Gluten free', 'Dairy free', 'Paleolithic'],
        categories: [],
        products:[],
        selectedOption: "default",
      }
    },
    async created() {
          const foodItems = await axios.get('fooditems/all');

          this.setFoodItems(foodItems);
    },
    methods: {
      setFoodItems(response){
        this.products = response.data;
        console.log(this.products);
      },
      nextPage(){
        console.log(Math.ceil(this.searchAndFilteredList.length / perPage))
        console.log(page.value)
        if (page.value !== Math.ceil(this.searchAndFilteredList.length / perPage)) {
          page.value += 1;
        }
      },
      backPage(){
        if (page.value !== 1) {
          page.value -= 1;
        }
      },
      goToPage(numPage){
        page.value = numPage;
      }
    },
    computed:{
      searchAndFilteredList() {

          var output = [];

          if(this.categories.length == 0){
            for(var item of this.products){
                if(item.price < this.value){
                    output.push(item);
                }
            }

            if(this.selectedOption == "popularity"){
              output.sort((a,b) => b.likes- a.likes);
            }
            
            if(this.selectedOption == "highToLow"){
              output.sort((a,b) => b.price- a.price);
            }

            if(this.selectedOption == "lowToHigh"){
              output.sort((a,b) => a.price- b.price);
            }

            return output;
          }

          if (this.categories.length) {
              for(let category of this.categories){
                  for(let item of this.products){
                      if(item.diet.includes(category.toLowerCase()) && item.price < this.value){
                          output.push(item);
                      }
                  }
              }
          }

          if(this.selectedOption == "popularity"){
            output.sort((a,b) => b.likes- a.likes);
          }

          if(this.selectedOption == "highToLow"){
            output.sort((a,b) => b.price- a.price);
          }

          if(this.selectedOption == "lowToHigh"){
            output.sort((a,b) => a.price- b.price);
          }

          return output;
      },
      paginatedData() {
        return this.searchAndFilteredList.slice((page.value - 1) * perPage, page.value * perPage)
      },
      currentPage(){
        return page.value
      },
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

            <div class="flex items-center mb-4" v-for="filter in categoryList" :key="filter">
                <input id="default-checkbox" type="checkbox" :value="filter" v-model="categories" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="default-checkbox" class="ml-2 text-sm font-medium text-slate-500 dark:text-gray-300">{{filter}}</label>
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
              <div class="mt-6 text-xs" v-if="searchAndFilteredList.length > 0">
                Showing {{(currentPage-1)*12+1}}-{{(currentPage*12 <= searchAndFilteredList.length) ? currentPage*12:searchAndFilteredList.length}} of {{searchAndFilteredList.length}} products
              </div>

              <div class="mt-6 text-xs" v-else>
                Showing 0 of 0 products
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
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" v-model="selectedOption">
                      <option selected value="default">Default</option>
                      <option value="popularity">Popularity</option>
                      <option value="lowToHigh">Price: Low to High</option>
                      <option value="highToLow">Price: High to Low</option>
                  </select>
                </div>
            </div>
            
            <p class="border-b border-gray-300"></p>

             <!-- Cards for all the rendered items -->
            <div v-if="searchAndFilteredList.length">
              <body class="antialiased text-gray-900 font-sans p-6">
                <div class="container mx-auto">
                  <div class="flex flex-wrap -mx-4" >
                    <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4" :key="product.id" v-for="product in paginatedData">
                      <div class="c-card block bg-green-50 shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                        <div class="relative pb-48 overflow-hidden">
                          <img class="absolute inset-0 h-full w-full object-cover" :src="product.image" alt="">
                        </div>
                        <div class="p-4">
                          <div class="flex items-center">
                            <span class="text-lg font-semibold"></span><span class="font-bold text-lg">{{product.foodName}}</span>
                          </div>
                          <p class="mt-1 text-sm">{{product.info}}</p>
                          <h2 class="mt-2 mb-2  font-bold">Price: ${{product.price.toFixed(1)}}</h2>
                          <div class="mt-2 flex items-center" v-if="isLoggedIn">
                            <router-link :to="'/foodCardView/' + product.id" class="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">
                              Purchase Now
                            </router-link>
                          </div>
                          <div class="mt-2 flex items-center" v-else>
                            <router-link :to="'/login'" class="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm pl-6 pr-8 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800 flex">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style="height:20px; width:25px;">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                              </svg>
                              Log in to view
                            </router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </body>

              <!-- Pagination -->
              <div class="flex flex-row justify-between">
                
                <!-- Previous Button -->
                <button @click="backPage" class="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <svg aria-hidden="true" class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                  Previous
                </button>
                <button @click="nextPage" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Next
                  <svg aria-hidden="true" class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>

              </div>
            </div>

            <div class="error" v-else>
              No products matches description!
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