<template>
    <v-card class="mx-auto" max-width="900">
      <v-container>
        <v-form ref="form">
          <v-text-field 
            v-model="name" 
            :counter="10" 
            :rules="nameRules" 
            label="Name" 
            required
          ></v-text-field>
  
          <v-select 
            v-model="selectItem" 
            :items="items" 
            :rules="[v => !!v || 'Item is required']" 
            label="Item" 
            required
          ></v-select>
  
          <v-text-field 
            v-model="amount" 
            :counter="1" 
            :rules="numberRules" 
            label="Amount" 
            required
          ></v-text-field>
  
          <v-row>
            <v-btn @click="submit" color="success">
              Submit
            </v-btn>
            <v-btn @click="clear">
              Clear
            </v-btn>
          </v-row>
        </v-form>
      </v-container>
  
      <v-container v-if="dialog">
        <mdialog :form="form" @close="dialog = false" />
      </v-container>
    </v-card>
  </template>
  
  <script>
  import mdialog from './childDialog.vue'; // Adjust the import based on the actual path of mdialog component
  
  export default {
    components: {
      mdialog
    },
    data() {
      return {
        name: '',
        selectItem: null,
        amount: '',
        dialog: false,
        form: {}, // Data to be passed to the mdialog
        items: ['Item 1', 'Item 2', 'Item 3'], // Example items for v-select
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
        numberRules: [
          v => !!v || 'Amount is required',
          v => /^\d+$/.test(v) || 'Amount must be a number'
        ]
      };
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          this.form = {
            name: this.name,
            selectItem: this.selectItem,
            amount: this.amount
          };
          this.dialog = true; // Show the mdialog
        }
      },
      clear() {
        this.name = '';
        this.selectItem = null;
        this.amount = '';
        this.dialog = false;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  