<script>
import axios from "axios";
export default {
    data () {
        return {
          name:"",
          userAddress:"",
          totalSales:"",
          totalPurchase:""
        };
    },

    async created(){
        await axios.get('currentUser',
        {
            headers: {
            'Authorization': "Bearer " + localStorage.getItem("token")
            }
        })
        .then((response)=>{
          const user = response.data;
          this.name = user.name;
          this.address = user.address;
        });


              await axios.get('transactions/purchaseSum',
        {
            headers: {
            'Authorization': "Bearer " + localStorage.getItem("token")
            }
        })
        .then((response) => {
            this.totalPurchase = response.data;
        })
        .catch((error) => {
            console.log(error.message);
        });

         await axios.get('transactions/salesSum',
        {
            headers: {
            'Authorization': "Bearer " + localStorage.getItem("token")
            }
        })
        .then((response) => {
            this.totalSales = response.data;
        })
        .catch((error) => {
        console.log(error.message);
        });
    },

};
</script>
<template>
  <div>
    <navbar-component></navbar-component>
    <main class="profile-page">
      <section class="relative block" style="height: 500px;">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style='background-image: url("https://img.freepik.com/free-photo/concept-tasty-food-with-taco-white-background_185193-69605.jpg?w=2000");'
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px;"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-20 bg-gray-300">
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                >
                  <div class="relative">
                    <img
                      alt="..."
                      src="../assets/profileOne.jpg"
                      class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                      style="max-width: 150px;"
                    />
                  </div>
                </div>
                <div
                  class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                >
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  
                </div>
              </div>
              <div class="text-center mt-12">
                <h3
                  class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2"
                >
                  {{this.name}}
                </h3>
                <div
                  class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase"
                >
                  <i
                    class="fas fa-map-marker-alt mr-2 text-lg text-gray-500"
                  ></i>
                  {{this.address}}
                </div>
                <div class="flex flex-row justify-center mt-6">
                  <div class="p-6 mx-6 max-w-sm bg-lime-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Total Earned</h5>
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">${{this.totalSales}}</h5>
                        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to the
                           <router-link to="/myOrders" class="inline-flex items-center text-blue-600 hover:underline">
                              dashboard
                              <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                            </router-link> to view all the amounts earned from the sales of products.
                        </p>
                    </div>
                    <div class="p-6 mx-6 max-w-sm bg-rose-300 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Total Spent</h5>
                      <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">${{this.totalPurchase}}</h5>
                      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to the  <router-link to="/myOrders" class="inline-flex items-center text-blue-600 hover:underline">
                              dashboard
                              <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                            </router-link> to view all the amounts spent from the purchase of products.</p>
                      
                  </div>
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-gray-300 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed text-gray-800">
                      As a casual homebake and cake artist, {{this.name}} has
                      been baking since a tender age of 10. When the pandemic hit, {{this.name}}
                      was retrenched and has since looked toward selling homebakes for 
                      income. {{this.name}} promises to deliver food of the highest quality!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>