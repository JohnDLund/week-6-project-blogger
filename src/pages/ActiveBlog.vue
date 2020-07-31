<template>
  <div class="m-5 p-5">
    <div class="card mt-5 mx-5 mb-2" style="width: 40rem;">
      <div class="card-header">{{activeBlog.title}}</div>
      <img class="card-img" :src="activeBlog.creator.picture" alt="Card image cap" />
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>{{activeBlog.body}}</p>
          <footer class="blockquote-footer">
            {{activeBlog.creator.name}}
            <br />
            <cite title="Source Title">{{activeBlog.creator.email}}</cite>
          </footer>
        </blockquote>
      </div>
      <button class="btn btn-primary" @click="commentsClicked = true">Comments</button>
    </div>
    <div v-if="commentsClicked">
      <comments v-for="comment in comments" :commentData="comment" :key="comment.id"></comments>
    </div>
  </div>
</template>


<script>
import comments from "../components/comments";
export default {
  name: "ActiveBlog",

  data() {
    return {
      commentsClicked: false,
    };
  },

  mounted() {
    this.$store.dispatch("getActiveBlog", this.$route.params.id);
  },

  computed: {
    activeBlog() {
      return this.$store.state.activeBlog;
    },
    comments() {
      return this.$store.state.comments;
    },
  },
  methods: {},

  components: {
    comments,
  },
};
</script>


<style scoped>
</style>