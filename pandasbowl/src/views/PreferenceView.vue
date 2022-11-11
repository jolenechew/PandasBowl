<template>
    <section class="bg-gray-50 dark:bg-gray-900 pb-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="hero min-h-screen">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Preferences</h1>
                    <p class="py-6">Please select your diet types so as to get customised results tailored to your preference.</p>
                    <!--is there any way to ensure that it does not show the bottom of the navigated page?-->
                    <!--button navigates to diet options-->
                    <a href="#select"><button class="btn btn-info">LET'S GO</button></a>
                    &nbsp;
                    <!--button navigates back to home page-->
                    <router-link to="/"><button class="btn btn-error">SKIP</button></router-link>
                    </div>
                </div>
            </div>

            <div class="hero-content text-center mb-8">
                <h1 class="text-5xl font-bold">Select your dietary preferences!</h1>
            </div>
            <!--diet type options (checkbox)-->
            <div class="flex flex-col border-opacity-50 pt-0" id="select">
                <div class="grid mb-4 h-20 card bg-base-300 rounded-box place-items-center">
                    <label for="vegan"><input type="checkbox" name="radio-1 " id="vegan" class="checkbox checkbox-accent"/> &nbsp; Vegan</label>
                </div>
                <br/>
                <div class="grid mb-4 h-20 card bg-base-300 rounded-box place-items-center">
                    <label for="vegetarian"><input type="checkbox" name="radio-2" id="vegetarian" class="checkbox checkbox-accent"/> &nbsp; Vegetarian</label>
                </div>
                <br/>
                <div class="grid mb-4 h-20 card bg-base-300 rounded-box place-items-center">
                    <label for="lowcarb"><input type="checkbox" name="radio-3" id="lowcarb" class="checkbox checkbox-accent"/> &nbsp; Low-carb</label>
                </div>
                <br/>
                <div class="grid mb-4 h-20 card bg-base-300 rounded-box place-items-center">
                    <label for="dairyfree"><input type="checkbox" name="radio-4" id="dairyfree" class="checkbox checkbox-accent"/> &nbsp; Dairy-free</label>
                </div>
                <br/>
                <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
                    <label for="glutenfree"><input type="checkbox" name="radio-5" id="glutenfree" class="checkbox checkbox-accent"/> &nbsp; Gluten-free</label>
                </div>
            </div>
            <br/><br/>
            <!--to lead back to homepage (for now)-->
            <div class="place-items-center hero">
                <router-link to="/login">
                    <button class="btn btn-success">FINISH</button>
                </router-link>
            </div>
        </div>


    </section>
</template>