<template>
    <div class="md:flex flex-row">

    <!-- Filters -->
    <div class=" ml-6 my-6 p-6 h-128 w-12/12 md:w-3/12 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            
            <p class="font-semibold text-slate-600 mb-4 text-xl">Filters</p>

            <p class="border-t border-gray-300"></p>

            <p class="font-semibold text-slate-500 mt-5 mb-5">Categories</p>
            
            <div class="flex items-center mb-4" v-for="filter in categoryList" :key="filter">
                <input id="default-checkbox" type="checkbox" :value="filter" v-model="categories" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="default-checkbox" class="ml-2 text-sm font-medium text-slate-500 dark:text-gray-300">{{filter}}</label>
            </div>
            <span>You have chosen: {{categories}}</span>
            <button @click="()=>resetfilter()" type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Reset</button>
            
    </div>
            <!-- Recipe section -->
            <div>
                <!-- search bar -->

                <div class="searchcontainer">
                    <h4>RECIPES</h4>
                    <input type="text" id="search-input"  v-model="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
                </div>

                <p class="border-b border-gray-300"></p>

                <!-- Cards -->
                <div class="card-container grid grid-cols-3 gap-4 sm:grid-cols 1 md: grid-cols 2 lg:grid-cols-3" v-if="searchAndFilteredList.length">
                        <div v-for="recipe in searchAndFilteredList" :key="recipe.id" class="card">
                            <img :src="recipe.image" alt="" class="card-img-top">
                            <div class="card-content">
                                <h5 class="card-title">{{recipe.foodName}}</h5>
                                <p class="card-text">{{recipe.info}}</p>
                                <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Read More</button>
                            </div>
                        </div>
                </div>

                <div class="error" v-else>
                        No Recipe Found: {{search}}
                </div>
            </div>

    </div>

</template>

<script>
export default {
    emits:['check-filter'],
    data() {
        return {
            search: '',
            categoryList:['Vegan','Primal','Whole 30','Gluten free', 'Dairy free', 'Paleolithic'],
            categories: [],
            recipes: [
                {id: 1,foodName: "Spaghetti",diet: "Vegan" ,image: "https://www.onceuponachef.com/images/2019/09/Spaghetti-and-Meatballs.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ", instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 2,foodName: "Baked Rice", diet: "Primal",image:"https://www.dopenkitchen.com.sg/wp-content/uploads/2020/06/salmonbakedrice-500x500.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 3,foodName: "Fried Noodles", diet: "Vegan",image: "https://lh6.googleusercontent.com/DeHsaiZNjMgQ7KOMqu5BzSteUsVKf0obfPMqDtG16slGzEw397kdedJ9QB-6bZfMUQoLoYzvX0FLnzdJfKt8dxUOxd9J35c07xxJF6q1s6isM1YyiJOMj7nRERhbiXg8qQ96ZB6w=s0",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 4,foodName: "Fried Rice", diet: "Whole 30",image: "https://www.jessicagavin.com/wp-content/uploads/2018/09/fried-rice-8-1200.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 5,foodName: "Cream Spaghetti", diet: "Gluten free",image: "https://www.errenskitchen.com/wp-content/uploads/2014/07/Creamy-Mushroom-Spaghetti-1-of-1-5.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 6,foodName: "Beef Wellington", diet: "Dairy free",image: "https://grillmomma.com/wp-content/uploads/2020/12/IMG_1986_jpg-3-1080x1440.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 7,foodName: "Chicken Rice", diet: "Paleolithic",image: "https://singaporelocalfavourites.com/wp-content/uploads/2017/11/singapore-hainanese-roasted-chicken-rice.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 8,foodName: "Mac & Cheese", diet: "Gluten free",image: "https://www.allrecipes.com/thmb/CanMXBeN-9DZyRSzDxLAoy0w-t8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/238691-Simple-Macaroni-And-Cheese-mfs_006-f7f521c65f894aef85e17bc9125c2c4a.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 9,foodName: "Grilled Basil Chicken",diet: "Vegan" ,image: "https://www.afamilyfeast.com/wp-content/uploads/2013/07/Grilled-Basil-Garlic-Chicken-2.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ", instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 10,foodName: "Basil Rice", diet: "Primal",image:"https://www.acouplecooks.com/wp-content/uploads/2021/08/Thai-Basil-Fried-Rice-001.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 11,foodName: "Miso Noodles", diet: "Vegan",image: "https://thefoodietakesflight.com/wp-content/uploads/2021/01/spicy-miso-noodles-11.png",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 12,foodName: "Green Bean Rice", diet: "Whole 30",image: " https://assets.kraftfoods.com/recipe_images/opendeploy/502979_1_1_retail-47e2fa2e30d36954a29be97dc27474d60309ae33_642x428.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 13,foodName: "Cantaloupe Gazpacho", diet: "Gluten free",image: "https://lepetiteats.com/wp-content/uploads/2018/08/IMG_0429.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 14,foodName: "Reuben Sandwich", diet: "Dairy free",image: "https://www.recipetineats.com/wp-content/uploads/2019/04/Reuben-Sandwich_8-copy.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 15,foodName: "Lemon Garlic Baked Tilapia", diet: "Paleolithic",image: "https://www.whiskaffair.com/wp-content/uploads/2020/08/Lemon-Garlic-Baked-Tilapia-2-3-1.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 16,foodName: "Tortilla Pizza", diet: "Gluten free",image: "https://bakeitwithlove.com/wp-content/uploads/2022/02/tortilla-pizza-sq.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 17,foodName: "Butter Chicken Rice",diet: "Vegan" ,image: "https://www.recipetineats.com/wp-content/uploads/2019/01/Butter-Chicken_5-SQ.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ", instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 18,foodName: "Fish in Foil", diet: "Primal",image:"https://www.allrecipes.com/thmb/4LHJn7qC2zzfypuZM8u-TEE6OaY=/960x960/filters:fill(auto,1)/3569458-4af971b8125842f2adb5c1a8f3457599.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 19,foodName: "Broccoli Chicken Divan ", diet: "Vegan",image: "https://thecozycook.com/wp-content/uploads/2021/04/Chicken-Divan-f.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 20,foodName: "Club Sandwich", diet: "Whole 30",image: "https://static.toiimg.com/thumb/83740315.cms?imgsize=361903&width=800&height=800",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 21,foodName: "French Dip Sandwich", diet: "Gluten free",image: "https://www.cookingclassy.com/wp-content/uploads/2017/10/slow-cooker-french-dip-sandwiches-4.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 22,foodName: "Honey Glazed Chicken", diet: "Dairy free",image: "https://natashaskitchen.com/wp-content/uploads/2017/03/Baked-Honey-Glazed-Chicken-Drumsticks-2.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 23,foodName: "Southern Chicken Livers", diet: "Paleolithic",image: "https://www.gannett-cdn.com/-mm-/eac05761eaeb85c15127d143c97d43b570273b01/c=0-303-4541-2869/local/-/media/2017/11/21/Louisville/Louisville/636468613690462085-GospelBirdChickenLivers.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 24,foodName: "Sirloin Steak", diet: "Gluten free",image: "https://www.wholesomeyum.com/wp-content/uploads/2019/05/wholesomeyum-How-To-Cook-Top-Sirloin-Steak-In-The-Oven-13.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
            ],
            temp:[
                {id: 1,foodName: "Spaghetti",diet: "Vegan" ,image: "https://www.onceuponachef.com/images/2019/09/Spaghetti-and-Meatballs.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ", instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 2,foodName: "Baked Rice", diet: "Primal",image:"https://www.dopenkitchen.com.sg/wp-content/uploads/2020/06/salmonbakedrice-500x500.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 3,foodName: "Fried Noodles", diet: "Vegan",image: "https://lh6.googleusercontent.com/DeHsaiZNjMgQ7KOMqu5BzSteUsVKf0obfPMqDtG16slGzEw397kdedJ9QB-6bZfMUQoLoYzvX0FLnzdJfKt8dxUOxd9J35c07xxJF6q1s6isM1YyiJOMj7nRERhbiXg8qQ96ZB6w=s0",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 4,foodName: "Fried Rice", diet: "Whole 30",image: "https://www.jessicagavin.com/wp-content/uploads/2018/09/fried-rice-8-1200.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 5,foodName: "Cream Spaghetti", diet: "Gluten free",image: "https://www.errenskitchen.com/wp-content/uploads/2014/07/Creamy-Mushroom-Spaghetti-1-of-1-5.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 6,foodName: "Beef Wellington", diet: "Dairy free",image: "https://grillmomma.com/wp-content/uploads/2020/12/IMG_1986_jpg-3-1080x1440.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 7,foodName: "Chicken Rice", diet: "Paleolithic",image: "https://singaporelocalfavourites.com/wp-content/uploads/2017/11/singapore-hainanese-roasted-chicken-rice.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 8,foodName: "Mac & Cheese", diet: "Gluten free",image: "https://www.allrecipes.com/thmb/CanMXBeN-9DZyRSzDxLAoy0w-t8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/238691-Simple-Macaroni-And-Cheese-mfs_006-f7f521c65f894aef85e17bc9125c2c4a.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 9,foodName: "Grilled Basil Chicken",diet: "Vegan" ,image: "https://www.afamilyfeast.com/wp-content/uploads/2013/07/Grilled-Basil-Garlic-Chicken-2.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ", instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 10,foodName: "Basil Rice", diet: "Primal",image:"https://www.acouplecooks.com/wp-content/uploads/2021/08/Thai-Basil-Fried-Rice-001.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 11,foodName: "Miso Noodles", diet: "Vegan",image: "https://thefoodietakesflight.com/wp-content/uploads/2021/01/spicy-miso-noodles-11.png",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 12,foodName: "Green Bean Rice", diet: "Whole 30",image: " https://assets.kraftfoods.com/recipe_images/opendeploy/502979_1_1_retail-47e2fa2e30d36954a29be97dc27474d60309ae33_642x428.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 13,foodName: "Cantaloupe Gazpacho", diet: "Gluten free",image: "https://lepetiteats.com/wp-content/uploads/2018/08/IMG_0429.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 14,foodName: "Reuben Sandwich", diet: "Dairy free",image: "https://www.recipetineats.com/wp-content/uploads/2019/04/Reuben-Sandwich_8-copy.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 15,foodName: "Lemon Garlic Baked Tilapia", diet: "Paleolithic",image: "https://www.whiskaffair.com/wp-content/uploads/2020/08/Lemon-Garlic-Baked-Tilapia-2-3-1.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 16,foodName: "Tortilla Pizza", diet: "Gluten free",image: "https://bakeitwithlove.com/wp-content/uploads/2022/02/tortilla-pizza-sq.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 17,foodName: "Butter Chicken Rice",diet: "Vegan" ,image: "https://www.recipetineats.com/wp-content/uploads/2019/01/Butter-Chicken_5-SQ.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ", instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 18,foodName: "Fish in Foil", diet: "Primal",image:"https://www.allrecipes.com/thmb/4LHJn7qC2zzfypuZM8u-TEE6OaY=/960x960/filters:fill(auto,1)/3569458-4af971b8125842f2adb5c1a8f3457599.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 19,foodName: "Broccoli Chicken Divan ", diet: "Vegan",image: "https://thecozycook.com/wp-content/uploads/2021/04/Chicken-Divan-f.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 20,foodName: "Club Sandwich", diet: "Whole 30",image: "https://static.toiimg.com/thumb/83740315.cms?imgsize=361903&width=800&height=800",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 21,foodName: "French Dip Sandwich", diet: "Gluten free",image: "https://www.cookingclassy.com/wp-content/uploads/2017/10/slow-cooker-french-dip-sandwiches-4.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 22,foodName: "Honey Glazed Chicken", diet: "Dairy free",image: "https://natashaskitchen.com/wp-content/uploads/2017/03/Baked-Honey-Glazed-Chicken-Drumsticks-2.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 23,foodName: "Southern Chicken Livers", diet: "Paleolithic",image: "https://www.gannett-cdn.com/-mm-/eac05761eaeb85c15127d143c97d43b570273b01/c=0-303-4541-2869/local/-/media/2017/11/21/Louisville/Louisville/636468613690462085-GospelBirdChickenLivers.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 24,foodName: "Sirloin Steak", diet: "Gluten free",image: "https://www.wholesomeyum.com/wp-content/uploads/2019/05/wholesomeyum-How-To-Cook-Top-Sirloin-Steak-In-The-Oven-13.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
            ],
        }
    },
    methods: {
        filterPosts(catName){
            this.temp = this.recipes.filter((recipe) =>{
                return recipe.diet === catName
            })
        },
        resetfilter(){
              this.categories = [];
        }
    },
    computed:{
        searchAndFilteredList() {

            var output = this.temp;
            var outputTwo = [];

            if(this.categories.length == 0 && this.search.trim().length == 0){
                return output;
            }

            if (this.categories.length || this.search.trim().length) {
                console.log("here");
                for(var category of this.categories){
                    for(var item of output){
                        if(item.diet === category){
                            outputTwo.push(item);
                        }
                    }
                }

                outputTwo = outputTwo.filter((recipe) => recipe.foodName.toLowerCase().includes(this.search.trim().toLowerCase()))
            }

            return outputTwo;
        },
    }
}

</script>

<style>
/* search/filter styling */
.searchcontainer{
    width: 50%;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
}

/* card styling */
.card-container{
    width: 80%;
    margin: auto;
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card-img-top{
    width: 100%; 
    height: 200px;
    object-fit: cover;
}

.card{
    width: 18rem;
    /* border: 5px solid #627650; */
    box-shadow: 0 6px 14px 0 rgba(0, 0, 0, 0.19);
    width: fit-content;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(auto-fill, 278px) ;
    grid-auto-rows: auto;
    margin: 5px;
    align-items: center;
    justify-content: flex-end;
    background-size: cover;
    background-position: center;
    background-color: rgb(226, 249, 226);
    
}



.card-content{
    padding: 10px 5px;
    width: 100%;
    transition: 300ms all;
}

.card:hover{
    transform: scale(1.1);
}

.card:hover .card-content{
    background-color: transparent;
}

.error{
    color: #D8000C;
    background-color: #FFBABA;
    text-align: center;
    font-size: large;
    font-weight: bold;
}

h4{
    color: #627650; 
    font-family: 'Helvetica Neue', sans-serif; 
    display: inline-block;
    font-size: 100px; 
    font-weight: bold; 
    letter-spacing: -1px; 
    line-height: 1; 
    text-align: center;
    padding: 10px 15px;
    margin-bottom: 0;
    width: 60%;
}

</style>