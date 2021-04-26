<template>
  <div>
    <div v-for="user in users" :key="user.index">
      <user-item :user="user"></user-item>
    </div>
  </div>
</template>

<script>
import UserItem from "./UserItem";
export default {
  components: { UserItem },
  name: "Home",
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((users) => {
        (this.users = users), console.log(this.users);
      });
  },
};
</script>

<style>
</style>