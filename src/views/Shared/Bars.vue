<template>
  <div id="Bars" class="">
    <v-app-bar app color="white py-0" height="50px">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-container fluid class="align-center flex-wrap">
        <v-row class="mx-0">
          <v-col class="main_color--text text--darken-1 " >
            <h4 class="font-weight-regular">
              <v-icon left class="main_color--text text--darken-1">
                mdi-chevron-double-right
                </v-icon>
              {{ mainroute }}
            </h4>
          </v-col>
          <v-col class="main_color--text text--darken-2" >
            <h4 class="font-weight-regular" v-if="subroute!==''">
              <v-icon left class="main_color--text text--darken-2">
                mdi-chevron-double-right
                </v-icon>
                {{subroute}}
            </h4>
          </v-col>
        </v-row>

      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Salud++</v-list-item-title>
        </v-list-item>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <router-link :to="{name: 'Inicio'}" class="navbar-item">
              <v-list-item-title>
              Inicio
            </v-list-item-title>
          </router-link>
          </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-list-group v-for="item in menu" :key="item.name[0]" :value="false" :prepend-icon="item.name[1]">
          <template v-slot:activator>
            <v-list-item-title>{{item.name[0]}}</v-list-item-title>
          </template>
          <v-list-item v-for="([title, icon, link], i) in item.submenus" :key="i" link
            active-class="subcolor_0--text text--accent-4">
            <router-link :to="{'name': link}" class="navbar-item ">
              <span>{{title}}</span>
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </router-link>
          </v-list-item>
        </v-list-group>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-exit-run</v-icon>
            </v-list-item-icon>
            <v-list-item-content @click="logout">
              <v-list-item-title>Cerrar Sesión</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script src="../../components/Menu.js"></script>