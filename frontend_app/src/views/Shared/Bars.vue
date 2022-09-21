<template>
  <div id="Bars" class="">
    <v-app-bar app color="white py-0" height="50px">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-container fluid class="align-center flex-wrap">
        <v-row class="mx-0">
          <v-icon class="main_color--text text--darken-1">mdi-chevron-double-right</v-icon>
        
          <v-col cols="3" class="main_color--text text--darken-1 " >
            <h4 class="font-weight-regular">Registrar paciente</h4>
          </v-col>
        
          <v-icon class="main_color--text text--darken-2">mdi-chevron-double-right</v-icon>
          <v-col cols="4" class="main_color--text text--darken-2 fill-height">
            <h4 class="font-weight-regular">Informacion general</h4>
          </v-col>
        </v-row>

      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary >
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-group v-for="item in menu" active-class="subcolor_0--text text--accent-4"
         :value="false" :prepend-icon="item.name[1]" >
          <template v-slot:activator>
            <v-list-item-title>{{item.name[0]}}</v-list-item-title>
          </template>
            <v-list-item v-for="([title, icon, link], i) in item.submenus" :key="i" link >
              <router-link :to="link"  class="navbar-item">{{title}}
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </router-link>
            </v-list-item>
          </v-list-group>

      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script src="../../components/_entities/Menu.js"></script>