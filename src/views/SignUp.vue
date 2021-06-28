<template>
  <div>
    <HeaderAuth />
    <div class="card">
      <p>Registration</p>
      <div class="form">
        <input placeholder="Username" type="text" v-model="name" />
        <input placeholder="Email" type="email" v-model="email" />
        <input placeholder="password" type="password" v-model="password" />
        <button @click="auth">登録</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAuth from "../components/HeaderAuth";
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  components: {
    HeaderAuth
  },
  methods: {
    auth() {
      axios
        .post("https://git.heroku.com/calm-everglades-60962.git/api/register", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log(response);
          this.$router.replace("/");
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>

<style scoped>
button {
  width: 100px;
  text-align: center;
  padding: 8px 0 10px;
  color: #fff;
  background-color: #5419da;
  border-radius: 25px;
  cursor: pointer;
}
.card {
  margin: 100px auto;
  width: 350px;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
}
.card p {
  color: black;
  font-weight: bold;
  text-align: center;
}
input {
  margin-top: 15px;
  width: 80%;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid black;
  color: black;
}
.form {
  text-align: center;
}
.form button {
  margin-top: 15px;
}
</style>