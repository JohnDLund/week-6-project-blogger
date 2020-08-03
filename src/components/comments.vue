<template>
  <div class="card mb-4">
    <div class="card-body">{{commentData.body}}</div>
    <div class="card-body">
      <i>{{commentData.creator.name}}</i>
  
    </div>
  <div v-if="profileId==commentData.creator._id"> 
    <button class="btn btn-block btn-success mb-1" @click="editClicked=true">Edit Comment</button>
    <button class="btn btn-block btn-danger mb-1" @click="deleteComment(commentData)">Delete Comment</button>
</div>
    <div v-if="editClicked">
      <form @submit.prevent="editComment(commentData)">
        <div class="form-group">
          <label for="body">Comment</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="Enter edited comment ..."
            v-model="editedcommentObject.body"
          ></textarea>
        </div>
        <div class="d-flex justify-content-between mt-4">
          <button type="button" class="btn btn-danger" @click="editClicked=false">Cancel</button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "comments",
  props: ["commentData"],
  data() {
    return {
      editClicked: false,
      editedcommentObject: {},
    };
  },
  computed: {
    profileId() {
    return this.$store.state.profile.id
  },
  },
  methods: {
    deleteComment(commentObject) {
      console.log(commentObject);
      this.$store.dispatch("removeComment", commentObject);
    },

    editComment(commentData) {
      this.editClicked = false
      this.$store.dispatch("changeComment", {
        data: this.editedcommentObject,
        _id: commentData._id,
      });
    },
  },
  components: {},
};
</script>


<style scoped>
</style>