<script setup>
  import FooterComponent from '../components/FooterComponent.vue';
  
</script>
<template>
  <div

  id="carouselExampleCrossfade"
  class="carousel slide carousel-fade relative h-fit"
  data-bs-ride="carousel"
>
<div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 h-fit">
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active float-left w-full h-full">
      <img
        src="../assets/foodCarouselOne.jpeg"
        class="block w-full h-full object-cover"
        alt="one"
      />
    </div>
    <div class="carousel-item float-left w-full h-full">
      <img
        src="../assets/foodCarouselTwo.jpeg"
        class="block w-full h-full object-cover"
        alt="two"
      />
    </div>
    <div class="carousel-item float-left w-full h-full">
      <img
        src="../assets/foodCarouselThree.jpeg"
        class="block w-full h-full object-fill"
        alt="three"
      />
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCrossfade"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCrossfade"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<!--made the text of contrasting colours to look a bit nicer-->
<section class="bg-white border-b py-8 bg-[#C8DBBE]">
      <div class="container max-w-6xl mx-auto">
        <div class="w-full mb-4">
          <div class="h-1 gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-5/6 sm:w-1/2 p-6">
            <h3 class="text-6xl text-white font-bold mb-3 tracking-tight pt-10">
              Sign up as a business! <span class="text-black">It'll blow your mind.</span>
            </h3>
            <p class="text-gray-600 mb-8 text-lg">
              We know how difficult it is as a home-based business to stay afloat during difficult times. Post your listings for free and get organic traffic from customers.
              <br />
              <br />

                  <!-- Images from:

                  <a class="text-pink-500 underline" href="https://undraw.co/">undraw.co</a> -->
                </p>
              </div>
              <div class="w-full sm:w-1/2 p-6">
                <img src="../assets/RoastedCauliflowerSalad.webp" class="rounded-lg h-128 w-full">
              </div>
            </div>
            <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700">
            <div class="flex flex-wrap flex-col-reverse sm:flex-row pt-10 pb-10">
              <div class="w-full sm:w-1/2 p-6 mt-6">
                <img src="../assets/RoastedCauliflowerSalad.webp" class="rounded-lg h-128 w-full">
              </div>
              <div class="w-full sm:w-1/2 p-6 mt-6">
                <div class="align-middle">
                  <h3 class="text-6xl text-white font-bold mb-3 tracking-tight pt-10">
                    Sign up as a customer! <span class="text-black">Why you ask?</span>
                  </h3>
                  <p class="text-gray-600 mb-8 text-lg">
                    It's so difficult to get recipes that are suited to the million different diet types out there. Fret not! We do the job for you so you can just focus on cooking and supporting local businesses.
                    <br />
                    <br />
                    <!-- Images from:

                <a class="text-pink-500 underline" href="https://undraw.co/">undraw.co</a> -->
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
    <!--Card 2-->
    <div class="card w-30 bg-white shadow-xl">
    <figure><img class="w-full" src="../assets/foodCarouselTwo.jpeg" /></figure>
    <div class="card-body">
      <h2 class="card-title text-black">
        Pizza Margherita
        <div class="badge badge-secondary">Recipe</div>
      </h2>
      <p class="text-black">Here is the archetype of a thin-crust pizza pie, a pizza margherita adorned simply in the colors of the Italian flag: green from basil, white from mozzarella, red from tomato sauce. </p>
      <div class="card-actions justify-end">
        <div class="badge badge-secondary badge-outline">Vegetarian</div> 
      </div>
    </div>

    <!--Card 3-->
    <div class="card w-100 bg-white shadow-xl">
    <figure><img class="w-full" src="../assets/foodCarouselTwo.jpeg" /></figure>
    <div class="card-body">
      <h2 class="card-title text-black">
        Keto Vanilla Cupcakes
        <p class="badge badge-md badge-accent text-white">Marketplace</p>
      </h2>
      <p class="text-black">These cupcakes are super easy to make and the texture is light, fluffy, and melt-in-your-mouth good.</p>
      <div class="card-actions justify-end">
        <div class="badge badge-primary badge-outline">Keto</div> 
        <div class="badge badge-error badge-outline">On Sale</div>
      </div>
    </div>
  </div>
  <!-- Inner -->

  <!-- Controls -->
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<!--made the text of contrasting colours to look a bit nicer-->
<section class="bg-white border-b py-8 bg-[#C8DBBE]">
      <div class="container max-w-6xl mx-auto">
        <div class="w-full mb-4">
          <div class="h-1 gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-5/6 sm:w-1/2 p-6">
            <h3 class="text-6xl text-white font-bold mb-3 tracking-tight pt-10">
              Sign up as a business! <span class="text-black">It'll blow your mind.</span>
            </h3>
            <p class="text-gray-600 mb-8 text-lg">
              We know how difficult it is as a home-based business to stay afloat during difficult times. Post your listings for free and get organic traffic from customers.
              <br />
              <br />

              <!-- Images from:
              <a class="text-pink-500 underline" href="https://undraw.co/">undraw.co</a> -->
            </p>
          </div>
          <div class="w-full sm:w-1/2 p-6">
            <img src="../assets/RoastedCauliflowerSalad.webp" class="rounded-lg h-128 w-full">
          </div>
        </div>
        <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700">
        <div class="flex flex-wrap flex-col-reverse sm:flex-row pt-10 pb-10">
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <img src="../assets/RoastedCauliflowerSalad.webp" class="rounded-lg h-128 w-full">
          </div>
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <div class="align-middle">
              <h3 class="text-6xl text-white font-bold mb-3 tracking-tight pt-10">
                Sign up as a customer! <span class="text-black">Why you ask?</span>
              </h3>
              <p class="text-gray-600 mb-8 text-lg">
                It's so difficult to get recipes that are suited to the million different diet types out there. Fret not! We do the job for you so you can just focus on cooking and supporting local businesses.
                <br />
                <br />
                <!-- Images from:
                <a class="text-pink-500 underline" href="https://undraw.co/">undraw.co</a> -->
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>

    <FooterComponent></FooterComponent>
  </fragment>
</template>

<style scoped>
    .carousel-items{
        @apply block w-full;
    }
    .card-items{
        @apply rounded overflow-hidden shadow-lg bg-white
    }
</style>