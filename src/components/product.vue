<template>
  <div>
    <v-container>
      <v-row>
        <v-btn
          color="success"
          @click="openNewProductDialog"
          class="ma-4"
          outlined
        >
          <v-icon> mdi-plus </v-icon>
        </v-btn>
        <v-btn
          color="info"
          class="ma-4"
          @click="openDisplayOrdersDialog"
          outlined
        >
          <v-icon> mdi-view-list </v-icon>
        </v-btn>
        <v-btn color="info" class="ma-4" @click="openCartDialog" outlined>
          <v-icon> mdi-cart </v-icon>
        </v-btn>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="4" v-for="(product, index) in products" :key="index">
          <v-card height="800">
            <v-img
              :src="
                product.imageUrl
                  ? product.imageUrl
                  : 'https://prod-printler-front-as.azurewebsites.net/media/photo/125232.jpg?mode=crop&width=727&height=1024&rnd=0.0.1'
              "
              contain
            ></v-img>
            <v-container>
              <v-card-title>
                <span>{{ product.name }}</span>
              </v-card-title>
              <v-card-subtitle>
                <span>Id:{{ product._id }}</span>
              </v-card-subtitle>
              <v-card-text>
                <span>Price:{{ product.price }}</span>
              </v-card-text>
              <v-card-text>
                <span>Stock:{{ product.stock }}</span>
              </v-card-text>
              <v-spacer></v-spacer>

              <v-container>
                <v-row justify="end">
                  <v-btn
                    color="light-blue darken-3"
                    class="ma-2"
                    @click="openEditProductDialog(product)"
                    outlined
                    >Edit</v-btn
                  >
                  <v-btn
                    color="red lighten-1"
                    class="ma-2"
                    @click="deleteProduct(product._id)"
                    outlined
                    >Delete</v-btn
                  >
                </v-row>
              </v-container>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="displayOrders" max-width="500px">
      <v-card width="600px">
        <v-container>
          <v-row v-for="(order, index) in orders" :key="index">
            <v-container>
              <h2>Order Id: {{ order._id }}</h2>
              <p>Amount: {{ order.amount }}</p>
              <p>Product : {{ order.productId }}</p>
              <v-divider></v-divider>
            </v-container>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="displayOrders = false"
              >Close</v-btn
            >
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>

    <!-- Cart Dialog -->
    <v-dialog v-model="showCartDialog" max-width="500px">
      <v-card width="600px">
        <v-container>
          <h>Hello</h>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="showCartDialog = false"
              >Close</v-btn
            >
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>

    <!-- New Product Dialog -->
    <v-dialog v-model="showNewProductDialog" max-width="500px">
      <new-product-dialog
        @close="showNewProductDialog = false"
        @refresh="getProducts"
      />
    </v-dialog>

    <!-- Edit Product Dialog -->
    <v-dialog v-model="showEditProductDialog" max-width="500px">
      <edit-product-dialog
        :product="selectedProduct"
        @close="showEditProductDialog = false"
        @refresh="getProducts"
      />
    </v-dialog>
  </div>
</template>

<script>
import NewProductDialog from "../components/crudProduct/newProduct.vue";
import EditProductDialog from "../components/crudProduct/editProduct.vue";
export default {
  components: {
    NewProductDialog,
    EditProductDialog,
  },

  created() {
    this.isLogged = this.checkLogged();
    this.getProducts();
  },
  data() {
    return {
      products: [],
      orders: [],
      cart: [],
      showNewProductDialog: false,
      showEditProductDialog: false,
      showCartDialog: false,
      selectedProduct: null,
      displayOrders: false,
      isLogged: false,
    };
  },
  methods: {
    async getProducts() {
      try {
        const userToken = this.$cookies.get("token");
        const res = await this.axios.get("http://localhost:3000/products", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        this.products = res.data.data.products;
        console.log(this.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    openCartDialog() {
      this.showCartDialog = true;
    },
    openNewProductDialog() {
      this.showNewProductDialog = true;
    },
    openEditProductDialog(product) {
      this.selectedProduct = product;
      this.showEditProductDialog = true;
    },
    async openDisplayOrdersDialog() {
      this.displayOrders = true;
      try {
        const userToken = this.$cookies.get("token");
        const res = await this.axios.get("http://localhost:3000/orders", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        this.orders = res.data.data.orders;
        console.log(this.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async deleteProduct(productId) {
      if (confirm(`Are you sure to delete ${productId}`)) {
        try {
          const userToken = this.$cookies.get("token");
          await this.axios.delete(
            `http://localhost:3000/products/${productId}`,
            {
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
            }
          );
          this.getProducts();
        } catch (error) {
          console.error("Error deleting product:", error);
        }
      }
    },
    checkLogged() {
      const userToken = this.$cookies.get("token");
      if (userToken) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
  },
};
</script>

<style></style>