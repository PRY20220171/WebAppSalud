<template>
  <v-main class="fill-height" fluid>
    <Login />
  </v-main>
</template>

<script>
  //import HelloWorld from '../components/HelloWorld'
//import Login from '@/components/Login.vue';
import Login from './/Login.vue';

  export default {
    name: 'Home',

    components: {
    //HelloWorld,
    Login,
},
  }
</script>
