<template>
  <v-main class="fill-height" fluid>
    <v-if></v-if>
    <Login />
  </v-main>
</template>

<script>
  //import HelloWorld from '../components/HelloWorld'
//import Login from '@/components/Login.vue';
import Login from './LoginView.vue';

  export default {
    name: 'Home',
    components: {
    //HelloWorld,
    Login,
    data () {
      return {
        isLogged:true,
      }
    },
},
  }
</script>
