<template>
  <div>
    <v-app-bar color="blue-grey darken-4" dark>
      <router-link :to="{ name: 'home' }">
        <v-img max-width="50" max-height="50"
          src="https://static.vecteezy.com/system/resources/previews/001/203/773/original/bird-png.png">
        </v-img>
      </router-link>
      <span>Robin</span>
      <v-spacer></v-spacer>
      <v-text-field placeholder="Search" hide-details="auto"></v-text-field>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => { }">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-app-bar color="blue-grey darken-2" max-height="45" dense>
      <v-app-bar-nav-icon color="grey lighten-4" tile class="pa1" @click.stop="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
        <span>ALL</span>
      </v-app-bar-nav-icon>
      <div class="mx2">
        <router-link :to="{ name: 'me' }">
          <v-btn color="grey lighten-4" tile plain large>
            <span>profile</span>
          </v-btn>
        </router-link>

        <router-link :to="{ name: 'score' }">
          <v-btn color="grey lighten-4" tile plain large>
            <span>grade</span>
          </v-btn>
        </router-link>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-app-bar color="blue-grey darken-4">
        <v-row>
          <v-icon color="grey lighten-4">mdi-account</v-icon>
          <span class="user">Hello, {{ user }}</span>
        </v-row>
      </v-app-bar>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <router-link :to="{ name: 'product' }">
            <v-list-item>
              <v-list-item-title>Product</v-list-item-title>
            </v-list-item>
          </router-link>
          <v-list-item v-if="isLogin == true">
            <v-list-item-title @click="logout()">Sign Out</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="isLogin == false">
            <v-list-item-title @click="open()">Sign In</v-list-item-title>
          </v-list-item>

          <router-link :to="{ name: 'register' }">
            <v-list-item v-if="isLogin == false">
              <v-list-item-title>Register</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container v-if="dialog == true">
        <login-dialog @close="dialogEvent" />
      </v-container>
      <router-view />
    </v-main>

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="blue-grey darken-4">
          <strong class="subheading">Get connected with us on social networks!</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import { EventBus } from '@/EvenBus'
import loginDialog from "../components/loginDialog.vue";
export default {
  components: {
    loginDialog,
  },
  mounted() {
    EventBus.$on('check-logged', this.checkLoggedUser);
    EventBus.$on('re-reload', this.reload);
  },
  created() {
    this.checkLoggedUser();
    if(localStorage.getItem('username')){
      this.user= localStorage.getItem('username')
    }else {
      this.user= 'SignIn'
    }
  },
  data: () => ({
    isLogin: false,
    drawer: false,
    group: null,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    user: '',
    dialog: false,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    open() {
      this.dialog = true;
    },
    logout() {
      this.isLogin = false;
      this.$cookies.remove("token");
      localStorage.removeItem('username')
      location.reload();
    },
    reload() {
      location.reload();
    },
    dialogEvent() {
      this.dialog = false;
    },
    checkLoggedUser() {
      const userToken = this.$cookies.get("token");
      if (userToken) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }     
    }
  },
};
</script>

<style>
.user {
  color: white;
}
</style>