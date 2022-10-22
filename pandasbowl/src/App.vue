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
        loggedIn: localStorage.getItem('token')
      }
    },
    created (){
      this.emitter.on('loggedIn', (evt) => {
        this.loggedIn = evt.eventContent;
      })
      
    }
  }
</script>

<template>
  <fragment>

    <SignedInNavBar v-if="loggedIn"/>
    <Navbar v-else/>
    <router-view/>
  </fragment>
</template>

