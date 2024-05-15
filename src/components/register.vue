<template>
    <v-card class="mx-auto" max-width="900">
        <v-container>
            <h1>Register</h1>
            <v-form ref="form">
                <v-text-field v-model="username" :counter="20" :rules="nameRules" label="Username"
                    required></v-text-field>

                <v-text-field v-model="firstName" :counter="20" :rules="nameRules" label="First Name"
                    required></v-text-field>

                <v-text-field v-model="lastName" :counter="20" :rules="nameRules" label="Last Name"
                    required></v-text-field>

                <v-text-field v-model="password" :rules="passwordRules" label="Password" type="password"
                    required></v-text-field>

                <v-text-field v-model="confirmPassword" :rules="confirmPasswordRules" label="Confirm Password"
                    type="password" required></v-text-field>

                <v-container >
                    <v-row justify="center" >
                    <v-btn @click="submit" color="success" class="mr-4">
                        Submit
                    </v-btn>
                    <v-btn @click="clear">
                        Clear
                    </v-btn>
                </v-row>
                </v-container>
                
            </v-form>
        </v-container>

        <v-dialog v-model="dialog">
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    Submitted Data
                </v-card-title>
                <v-card-text>
                    <div>Username: {{ form.username }}</div>
                    <div>First Name: {{ form.firstName }}</div>
                    <div>Last Name: {{ form.lastName }}</div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDialog()">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-card>

</template>

<script>


export default {
    data() {
        return {
            username: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
            dialog: false,
            form: {},
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 20) || 'Name must be less than 20 characters'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => v.length >= 6 || 'Password must be at least 6 characters'
            ],
            confirmPasswordRules: [
                v => !!v || 'Confirm Password is required',
                v => v === this.password || 'Passwords must match'
            ]
        };
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.form = {
                    username: this.username,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    password: this.password
                };
                this.register(this.form)
                this.dialog = true; // Show the mdialog
            }
        },
        clear() {
            this.username = '';
            this.firstName = '';
            this.lastName = '';
            this.password = '';
            this.confirmPassword = '';
            this.dialog = false;
        },
        async register(form) {
            try {
                const res = await this.axios.post('http://localhost:3000/register', form)
                console.log(res.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        closeDialog() {
            this.dialog = false;
        }
    }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>