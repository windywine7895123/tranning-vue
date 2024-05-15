<template>
    <v-card>
      <v-card-title>
        <span>Edit Product</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field v-model="editProduct.name" :rules="[v => !!v || 'Name is required']" label="Name" required></v-text-field>
          <v-text-field v-model="editProduct.price" :rules="[v => !!v || 'Price is required']" label="Price" required></v-text-field>
          <v-text-field v-model="editProduct.stock" :rules="[v => !!v || 'Stock is required']" label="Stock" required></v-text-field>
          <v-text-field v-model="editProduct.imageUrl" label="Image URL"></v-text-field>
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
    props: {
      product: {
        type: Object,
        required: true,
      }
    },
    data() {
      return {
        valid: false,
        editProduct: { ...this.product }
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
            await this.axios.put(`http://localhost:3000/products/${this.editProduct._id}`, this.editProduct, {
              headers: {
                Authorization: `Bearer ${userToken}`
              }
            });
            this.$emit('refresh');
            this.close();
          } catch (error) {
            console.error("Error updating product:", error);
          }
        }
      }
    }
  };
  </script>
  