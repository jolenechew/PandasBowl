<script setup>
import {defineProps} from 'vue'

const props = defineProps({
    letter:{
        type: String,
        default: "",
    },
    color: {
        type: String,
        default: ""
    }
});
</script>
<!-- inline-block align-middle
text-3xl text-center items-center justify-center  h-16 uppercase rounded-lg border-2 border-lime-900 transition-all duration-300" -->
<template>
    <div class="col-span-1 fdsalec text-3xl text-center items-center justify-center pt-3 h-16 uppercase rounded-lg border-2 border-lime-900 transition-all duration-300"
    :class="{
    'border-gray-500 bg-gray-500 text-white text-3xl text-center'
      : color == 'gray',
    'border-green-600 bg-green-500 text-white text-3xl text-center'
      : color == 'green',
    'border-yellow-500 bg-yellow-500 text-white text-3xl text-center'
      : color == 'yellow'
      }"
    >
        {{props.letter}}
    </div>
</template>

