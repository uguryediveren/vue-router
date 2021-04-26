<template>
  <div>
    <div v-for="(post, index) in userPosts" :key="index">
      <h4>{{ post.title }}</h4>
      <p>{{ post.body }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserPosts",
  data() {
    return {
      userPosts: {},
    };
  },
  created() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.userId}`
    )
      .then((res) => res.json())
      .then((data) => (this.userPosts = data));
  },
};
</script>

<style>
</style>