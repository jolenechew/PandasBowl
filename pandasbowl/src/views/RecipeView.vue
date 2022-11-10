<script>
  import {ref} from "vue";

  import axios from "axios";

  const page = ref(1);
  const perPage = 12;

  export default {
    components: {

    },
    data() {
      return {
        isLoggedIn: localStorage.getItem('token'),
        search: '',
        format: {
          prefix: '< $',
          decimals: 2
        },
        categoryList:['Vegan','Primal','Whole 30','Gluten free', 'Dairy free', 'Paleolithic'],
        categories: [],
        // products:[
        // {id: 1,foodName: "Spaghetti",diet: "Vegan" ,image: "https://www.onceuponachef.com/images/2019/09/Spaghetti-and-Meatballs.jpg",info:"A staple food of traditional Italian cuisine. Like other pasta, spaghetti is made of milled wheat and water and sometimes enriched with vitamins and minerals. ", instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 10, isRecipe: true},
        //         {id: 2,foodName: "Baked Rice", diet: "Primal",image:"https://www.dopenkitchen.com.sg/wp-content/uploads/2020/06/salmonbakedrice-500x500.jpg",info:"Cheesy baked rice is like a fluffy down comforter: You just want to slide in and pull it up over your head. This one is especially calm-inducing with cream, buttery sautéed onions, and cheddar cheese,  ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 15, isRecipe: true},
        //         {id: 3,foodName: "Fried Noodles", diet: "Vegan",image: "https://lh6.googleusercontent.com/DeHsaiZNjMgQ7KOMqu5BzSteUsVKf0obfPMqDtG16slGzEw397kdedJ9QB-6bZfMUQoLoYzvX0FLnzdJfKt8dxUOxd9J35c07xxJF6q1s6isM1YyiJOMj7nRERhbiXg8qQ96ZB6w=s0",info:"A fusion food that incorporates Chinese yellow noodles with seasonings and spices typical of Malay and Indian cuisine ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 17, isRecipe: true},
        //         {id: 4,foodName: "Fried Rice", diet: "Whole 30",image: "https://www.jessicagavin.com/wp-content/uploads/2018/09/fried-rice-8-1200.jpg",info:"A dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 16, isRecipe: true},
        //         {id: 5,foodName: "Cream Spaghetti", diet: "Gluten free",image: "https://www.errenskitchen.com/wp-content/uploads/2014/07/Creamy-Mushroom-Spaghetti-1-of-1-5.jpg",info:"Rich, creamy white sauce mixed with butter and grated Parmesan cheese seasoned with pepper, and sometimes nutmeg. ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 18, isRecipe: true},
        //         {id: 6,foodName: "Beef Wellington", diet: "Dairy free",image: "https://grillmomma.com/wp-content/uploads/2020/12/IMG_1986_jpg-3-1080x1440.jpg",info:"Steak dish of English origin, made out of fillet steak coated with pâté (often pâté de foie gras) and duxelles, wrapped in puff pastry, then baked. ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 12, isRecipe: true},
        //         {id: 7,foodName: "Chicken Rice", diet: "Paleolithic",image: "https://singaporelocalfavourites.com/wp-content/uploads/2017/11/singapore-hainanese-roasted-chicken-rice.jpg",info:"Hainanese chicken rice is a dish of poached chicken and seasoned rice, served with chilli sauce and usually with cucumber garnishes.",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 14, isRecipe: true},
        //         {id: 8,foodName: "Mac & Cheese", diet: "Gluten free",image: "https://www.allrecipes.com/thmb/CanMXBeN-9DZyRSzDxLAoy0w-t8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/238691-Simple-Macaroni-And-Cheese-mfs_006-f7f521c65f894aef85e17bc9125c2c4a.jpg",info:"A dish of cooked macaroni pasta and a cheese sauce, most commonly cheddar. It can also incorporate other ingredients, such as breadcrumbs or meat ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 15, isRecipe: true},
        //         {id: 9,foodName: "Grilled Basil Chicken",diet: "Vegan" ,image: "https://www.afamilyfeast.com/wp-content/uploads/2013/07/Grilled-Basil-Garlic-Chicken-2.jpg",info:"A classic Thai stir-fry dish made with finely chopped or ground chicken cooked with chile peppers, garlic, and shallots, and seasoned with a sweet and salty sauce and finished with fresh basil ", instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 16, isRecipe: true},
        //         {id: 10,foodName: "Basil Rice", diet: "Primal",image:"https://www.acouplecooks.com/wp-content/uploads/2021/08/Thai-Basil-Fried-Rice-001.jpg",info:"Basil rice is seasoned with a mixture of soy sauce and oyster sauce to bring out the full flavor of the aromatic Thai basil herb. ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 17, isRecipe: true},
        //         {id: 11,foodName: "Miso Noodles", diet: "Vegan",image: "https://thefoodietakesflight.com/wp-content/uploads/2021/01/spicy-miso-noodles-11.png",info:" Miso is a Japanese seasoning paste made from fermenting soybeans with salt and koji.Miso has a strong umami flavor—the thick paste is deeply savory, with toasty, funky salty-sweet richness.",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 18, isRecipe: true},
        //         {id: 12,foodName: "Green Bean Rice", diet: "Whole 30",image: " https://assets.kraftfoods.com/recipe_images/opendeploy/502979_1_1_retail-47e2fa2e30d36954a29be97dc27474d60309ae33_642x428.jpg",info:" A popular comfort dish - a mixed rice recipe layered with green beans, spiced ground meat, tomatoes, herbs, lemon and infused with saffron ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 16, isRecipe: true},
        //         {id: 13,foodName: "Cantaloupe Gazpacho", diet: "Gluten free",image: "https://lepetiteats.com/wp-content/uploads/2018/08/IMG_0429.jpg",info:"Gazpacho or Gaspacho, also called Andalusian gazpacho, is a cold soup and drink made of raw, blended vegetables ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 15, isRecipe: true},
        //         {id: 14,foodName: "Reuben Sandwich", diet: "Dairy free",image: "https://www.recipetineats.com/wp-content/uploads/2019/04/Reuben-Sandwich_8-copy.jpg",info:"The Reuben sandwich is a North American grilled sandwich composed of corned beef, Swiss cheese, sauerkraut, and Thousand Island dressing or Russian dressing, grilled between slices of rye bread. ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 12, isRecipe: true},
        //         {id: 15,foodName: "Lemon Garlic Baked Tilapia", diet: "Paleolithic",image: "https://www.whiskaffair.com/wp-content/uploads/2020/08/Lemon-Garlic-Baked-Tilapia-2-3-1.jpg",info:"Baked tilapia is a weeknight dinner dream. The fish, which has a very mild taste, is a great way to get eaters who aren't big fans of fish and seafood to love it.  ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 14, isRecipe: true},
        //         {id: 16,foodName: "Tortilla Pizza", diet: "Gluten free",image: "https://bakeitwithlove.com/wp-content/uploads/2022/02/tortilla-pizza-sq.jpg",info:"This tortilla pizza is extremely easy to make. It is light enough to be a snack, serves well as an appetizer, or is so good that it can be devoured alone! You can use any sort of topping variation. The one below is the classic way I usually prepare it but feel free to experiment.",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 17, isRecipe: true},
        //         {id: 17,foodName: "Butter Chicken Rice",diet: "Vegan" ,image: "https://www.recipetineats.com/wp-content/uploads/2019/01/Butter-Chicken_5-SQ.jpg",info:"Butter chicken, traditionally known as murgh makhani, is an Indian dish. It is a type of curry made from chicken with a spiced tomato and butter sauce ", instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 14, isRecipe: true},
        //         {id: 18,foodName: "Fish in Foil", diet: "Primal",image:"https://www.allrecipes.com/thmb/4LHJn7qC2zzfypuZM8u-TEE6OaY=/960x960/filters:fill(auto,1)/3569458-4af971b8125842f2adb5c1a8f3457599.jpg",info:"Baked fish in foil is a 'no-smell' fish recipe, and the only one I make for my family (I hate fish, they love it!). ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 19, isRecipe: true},
        //         {id: 19,foodName: "Broccoli Chicken Divan ", diet: "Vegan",image: "https://thecozycook.com/wp-content/uploads/2021/04/Chicken-Divan-f.jpg",info:"Chicken Divan is a chicken casserole usually served with broccoli and Mornay sauce. It was named after the place of its invention, the Divan Parisien Restaurant at Chatham Hotel in New York City",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 17, isRecipe: true},
        //         {id: 20,foodName: "Club Sandwich", diet: "Whole 30",image: "https://static.toiimg.com/thumb/83740315.cms?imgsize=361903&width=800&height=800",info:"A club sandwich, also called a clubhouse sandwich, is a sandwich consisting of bread, sliced cooked poultry, ham, fried bacon, lettuce, tomato, and mayonnaise.",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 16, isRecipe: true},
        //         {id: 21,foodName: "French Dip Sandwich", diet: "Gluten free",image: "https://www.cookingclassy.com/wp-content/uploads/2017/10/slow-cooker-french-dip-sandwiches-4.jpg",info:"A French dip sandwich, also known as a beef dip, is a hot sandwich consisting of thinly sliced roast beef on a 'French roll' or baguette. ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 14, isRecipe: true},
        //         {id: 22,foodName: "Honey Glazed Chicken", diet: "Dairy free",image: "https://natashaskitchen.com/wp-content/uploads/2017/03/Baked-Honey-Glazed-Chicken-Drumsticks-2.jpg",info:"This honey chicken is cooked in a sticky-sweet sauce of honey, soy sauce, and red pepper flakes for a quick and delicious glazed chicken dinner. ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 12, isRecipe: true},
        //         {id: 23,foodName: "Southern Chicken Livers", diet: "Paleolithic",image: "https://www.gannett-cdn.com/-mm-/eac05761eaeb85c15127d143c97d43b570273b01/c=0-303-4541-2869/local/-/media/2017/11/21/Louisville/Louisville/636468613690462085-GospelBirdChickenLivers.jpg",info:"These crispy fried chicken livers are seasoned with garlic powder and ready to serve in just 20 minutes for a popular old-time Southern treat!",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 10, isRecipe: true},
        //         {id: 24,foodName: "Sirloin Steak", diet: "Gluten free",image: "https://www.wholesomeyum.com/wp-content/uploads/2019/05/wholesomeyum-How-To-Cook-Top-Sirloin-Steak-In-The-Oven-13.jpg",info:"In American butchery, the sirloin steak is cut from the sirloin, the subprimal posterior to the short loin where the T-bone, porterhouse, and club steaks are cut ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 25, isRecipe: true},
        // ],
        products:[],
      }
    },
    async created() {
          const foodItems = await axios.get('fooditems/recipes');

          this.setRecipedFoodItems(foodItems);
    },
    methods: {
      setRecipedFoodItems(response){
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

            var output = this.products;
            var outputTwo = [];

            if(this.categories.length == 0 && this.search.trim().length == 0){
                return output;
            }
            
            if (this.categories.length || this.search.trim().length) {
                
                if(this.categories.length == 0){
                    outputTwo = output;
                }else{
                    for(var category of this.categories){
                        for(var item of output){
                            if(item.diet.includes(category.toLowerCase()) === category){
                                outputTwo.push(item);
                            }
                        }
                    }
                }
                outputTwo = outputTwo.filter((recipe) => recipe.foodName.toLowerCase().includes(this.search.trim().toLowerCase()))
            }

            return outputTwo;
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
        <div class=" ml-6 my-6 p-6 h-96 w-12/12 md:w-3/12 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <!-- card title -->
            <p class="font-semibold text-slate-600 mb-4 text-xl">Filters</p>

            <p class="border-t border-gray-300"></p>

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
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                    Recipe
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
                <!-- No of products that are being shown -->
                <div class="mt-6 text-xs" v-if="searchAndFilteredList.length > 0">
                  Showing {{(currentPage-1)*12+1}}-{{(currentPage*12 <= searchAndFilteredList.length) ? currentPage*12:searchAndFilteredList.length}} of {{searchAndFilteredList.length}} products
                </div>

                <div class="mt-6 text-xs" v-else>
                  Showing 0 of 0 products
                </div>

                 <!-- Search bar -->
                <div class="mb-3 md:w-96">
                    <form class="flex items-center w-full">   
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-4 text-white-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="simple-search" v-model="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
                        </div>
                    </form>
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
                          <div class="mt-2 flex items-center" v-if="isLoggedIn">
                            <router-link :to="'/foodCardView/' + product.id" class="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">
                              Go to recipe
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