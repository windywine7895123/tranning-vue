<template>
    <div>
        <p v-if = "show == true">Hello</p>
        <V-btn @click="show = !show">show</V-btn>
        <v-btn @click="display()">alert</v-btn>

        
        <!-- Cards Section -->
        <v-row>
            <v-col cols="4" v-for="(card, index) in cards" :key="index">
                <v-card width="350">
                    <v-img :src="card.imageUrl"></v-img>
                    <v-card-title>
                        <span>{{ card.title }}</span>
                    </v-card-title>
                    <v-card-subtitle>
                        <span>{{ card.subtitle }}</span>
                    </v-card-subtitle>
                    <v-card-text>
                        <span>{{ card.description }}</span>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Carousel Section -->
        <v-row>
            <v-col cols="12">
                <v-carousel>
                    <v-carousel-item v-for="(item, i) in carouselItems" :key="i" :src="item.src"></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-carousel v-model="model">
                    <v-carousel-item v-for="(color, i) in colors" :key="color">
                        <v-sheet :color="color" height="100%" tile>
                            <v-row class="fill-height" align="center" justify="center">
                                <div class="text-h2">
                                    Slide {{ i + 1 }}
                                </div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
        <v-row>
            <receiver :name="name" />
        </v-row>
    </div>
</template>

<script>
export default {
    components: {
  },
    data() {
        return {
            cards: [
                {
                    title: 'Osiris',
                    subtitle: 'GODDDDD',
                    description: 'ATK ???? DEF ????',
                    imageUrl: 'https://i.pinimg.com/474x/57/e7/cd/57e7cdf32f6e3e046697ef3eb0d8d27a.jpg'
                },
                {
                    title: 'Rah',
                    subtitle: 'GODDDDD',
                    description: 'ATK ???? DEF ????',
                    imageUrl: 'https://i.pinimg.com/474x/57/e7/cd/57e7cdf32f6e3e046697ef3eb0d8d27a.jpg'
                },
                {
                    title: 'Obelisk',
                    subtitle: 'GODDDDD',
                    description: 'ATK 4000 DEF 4000',
                    imageUrl: 'https://i.pinimg.com/474x/57/e7/cd/57e7cdf32f6e3e046697ef3eb0d8d27a.jpg'
                }
            ],
            carouselItems: [
                { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
                { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
                { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
                { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' },
                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hAAcU8YPkbqqdsErpjWsljSX7fFS--H8OUBtzBI21Q&s' },
                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hAAcU8YPkbqqdsErpjWsljSX7fFS--H8OUBtzBI21Q&s' },
                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hAAcU8YPkbqqdsErpjWsljSX7fFS--H8OUBtzBI21Q&s' },
                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hAAcU8YPkbqqdsErpjWsljSX7fFS--H8OUBtzBI21Q&s' },
                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hAAcU8YPkbqqdsErpjWsljSX7fFS--H8OUBtzBI21Q&s' },
                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hAAcU8YPkbqqdsErpjWsljSX7fFS--H8OUBtzBI21Q&s' },
                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hAAcU8YPkbqqdsErpjWsljSX7fFS--H8OUBtzBI21Q&s' },
                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hAAcU8YPkbqqdsErpjWsljSX7fFS--H8OUBtzBI21Q&s' },
                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hAAcU8YPkbqqdsErpjWsljSX7fFS--H8OUBtzBI21Q&s' },
                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hAAcU8YPkbqqdsErpjWsljSX7fFS--H8OUBtzBI21Q&s' },
                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hAAcU8YPkbqqdsErpjWsljSX7fFS--H8OUBtzBI21Q&s' }
            ],
            colors: [
                'primary',
                'secondary',
                'yellow darken-2',
                'red',
                'orange',
            ],
            show:false,
            name: "I got it",
        };
    },
    methods:{
        display () {
            alert("HEllo");
        }
    }
};
</script>

<style>
/* Add custom CSS styles here if needed */
</style>