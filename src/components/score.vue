<template>
  <div>
    <v-row>
      <v-container>
        <v-form ref="form">
          <v-text-field v-model="input" label="Enter Score"></v-text-field>
          <v-btn success @click="compute(input)"> compute</v-btn>
          <v-text-field
            v-model="keyboard"
            label="message"
            placeholder="Type something"
            @input="handleKeyboardChange"
          ></v-text-field>
          <v-text-field
            disabled
            v-model="keyboard"
            label="two-binding check"
          ></v-text-field>
          <v-text-field
            disabled
            v-model="output"
            label="subscribe change by dividing with 2"
          ></v-text-field>
        </v-form>
      </v-container>
    </v-row>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      input: "",
      keyboard: "",
      output: "",
    };
  },
  methods: {
    compute(input) {
      const score = new Number(input);
      console.log("Your score is :", score);
      if (score >= 80 && score <= 100) {
        alert("Grade: A");
      } else if (score >= 70 && score <= 79) {
        alert("Grade: B");
      } else if (score >= 60 && score <= 69) {
        alert("Grade: C");
      } else if (score >= 50 && score <= 59) {
        alert("Grade: D");
      } else if (score >= 0 && score <= 49) {
        alert("Grade: F");
      } else {
        alert("input in must be number in range number 0-100");
      }
    },
    handleKeyboardChange() {
    //   this.output = this.keyboard.toUpperCase();
    this.output = this.keyboard/2
    },
  },
};
</script>
  
  <style>
</style>