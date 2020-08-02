<template>
  <div class="editBlog">
    <button
      type="button"
      class="btn btn-block btn-success mb-1"
      data-toggle="modal"
      data-target="#editBlog"
      v-if="$auth.isAuthenticated"
    >Edit</button>
    <div
      class="modal fade"
      id="editBlog"
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
            <form @submit.prevent="editBlogPost">
              <div class="form-group">
                <label for="title">Blog Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="Enter new blog title ..."
                  v-model="editedBlogObject.title"
                />
              </div>
              <div class="form-group">
                <label for="body">Blog Body</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Enter new blog content ..."
                  v-model="editedBlogObject.body"
                ></textarea>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="publish" v-model="editedBlogObject.published" />
                <label class="form-check-label" for="publish">Publish Blog?</label>
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
  name: "editBlog",
  props: ["blogData"],
  data() {
    return {
        editedBlogObject: {},
    };
  },
  computed: {},
  methods: {
    editBlogPost (blogData) {
        this.$store.dispatch("editBlog", {
            data: this.editedBlogObject,
            _id: this.blogData
        })
         $("#editBlog").modal("hide");
    }
  },
  components: {},
};
</script>


<style scoped>
</style>