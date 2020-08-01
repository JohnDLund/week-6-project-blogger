<template>
  <div class="createNewBlog">
    <button
      type="button"
      class="btn btn-primary mr-5"
      data-toggle="modal"
      data-target="#CreateBlogPost"
      v-if="$auth.isAuthenticated"
    >Post a New Blog</button>
    <div
      class="modal fade"
      id="CreateBlogPost"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Create a New Blog Post</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="CreateBlogPost">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email ..."
                  v-model="newBlog.creatorEmail"
                />
              </div>
              <div class="form-group">
                <label for="title">Blog Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="Enter Blog Title ..."
                  v-model="newBlog.title"
                />
              </div>
              <div class="form-group">
                <label for="body">Blog Body</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Enter Blog Content ..."
                  v-model="newBlog.body"
                ></textarea>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="publish" v-model="newBlog.published"/>
                <label class="form-check-label" for="publish">Publish Blog?</label>
              </div>
              <div class="form-group mt-2">
                <label for="image">Image</label>
                <input type="url" class="form-control" id="image" placeholder="Enter Image URL ..." v-model="newBlog.imgUrl" />
              </div>
              <div class="d-flex justify-content-between mt-4">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "createNewBlog",
  data() {
    return {
      newBlog: {},
    };
  },
  computed: {},
  methods: {
    CreateBlogPost() {
      this.$store.dispatch("postBlog", this.newBlog);
      $("#CreateBlogPost").modal("hide");
    },
  },
  components: {},
};
</script>


<style scoped>
</style>