<script setup>
    import {ref} from "vue";

    const showMobileMenu = ref(true);
    const showProfile = ref(true);

    function clearLocalStorage(){
        localStorage.clear();
        window.location.assign("/");
    }
    
</script>

<template>
    <nav>
        <!-- desktop menu -->
        <div class="bg-[rgba(253,245,237,255)]">
            <div class=" mx-auto">
                <div class="flex justify-between">
                    <!-- menu -->
                    <div class="flex space-x-4">
                        <!-- logo -->
                        <router-link to="/" class="flex items-center space-x-2 py-1 px-2">
                            <img
                                src="../assets/pandasBowlLogo.jpg"
                                class="w-14 h-auto rounded-full"
                                alt="..."
                            />
                        </router-link>
                        <!-- menu -->
                        <div class="hidden md:flex items-center space-x-1">
                            <router-link to="/" class="menu-items font-sans">Home</router-link>
                            <router-link to="/recipe" class="menu-items font-sans">Recipes</router-link>
                            <router-link to="/marketplace" class="menu-items font-sans">Marketplace</router-link>
                        </div>
                        
                    </div>
                    
                    <div class="hidden md:flex items-center mr-3">
                        <!-- Profile logo -->
                        <div @click="showProfile = !showProfile" class="h-13 w-9">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div class="mt-2 py-2 w-48 bg-white rounded-lg shadow-xl absolute top-12 right-2 z-50" :class="{hidden: showProfile}">
                            <router-link to="/profile" class="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white" @click="showProfile = !showProfile">Profile</router-link>
                            <router-link to="/myListings" class="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white" @click="showProfile = !showProfile">My Listing</router-link>
                            <router-link to="/myOrders" class="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white border-b-2" @click="showProfile = !showProfile">My Orders</router-link>
                            <div class="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white" @click="showProfile = !showProfile; clearLocalStorage();">Sign Out</div>
                        </div>
                    </div>

                    <!-- button show mobile menu -->
                    <div @click="showMobileMenu = !showMobileMenu" class="md:hidden flex items-center">
                        <button class="py-2 px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-slate-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <!-- mobile menu -->

        <div class="md:hidden bg-[rgba(253,245,237,255)]" :class="{hidden: showMobileMenu}">
            <router-link to="/" class="block py-1 px-2 hover:text-black text-black-400" @click="showMobileMenu = !showMobileMenu">Home</router-link>
            <router-link to="/" class="block py-1 px-2 hover:text-black text-black-400" @click="showMobileMenu = !showMobileMenu">Recipes</router-link>
            <router-link to="/" class="block py-1 px-2 hover:text-black text-black-400" @click="showMobileMenu = !showMobileMenu">Marketplace</router-link>
            <router-link to="/login" class="block py-1 px-2 hover:text-black text-black-400" @click="showMobileMenu = !showMobileMenu">Login</router-link>
        </div>
    </nav>
</template>


<style scoped>
    /*changed the colour on hover to green-400 and made the text black for normal viewing */
    .menu-items{
        @apply py-4 px-4 font-semibold text-black hover:text-green-400;
    }
</style>