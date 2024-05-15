<template>
  <v-dialog v-model="loginDialog" width="500">
    <v-card>
      <v-card-title class="text-h5 grey lighten-2"> Login </v-card-title>
      <v-container>
        <v-form ref="form">
          <v-text-field
            v-model="username"
            :counter="20"
            :rules="nameRules"
            label="Username"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </v-form>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="submit" color="success" class="mr-4"> Submit </v-btn>
        <v-btn color="blue darken-1" text @click="close">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { EventBus } from "@/EvenBus";
export default {
  data() {
    return {
      loginDialog: true,
      username: "",
      password: "",
      form: [],
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 6 || "Password must be at least 6 characters",
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.form = {
          username: this.username,
          password: this.password,
        };
        this.login(this.form);
        this.loginDialog = false;
      }
    },
    close() {
      this.loginDialog = false;
      this.$emit("close");
    },
    async login(user) {
      console.log("test", user);
      try {
        const response = await this.axios.post(
          "http://localhost:3000/login",
          user
        );
        this.result = response.data;
        this.$cookies.set("token", this.result.token, "1h");
        localStorage.setItem('username', this.result.user.username)
        EventBus.$emit("check-logged");
        EventBus.$emit("re-reload");
        console.log(this.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  watch: {
    loginDialog(val) {
      if (!val) {
        this.$emit("close");
      }
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>