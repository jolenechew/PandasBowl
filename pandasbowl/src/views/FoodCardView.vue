<template>
  <div id="app">
    <div class="text-center">
      <div class="header-title mt-20 mb-4">{{ foodName }}</div>
      <div class="mx-auto">
        <div class="inline-block mr-8 text-xl subtitle">
          <font-awesome-icon icon="fa-solid fa-clock" />
          {{ time }} min
        </div>
        <div class="inline-block ml-8 text-xl subtitle">
          <font-awesome-icon icon="fa-solid fa-utensils" />
          <div class="ml-4 inline-block">Servings: {{ servings }}</div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap mt-16 mx-32">
      <div class="w-full md:w-1/2 bg-color p-8">
        <div>
          <span class="font-bold">Diet type: </span>
          <span v-for="(diet, index) in diets" :key="index">
            {{ diet }}
          </span>
        </div>
        <br />
        <div>
          <span class="font-bold">Ingredients: </span>
          <br />
          <p>
            {{ ingredients }}
          </p>
        </div>
        <br />
        <div>
          <span class="font-bold">Instructions: </span>
          <br />
          <div>{{ instructions }}</div>
        </div>
        <br />
        <div>
          <span class="font-bold"> Time Taken: </span>100min
          <div id="time-taken"></div>
        </div>
        <br />
      </div>
      <div class="w-full md:w-1/2 grey">
        <img src="https://www.simplyrecipes.com/thmb/P4yXPHE_78XC29Pg_MCUrVwmRgo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Spaghetti-Carbonara-LEAD-6-b3880a6eb49f4158be6f13885c797ded.jpg" alt="img" />
      </div>
      <div class="flex flex-wrap grey p-8 w-full">
        <div class="w-full md:w-1/2">
          <div class="border border-rose-900 mr-8 pt-4 pl-2">
            <apexchart
              width="450"
              type="radar"
              :options="options"
              :series="series"
            ></apexchart>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div class="text-lg mb-2 font-bold">
            Head down to {{ hbbName }} for a taste!
          </div>
          <GoogleMap
            api-key="AIzaSyBr_1j_A_JjyD9ut5tQnmCyXjcYUJVqBmk"
            style="width: 100%px; height: 280px"
            :center="center"
            :zoom="15"
          >
            <Marker :options="{ position: center }" />
          </GoogleMap>
        </div>
      </div>
      <div class="w-full grey text-center">
        By: {{ hbbName }}
        <router-link to="/payment"><button class="btn btn-primary">BUY NOW</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueApexCharts from "vue3-apexcharts";
import { GoogleMap, Marker } from "vue3-google-map";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faClock, faUtensils } from "@fortawesome/free-solid-svg-icons";
library.add(faClock, faUtensils);
// <div id='app'></div>
export default {
  el: "#app",
  data() {
    return {
      foodName: "Spaghetti Carbonara",
      ingredients: ["1 lb spaghetti", "3.5 oz pancetta", "2 Tbsps olive oil"],
      instructions:
        "Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta. Cook for 1 hour.",
      time: 100,
      hbbName: "Mao Mao Cooking",
      servings: 1,
      urlNutrition:
        "https://api.spoonacular.com/recipes/guessNutrition?apiKey=9540bce016ee479e87f5f7d88feba48e",
      urlInfo:
        "https://api.spoonacular.com/recipes/analyze?apiKey=9540bce016ee479e87f5f7d88feba48e",
      calories: 25,
      fat: 15,
      protein: 5,
      carbs: 15,
      diets: [],
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
        chart: {
          height: 450,
          type: "radar",
          fontFamily: "Times New Roman",
        },
        title: {
          text: "Nutritional Analysis",
          style: {
            fontSize: "23px",
            fontWeight: "bold",
            color: "#000000",
          },
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
          name: "Series 1",
          data: [this.calories, this.fat, this.protein, this.carbs],
        },
      ];
      return newSeries;
    },
  },
  components: {
    apexchart: VueApexCharts,
    "font-awesome-icon": FontAwesomeIcon,
    GoogleMap,
    Marker,
  },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };
    return { center };
  },
  beforeMount() {
    this.getInformation();
    this.getNutritionAnalysis();
  },
  methods: {
    getInformation() {
      axios
        .post(this.urlInfo, {
          language: "en",
          includeNutrition: true,
          includeTaste: true,
          title: "Spaghetti Carbonara",
          servings: this.servings,
          ingredients: this.ingredients,
          instructions: this.instructions,
        })
        .then((response) => {
          // console.log(response.data);
          console.log(response.data);
          this.diets = response.data.diets;
          // id, foodname, price, hasRecipe, instructions, ingredients
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
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
          // console.log(response.data);
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
  background-color: rgba(200, 219, 190, 255);
}
.bg-color {
  background-color: rgb(252, 242, 230);
}
.header-title {
  font-size: 40px;
}
.grey {
  background-color: rgb(237, 237, 237);
}
.subtitle {
  color: rgb(72, 32, 32);
}
</style>