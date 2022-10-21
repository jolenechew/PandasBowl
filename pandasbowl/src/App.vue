<script>

  import Navbar from "./components/NavBar.vue";

  export default{
    components:{
      Navbar,
    },
  }
</script>

<template>
  <fragment>
    <Navbar/>
    <router-view/>
  </fragment>
</template>

