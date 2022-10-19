const app = Vue.createApp({
    data() {
        return {
            search: '',
            recipes : [
                {id: 1,foodName: "Spaghetti",diet: "Vegan" ,image: "img/spaghetti.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ", instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 2,foodName: "Baked Rice", diet: "Vegatarian",image:"img/bakedrice.jpg ",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 3,foodName: "Fried Noodles", diet: "Vegan",image: "img/friednoodles.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 4,foodName: "Fried Rice", diet: "Vegatarian",image: "img/friedrice.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 5,foodName: "Cream Spaghetti", diet: "Keto",image: "img/creamspa.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 6,foodName: "Beef Wellington", diet: "Meat",image: "img/beefwellington.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: true},
                {id: 7,foodName: "Chicken Rice", diet: "Meat",image: "img/creamspa.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: false},
                {id: 8,foodName: "Mac & Cheese", diet: "Dairy",image: "img/beefwellington.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere possimus deserunt veniam, ",instructions: "Some quick example text to build on the card title and make up the bulk of the card's content.", ingredients:"sugar, baking soda, salt, vanilla, yeast, spices and colors", price: 50, isRecipe: false}
            ]
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
