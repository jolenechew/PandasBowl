<template>
  <div class="container mx-auto">
    <div class="flex-row">
      <!-- Filter portion -->
      <div
         class="col-md-3 col-sm-3 col-xs-12"
      >
        <!-- card -->
        <div class=" mx-6 my-4 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <!-- card title -->
            <p class="font-semibold text-slate-600 mb-4 text-xl">Filters</p>

            <p class="border-t border-gray-300"></p>

            <p class="font-semibold text-slate-500 mt-4 mb-4">Price Range</p>


            <Slider class="slider-blue" showTooltip="focus" tooltipPosition="bottom" v-model="value" :format="format" />

            <div class="flex justify-between">
              <p class="font-semibold text-slate-600 text-l">$0</p>
              <p class="font-semibold text-slate-600 text-l">$100</p>
            </div>

            <p class="border-b border-gray-300 mt-4"></p>

            <p class="font-semibold text-slate-500 mt-4 mb-4">Categories</p>

            <div class="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="default-checkbox" class="ml-2 text-sm font-medium text-slate-500 dark:text-gray-300">Vegan</label>
            </div>
            <div class="flex items-center">
                <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-slate-500 dark:text-gray-300">Vegetarian</label>
            </div>
        </div>
      </div>

      <!-- Marketplace section -->
      <div
        class="col-md-9 col-sm-9 col-xs-12"
      >
asdf
          
      </div>

    </div>
  </div>
</template>

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
        }
      }
    }
  }
</script>

<style>
  .slider-blue {
    --slider-connect-bg: #3B82F6;
    --slider-tooltip-bg: #3B82F6;
    --slider-handle-ring-color: #3B82F630;
  }
</style>

<style src="@vueform/slider/themes/default.css"></style>