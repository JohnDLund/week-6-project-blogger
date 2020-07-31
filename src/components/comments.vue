<template>
  <div class="card mb-5 mx-5" style="width: 40rem">
    <div class="card-body">{{commentData.body}}</div>
    <div class="card-body">
      -
      <i>{{commentData.creator.name}}</i>
    </div>
  </div>
</template>


<script>
export default {
  name: "comments",
  props: ["commentData"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>