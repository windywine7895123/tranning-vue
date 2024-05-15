<template>
  <v-card class="mx-auto" max-width="900">
    <v-container>
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in carouselItems"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container>
    <v-row>
      <v-col cols="4" v-for="(card, index) in cards" :key="index">
        <v-card width="350" height="500">
          <v-img :src="card.imageUrl"></v-img>
          <v-card-title>
            <span>{{ card.name }}</span>
          </v-card-title>
          <v-card-subtitle>
            <span>price :{{ card.price }}</span>
          </v-card-subtitle>
          <v-card-text>
            <span>stock :{{ card.stock }}</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  created(){
    this.getProducts();
  },
  data() {
    return {
      carouselItems: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      cards: [
        
      ],
    };

  },
  methods:{
    async getProducts() {
      try {
        const userToken = this.$cookies.get("token");
        const res = await this.axios.get("http://localhost:3000/products", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        this.cards = res.data.data.products;
        console.log(this.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  }
};
</script>

<style></style>