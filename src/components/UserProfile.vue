<template>
  <div>
    <a href="#" @click="goBack" style="color: green">Go to the user list</a>
    <h1>{{ userData.name }}</h1>
    <ul>
      <li>{{ userData.phone }}</li>
      <li>{{ userData.email }}</li>
      <li>{{ userData.website }}</li>
    </ul>
    <router-link
      v-if="`${parseInt(this.$route.params.id, 10) - 1}` > 0"
      :to="previousUserLink"
      ><button style="background-color: red">Previous User</button></router-link
    >

    <router-link :to="link">Posts</router-link>

    <router-link
      v-if="`${parseInt(this.$route.params.id, 10) + 1}` <= 10"
      :to="nextUserLink"
      ><button style="background-color: blue">Next User</button></router-link
    >
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      userData: {},
    };
  },
  watch: {
    $route: "fetchData",
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch(
        `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`
      )
        .then((res) => res.json())
        .then((data) => (this.userData = data));
    },
    goBack() {
      this.$router.push("/");
    },
  },
  computed: {
    link() {
      return `/user/${this.$route.params.id}/posts`;
    },
    nextUserLink() {
      return `/user/${parseInt(this.$route.params.id, 10) + 1}/`;
    },
    previousUserLink() {
      return `/user/${parseInt(this.$route.params.id, 10) - 1}/`;
    },
  },
};
</script>

<style>
</style>