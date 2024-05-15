<template>
  <v-dialog v-model="internalDialog" width="500">
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Data
      </v-card-title>
      <v-card-text>
        <div>Name: {{ form.name }}</div>
        <div>Item: {{ form.selectItem }}</div>
        <div>Amount: {{ form.amount }}</div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["form"],
  data() {
    return {
      internalDialog: true
    };
  },
  methods: {
    close() {
      this.internalDialog = false;
      this.$emit('close');
    }
  },
  watch: {
    internalDialog(val) {
      if (!val) {
        this.$emit('close');
      }
    }
  }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
