<template>
    <v-card>
      <v-card-title>
        <span>New Product</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field v-model="product.name" :rules="[v => !!v || 'Name is required']" label="Name" required></v-text-field>
          <v-text-field v-model="product.price" :rules="[v => !!v || 'Price is required']" label="Price" required></v-text-field>
          <v-text-field v-model="product.stock" :rules="[v => !!v || 'Stock is required']" label="Stock" required></v-text-field>
          <v-text-field v-model="product.imageUrl" label="Image URL"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        valid: false,
        product: {
          name: '',
          price: '',
          stock: '',
          imageUrl: '',
        }
      };
    },
    methods: {
      close() {
        this.$emit('close');
      },
      async save() {
        if (this.$refs.form.validate()) {
          try {
            const userToken = this.$cookies.get("token");
            await this.axios.post("http://localhost:3000/products", this.product, {
              headers: {
                Authorization: `Bearer ${userToken}`
              }
            });
            this.$emit('refresh');
            this.close();
          } catch (error) {
            console.error("Error saving product:", error);
          }
        }
      }
    }
  };
  </script>
  