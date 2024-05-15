<template>
    <div>
        <span>
            API CONNECT
            {{ result }}
        </span>
        <v-btn @click="getdata()">GET</v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            result: [],
            token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjNjOTI1NjQ1NTk0OWEzOWRjNWJmNTYiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE1NjYwNDk3LCJleHAiOjE3MTU2NjQwOTd9.pePkGYXzJKF-7M3S1T4tb5cBS0yc_AgFaClNutrPjFQ",
            body:{
                username:"admin",
                password:"Kaiijaow"
            }
        }
    },
    methods: {
        async getdata() {
            try {
                const response = await this.axios.post('http://localhost:3000/login',this.body, {
                    headers: {
                        Authorization: `Bearer ${this.token}` // Include bearer token in request headers
                    }
                });
                this.result = response.data; 
                console.log(this.result); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }
}
</script>

<style></style>