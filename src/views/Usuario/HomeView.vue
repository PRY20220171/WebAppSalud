<template>

    <v-container fill-height fluid>
      <v-row fill-height>
        <v-col cols="12" md="6" style="border: 1px solid blue;">
          <v-row :column="$vuetify.breakpoint.mdAndDown">
            <v-col cols="12" lg="6" style="border: 1px solid red;">
              <v-btn block elevation="3" fab tile>1</v-btn>
            </v-col>
            <v-col cols="12" lg="6" style="border: 1px solid red;">
              <v-btn block elevation="3" fab tile>2</v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" style="border: 1px solid blue;">
          <v-row :column="$vuetify.breakpoint.mdAndDown">
            <v-col cols="12" lg="6" style="border: 1px solid red;">
              <v-btn block elevation="3" fab tile>3</v-btn>
            </v-col>
            <v-col cols="12" lg="6" style="border: 1px solid red;">
              <v-btn block elevation="3" fab tile>4</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  //import HelloWorld from '../components/HelloWorld'
//import Login from '@/components/Login.vue';
import Login from './LoginView.vue';

  export default {
    name: 'HomePage',
    components: {
    //HelloWorld,
    Login,
    },
    data () {
      return {
        isLogged:true,
      }
    },
  }
</script>
