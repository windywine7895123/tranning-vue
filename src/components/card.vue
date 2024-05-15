<template>
  <v-card class="mx-auto" max-width="900" id="card">
    <header>
      <div class="container">
        <h1>User Profile</h1>
      </div>
    </header>

    <div class="container profile">
      <v-avatar class="profile-img" size="126" rounded>
        <!-- <v-img src ="https://i.pinimg.com/474x/57/e7/cd/57e7cdf32f6e3e046697ef3eb0d8d27a.jpg" /> -->
        <v-img
          src="https://stickershop.line-scdn.net/stickershop/v1/product/24366318/LINEStorePC/main.png?v=1"
        />
      </v-avatar>
      <div class="profile-info">
        <h2>Papawin Muenpatthanakit (Pearl)</h2>
        <p>Software Engineer(?)</p>
        <p>Location: HatYai, Songkla, Thailand</p>
      </div>
    </div>

    <div class="container bio">
      <h3>Bio</h3>
      <li>Gradute: Prince of Songkla University since 2024</li>
      <li>Degree: Bachelor's degree of Computer Engineering</li>
      <h3>Weak</h3>
      <p>
        html/css design, low exprience ,waste more time to learning something,
        Gacha
      </p>
      <h3>Good At</h3>
      <p>Umm..i don't know. i thought i'm just simple person</p>
    </div>

    <div class="container contact-info">
      <h2>Contact Information</h2>
      <ul>
        <li>Email: pearlpapawin119@gmail.com</li>
        <li>Phone: +6618468192</li>
      </ul>
    </div>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
#card {
  background-color: beige;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}
.profile {
  display: flex;
  align-items: center;
  margin-top: 20px;
  background-color: #f3dbc3;
}
.profile-img {
  width: 150px;
  height: 150px;
  margin-right: 20px;
}

.profile-info {
  flex-grow: 1;
}

.bio,
.contact-info {
  margin-top: 20px;
  background-color: #f3dbc3;
}

h2 {
  color: #333;
}

ul {
  list-style: none;
  padding: 0;
}
</style>