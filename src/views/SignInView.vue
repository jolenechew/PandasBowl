<script>
  import axios from 'axios';

  export default{
      data(){
          return {
              username: '',
              password: '',
          }
      },
      methods:{
          async handleSubmit(){
            const response = await axios.post('login', null, {params: {
                username: this.username,
                password: this.password
            }}).catch(() => {
                alert("Please enter the correct Login credentials!");
            });

            localStorage.setItem('token', response.data.access_token);
            this.emitSignIn();
            this.route();
          },
          async route(){
              await this.$router.push('/marketplace');
              this.$router.go();
          },
          emitSignIn() {
              this.emitter.emit('loggedIn', {'eventContent': localStorage.getItem('token')})
          }
      }
  }
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900 w-full h-screen">
  <div class="flex flex-col items-center justify-center">
      <a href="#" class="mt-20 flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-36 h-36 mr-2 rounded-full" src="../assets/pandasBowlLogo.jpg" alt="logo">
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 md:mb-10">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                      <input type="username" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="username" placeholder="Username" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="password" required="">
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" class=" w-full text-slate-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#FFF8EA] hover:bg-orange-200">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <router-link to="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</router-link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
</template>
