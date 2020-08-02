<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div class="card mt-4 mb-2">
        <div class="card-header">{{activeBlog.title}}</div>
        <img
          class="card-img m-auto p-2"
          style="width: 25%"
          :src="activeBlog.creator.picture"
          alt="Card image cap"
        />
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
        <button class="btn btn-primary" @click="commentsClicked = !commentsClicked">Comments</button>
        <button
          v-if="commentsClicked"
          class="btn btn-block btn-success my-2"
          data-toggle="modal"
          data-target="#addBlogComments"
        >Post a Comment</button>
      </div>

      <div class="modal fade" id="addBlogComments" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Post a New Comment</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="newComment(activeBlog.id)">
                <div class="form-group">
                  <label for="body">Comment</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Enter Comment ..."
                    required
                    v-model="newCommentObject.body"
                  ></textarea>
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

        <div v-if="commentsClicked">
          <comments v-for="comment in comments" :commentData="comment" :key="comment._id"></comments>
        </div>
    </div>
  </div>
</template>


<script>
import comments from "../components/comments";
export default {
  name: "ActiveBlog",

  data() {
    return {
      commentsClicked: true,
      newCommentObject: {},
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
  methods: {
    newComment(activeBlogId) {
      console.log(activeBlogId);
      console.log(this.newCommentObject.body);
      this.$store.dispatch("postComment", {
        blogId: activeBlogId,
        body: this.newCommentObject.body,
      });
      $("#addBlogComments").modal("hide");
    },
  },

  components: {
    comments,
  },
};
</script>


<style scoped>
</style>