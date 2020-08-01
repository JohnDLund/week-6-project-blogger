<template>
  <div class="about text-center container-fluid">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt />
    <p>{{ profile.email }}</p>

      <div class="row justify-content-center">
    <div class="col-8">
    <div v-for="blog in blogs" :key="blog.id">
      <div class="card mt-4 mb-2">
        <div class="card-header">{{blog.title}}</div>
        <img class="card-img m-auto p-2" style="width: 25%" :src="blog.creator.picture" alt="Card image cap" />
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{{blog.body}}</p>
            <footer class="blockquote-footer">
              {{blog.creator.name}}
              <br />
              <cite title="Source Title">{{blog.creator.email}}</cite>
            </footer>
          </blockquote>
        </div>
        <button class="btn btn-primary" @click="commentsClicked = !commentsClicked">Comments</button>
      </div>
      <div v-if="commentsClicked">
        <comments v-for="comment in comments" :commentData="comment" :key="comment.id"></comments>
      </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import comments from "../components/comments";
export default {
  name: "Profile",
    data() {
    return {
      commentsClicked: false,
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    blogs() {
      return this.$store.state.profileBlogs;
    },
        comments() {
      return this.$store.state.comments;
    },

  },

  mounted() {
    this.$store.dispatch("getProfile");
    this.$store.dispatch("getProfileBlogs");
  },

  methods: {},

components: {
    comments,
  },
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
