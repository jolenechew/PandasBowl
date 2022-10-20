const app = Vue.createApp({
    data() {
        return {
            search: '',
            recipes : [
                {id: 1,foodName: "Spaghetti",diet: "Vegan" ,image: "https://www.onceuponachef.com/images/2019/09/Spaghetti-and-Meatballs.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ", instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 2,foodName: "Baked Rice", diet: "Vegatarian",image:"https://www.dopenkitchen.com.sg/wp-content/uploads/2020/06/salmonbakedrice-500x500.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 3,foodName: "Fried Noodles", diet: "Vegan",image: "https://lh6.googleusercontent.com/DeHsaiZNjMgQ7KOMqu5BzSteUsVKf0obfPMqDtG16slGzEw397kdedJ9QB-6bZfMUQoLoYzvX0FLnzdJfKt8dxUOxd9J35c07xxJF6q1s6isM1YyiJOMj7nRERhbiXg8qQ96ZB6w=s0",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 4,foodName: "Fried Rice", diet: "Vegatarian",image: "https://www.jessicagavin.com/wp-content/uploads/2018/09/fried-rice-8-1200.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 5,foodName: "Cream Spaghetti", diet: "Keto",image: "https://www.errenskitchen.com/wp-content/uploads/2014/07/Creamy-Mushroom-Spaghetti-1-of-1-5.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 6,foodName: "Beef Wellington", diet: "Meat",image: "https://grillmomma.com/wp-content/uploads/2020/12/IMG_1986_jpg-3-1080x1440.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 7,foodName: "Chicken Rice", diet: "Meat",image: "https://singaporelocalfavourites.com/wp-content/uploads/2017/11/singapore-hainanese-roasted-chicken-rice.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: false},
                {id: 8,foodName: "Mac & Cheese", diet: "Dairy",image: "https://www.allrecipes.com/thmb/CanMXBeN-9DZyRSzDxLAoy0w-t8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/238691-Simple-Macaroni-And-Cheese-mfs_006-f7f521c65f894aef85e17bc9125c2c4a.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: false}
            ],
        }
    },
    methods: {
        
    },

    computed: {
        searchList() {
            if (this.search.trim().length) {
                return this.recipes.filter((recipe) => recipe.foodName.toLowerCase().includes(this.search.trim().toLowerCase()))
            }
            return this.recipes
        }
    }


})

app.mount('#app')


