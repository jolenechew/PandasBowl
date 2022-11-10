<script>

  import axios from "axios";

  export default {
    data() {
      return {
        formData: null,
        formDataImage: null,
        search: '',
        showModal: true,
        foodName: '',
        hasRecipe:false,
        instructions: '',
        imageUrl: '',
        info: '',
        ingredients: '',
        inputIngredients:[],
        diet: [],
        price:'',
        products:[],
        urlInfo:"https://api.spoonacular.com/recipes/analyze?apiKey=9540bce016ee479e87f5f7d88feba48e",
      }
    },
    async created() {
      const listedFoodItems = await axios.get('fooditems/userlist',
        {
          headers: {
            'Authorization': "Bearer " + localStorage.getItem("token")
          }
        }
      );

      this.setListedFoodItems(listedFoodItems);
    },
    methods: {
        setListedFoodItems(response){
          this.products = response.data;
          console.log(this.products);
        },
        onFileSelected(){
          let file = this.$refs.uploadFoodImage.files[0];
          this.formDataImage = new FormData();
          console.log(file);
          this.formDataImage.append("file", file);
        },
        toggleModal() {
            this.showModal = !this.showModal
        },
        async route(){
            await this.$router.push('/myListings');
            this.$router.go();
        },
        //Obtain information from the spoonacular API
       async getInformation() {
          await axios.post(this.urlInfo, {
              language: "en",
              includeNutrition: true,
              includeTaste: true,
              title: this.foodName,
              servings: 1,
              ingredients: this.inputIngredients,
              instructions: this.instructions,
            })
            .then((response) => {
              console.log(this.diet);
              this.diet = response.data.diets;
            })
            .catch((error) => {
              console.log(error.message);
            });
        },

      createRecord(){
          console.log(this.diet);
          axios.post('fooditems/addFood', {
              foodName: this.foodName,
              price: this.price,
              hasRecipe: this.hasRecipe,
              instructions: this.instructions,
              image: this.imageUrl,
              info: this.info,
              diet: this.diet,
              ingredients: this.inputIngredients,
          },
          {
            headers: {
              'Authorization': "Bearer " + localStorage.getItem("token")
            }
          }).then(() => {
            this.foodName = '';
            this.hasRecipe = false;
            this.instructions = '';
            this.formDataImage = null;
            this.imageUrl="";
            this.info = '';
            this.ingredients = '';
            this.diet = '';
            this.price ='';
          }).catch((error) => {
            console.log(error.message);
          });
      },

      async getInformationAndCreateRecord(){
        await this.getInformation();
        await this.createRecord();

        this.route()
      },

      async handleSubmit(){
          //Let us perform two axios post here first to get the url after posting the image and second to save the food image.
          await axios({
              url: '/image',
              method: 'POST',
              data: this.formDataImage,
              headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data'
              }
            }).then(response => {
              let responseArr = response.data.split("/");
              this.imageUrl = "https://" + responseArr[3] + ".s3." + responseArr[2] + "/" + responseArr[4];

                this.inputIngredients = this.ingredients.split(",");
                console.log(this.imageUrl);
                console.log(this.ingredients);

                this.getInformationAndCreateRecord();
            })
        }
    },
    computed:{
      searchedList() {

          var output = this.products;

          if (this.search.trim().length) {
              output = output.filter((recipe) => recipe.foodName.toLowerCase().includes(this.search.trim().toLowerCase()))
          }

          return output;
      },
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
                        <input type="text" id="simple-search" v-model="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
                    </div>
                </form>

                
            </div>

            <p class="border-b border-gray-300 mt-4"></p>

             <!-- Cards for all the rendered items -->
            <body class="antialiased text-gray-900 font-sans">
              <div class="container mx-auto">
                <div class="flex flex-wrap -mx-4" >
                    
                    <!-- First card to add more cards -->
                  <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4" @click="toggleModal()">
                    <div class="c-card block bg-green-200 hover:bg-green-300 shadow-md hover:shadow-xl rounded-lg overflow-hidden ">
                      <div class="relative pb-48 overflow-hidden md:ml-36 ml-28 mt-32">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" class="absolute"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                      </div>
                    </div>
                  </div>

                  <!-- Every other card that comes thereafter -->
                  <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"  :key="product.id" v-for="product in searchedList">
                    <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                      <div class="relative pb-48 overflow-hidden">
                        <img class="absolute inset-0 h-full w-full object-cover" :src="product.image" alt="">
                      </div>
                      <div class="p-4">
                       <div class="flex items-center">
                            <span class="text-lg font-semibold"></span><span class="font-bold text-lg">{{product.foodName}}</span>
                          </div>
                          <p class="mt-1 text-sm">{{product.info}}</p>
                          <div class="mt-2 flex items-center">
                            <button type="button" class="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">Edit listing</button>
                          </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </body>
        </div>       
    </div>

     <div class="fixed z-50 w-full sm:inset-0 h-modal sm:h-full" :class="{hidden: showModal}">
            <div class="w-full h-full fixed bg-black opacity-50"></div>
            <div class="relative mx-auto w-full max-w-md">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" @click="toggleModal()">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="py-6 px-6 lg:px-8" style="margin-top:5vh">
                        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add a new food listing!</h3>
                        <form @submit.prevent="handleSubmit" class="space-y-3" action="#">
                            <div class="grid gap-4 grid-cols-2">
                              <div>
                                 <label for="foodName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Food Name:</label>
                                <input name="foodName" id="foodName" v-model="foodName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                              </div>
                               <div>
                                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price:</label>
                                <input name="price" id="price" v-model="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                               </div>              
                            </div>
                            <div>
                                <label for="information" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Information:</label>
                                <input name="information" id="information" v-model="info" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                            </div>
                            <div>
                                <label for="ingredients" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ingredients:</label>
                                <textarea id="message" rows="2" v-model="ingredients" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></textarea>
                            </div>
                            <div>
                                <label for="instructions" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Instructions:</label>
                                <textarea id="message" rows="2" v-model="instructions" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></textarea>
                            </div>
                            <div class="flex justify-center items-center w-full">
                              <label v-if="formDataImage === null" for="dropzone-file" class="flex flex-col justify-center items-center w-full h-18 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                  <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                      <svg aria-hidden="true" class="mb-3 w-10 text-gray-400" style="height:30px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                      <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                  </div>
                                  <input id="dropzone-file" ref="uploadFoodImage" type="file" class="hidden" @change="onFileSelected"/>
                              </label>
                              <label v-else class="flex flex-col justify-center items-center bg-green-200 w-full h-18 rounded-lg border-2 border-gray-300">
                                  <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="mb-3 w-10 text-gray-400" style="height:60px" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                      <p class="text-xs text-gray-500 dark:text-gray-400">File has been successfully uploaded.</p>
                                  </div>
                              </label>
                          </div> 
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="hasRecipe" aria-describedby="hasRecipe" type="checkbox" v-model="hasRecipe" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="hasRecipe" class="text-gray-500 dark:text-gray-300">Item has recipe!</label>
                                </div>
                            </div>
                            <button type="submit" class="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Listing</button>
                        </form>
                    </div>
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