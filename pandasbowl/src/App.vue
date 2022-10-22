<script>
  import Navbar from "./components/NavBar.vue";
  import SignedInNavBar from "./components/SignedInNavBar.vue";

  export default{
    components:{
      Navbar,
      SignedInNavBar,
    },
    data() {
      return {
        isLoggedIn: localStorage.getItem('token'),
      }
    },
    created(){
      this.emitter.on('loggedIn', (evt) => {
        this.isLoggedIn = evt.eventContent;
      })
    }
  }
</script>

<template>
  <fragment>
    <SignedInNavBar v-if="isLoggedIn"/>
    <Navbar v-else/>
    <router-view/>
  </fragment>
</template>

