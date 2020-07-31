<template>
  <div class="home container-fluid">
    <div class="justify-content-center text-wrap card-columns">
      <div v-for="blog in blogs" :key="blog.id">
        <!-- <img :src="blog.creator.picture" alt="image" /> -->
        <div class="card m-3" style="width: 25rem;">
          <div class="card-header">
            <i>
              <b>Author's Email:</b>
            </i>
            {{blog.creatorEmail}}
          </div>
          <div class="card-body">
            <h5 class="card-title">
              <u>Blog Title:</u>
              <br />
              <br />
              <i>{{blog.title}}</i>
            </h5>
            <br />
            <p class="card-text">{{blog.body}}</p>
            <button class="btn btn-primary" @click="moveToActiveBlog(blog.id)">See More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },

  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
  },
  mounted() {
    this.$store.dispatch("getBlogs");
    console.log(this.$store.state.blogs);
  },

  methods: {
    moveToActiveBlog(blogId) {
      console.log(blogId);
      this.$router.push({ name: "ActiveBlog", params: { id: blogId } });
    },
  },

  components: {},
};
</script>