
<script>
import axios from "axios";
import VueApexCharts from "vue3-apexcharts";
import { GoogleMap, Marker } from "vue3-google-map";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faClock, faUtensils } from "@fortawesome/free-solid-svg-icons";
import {useRoute} from "vue-router";
library.add(faClock, faUtensils);
export default {
  el: "#app",
  async mounted(){
    const route = useRoute();
    this.foodId = route.params.id;
    await axios.get('fooditems/fooditem', { params: { foodId: this.foodId } }) 
    .then((response) => {
        let currfood = response.data;
        this.foodName = currfood.foodName;
        this.foodImage = currfood.image;
        this.ingredients = currfood.ingredients;
        this.instructions = currfood.instructions;
        this.diet = currfood.diet;
        this.info = currfood.info;
        this.hbbName = currfood.username;
        this.hbbAddress = currfood.address;
        this.hasRecipe = currfood.hasRecipe;

        axios.get(this.urlMap, {
          params: {
            address: this.hbbAddress,
            key: "AIzaSyBr_1j_A_JjyD9ut5tQnmCyXjcYUJVqBmk",
          },
        }).then((response) => {
          let data = response.data;
          let coordinate = this.getLatLng(data);
          this.hbbLat = coordinate["lat"];
          this.hbbLng = coordinate["lng"];
          console.log(this.hbbLat + " " + this.hbbLng);
        })
    })
    .catch((error) => {
      console.log(error.message);
    });
  },
  data() {
    return {
      foodId:"",
      foodName: "",
      foodImage: "",
      ingredients: [],
      instructions: "",
      info: "",
      hasRecipe: false,
      hbbName: "",
      hbbAddress: "",
      hbbLat: "",
      hbbLng: "",
      servings: 1,
      urlNutrition:
        "https://api.spoonacular.com/recipes/guessNutrition?apiKey=9540bce016ee479e87f5f7d88feba48e",
      urlInfo:
        "https://api.spoonacular.com/recipes/analyze?apiKey=9540bce016ee479e87f5f7d88feba48e",
      urlMap: "https://maps.googleapis.com/maps/api/geocode/json",
      calories: 10,
      fat: 8,
      protein: 9,
      carbs: 4,
      diet: [],

      options: {
        plotOptions: {
          radar: {
            polygons: {
              strokeColor: "#e8e8e8",
              fill: {
                colors: ["#f8f8f8", "#fff"],
              },
            },
          },
        },
        dataLabels: {
          style: {
            colors: ["#000000", "#000000", "#000000"],
          },
        },
        fill: {
          colors: ["#F44336", "#E91E63", "#9C27B0"],
        },
        markers: {
            size: 6,
        },
        chart: {
          toolbar: {
            show: false
          },
          height: 450,
          type: "radar",
          fontFamily: "Times New Roman",
        },
        xaxis: {
          categories: ["Calories", "Fat", "Protein", "Carbs"],
          labels: {
            show: true,
            style: {
              colors: ["#000000", "#000000", "#000000", "#000000"],
              fontSize: "15px",
            },
          },
        },
      },
    };
  },
  computed: {
    series() {
      let newSeries = [
        {
          name: "",
          data: [this.calories, this.fat, this.protein, this.carbs],
        },
      ];
      return newSeries;
    },
    instructionsArray() {
      let arr = this.instructions.split(". ");
      let newArr = [];
      for (let item of arr) {
        if (arr.indexOf(item) !== arr.length-1){
          item += "."
        }
        newArr.push(item);
      }
      return newArr
    }
  },
  components: {
    apexchart: VueApexCharts,
    "font-awesome-icon": FontAwesomeIcon,
    GoogleMap,
    Marker,
  },
  beforeMount() {
    this.getNutritionAnalysis();
  },
  methods: {
    // update all the calories, fat, protein, carbs properties
    getNutritionAnalysis() {
      this.showAnalysis = true;
      axios
        .get(this.urlNutrition, {
          params: {
            title: "Butter Chicken", // this will be foodname
          },
        })
        .then((response) => {
          var obj = response.data;
          this.calories = obj.calories.value;
          this.fat = obj.fat.value;
          this.protein = obj.protein.value;
          this.carbs = obj.carbs.value;
          this.calories = this.calories * 0.129598;
        })
        .catch((error) => {
          console.log(error.message);
        });
    },

    getLatLng(data){
      var location = data["results"][0]["geometry"]["location"];
      return location;
    }
  },
};
</script>

<style scoped>
* {
  font-family: Georgia, "Times New Roman", Times, serif;
}
#app {
  min-height: 100%;
  width: 100%;
}

.bg-color {
  background-color: rgb(250, 250, 246);
}
.header-title {
  font-size: 40px;
}
.grey {
  background-color: rgb(232, 232, 232);
}
.subtitle {
  color: rgb(72, 32, 32);
}

.brush {
  font-family:Georgia, 'Times New Roman', Times, serif;
  color:grey;
}
.words {
  font-size:17px;
}
</style>

<template>
  <div id="app" class="h-screen">
    <div class="text-center">
      <div class="header-title mt-20 mb-4">{{ foodName }}</div>
      <i class="words">{{info}}</i>
      <br>
      <br>
      <div class="mx-auto">
        <div class="inline-block ml-8 text-xl subtitle">
          <font-awesome-icon icon="fa-solid fa-utensils" />
          <div class="ml-4 inline-block">Servings: {{ servings }}</div>
        </div>
      </div>
      <div class="btn-group float-right mr-32">
        <button class="btn btn-accent">Like</button>
        <button class="btn btn-primary">Share</button>
      </div>
    </div>

    <div class="flex flex-wrap mt-16 mx-32">
      <div class="w-full md:w-2/5 grey h-full">
        <img :src="foodImage" alt="img" style="min-height:700px;"/>
      </div>
      <div class="w-full md:w-3/5 bg-color p-8">
        <div>
          <span class="font-bold text-xl">Diet type: </span>
          <span class="words" v-for="(dietEntry, index) in diet" :key="index">
            {{ dietEntry }}
          </span>
        </div>
        <div v-if="hasRecipe">
          <br />
          <p class="font-bold text-xl">Ingredients: </p>
          <br/>
          <p class="ml-1">
            <ol class="list-none">
              <li v-for="(item, index) in ingredients" v-bind:key="index">
                <!-- <span class="text-4xl brush">{{index+1}}. &nbsp;</span> -->
                <span class="words">{{item}}</span>
              </li>
            </ol>
          </p>
        </div>
        <div v-if="hasRecipe">
          <br/>
          <span class="font-bold text-xl">Instructions: </span>
          <br />
          <div v-for="(instruct, index) in instructionsArray" v-bind:key="index" class="words">
            <span class="text-4xl brush">{{index+1}}. &nbsp;</span>{{ instruct }}</div>
        </div>
        <br>
        <div>
          <span class="font-bold text-xl">Nutrition Analysis: </span>
          <br><br>
          <div>
            <apexchart
              width="450"
              type="radar"
              :options="options"
              :series="series"
            ></apexchart>
          </div> 
        </div>
        <div>
          <span class="font-bold text-xl">Meetup Location:</span>
          <br>
          <br>
          <div class="words">Address: &nbsp; {{hbbAddress}}</div>
          <div id="map">
            <GoogleMap
            api-key="AIzaSyBr_1j_A_JjyD9ut5tQnmCyXjcYUJVqBmk"
            style="width: 100%px; height: 280px"
            :center="{lat: this.hbbLat, lng: this.hbbLng}"
            :zoom="15"
            >
            <Marker :options="{ position: {lat: this.hbbLat, lng: this.hbbLng} }" />
            </GoogleMap>
          </div>
        </div>
        <br>
        <hr>
        <div class="w-full p-2 words text-center">
          Recipe By: {{ hbbName }}
          <br>
          <br>
          <router-link to="/payment"
            ><button class="btn btn-accent w-full">BUY NOW</button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>