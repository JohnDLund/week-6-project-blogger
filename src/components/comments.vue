<template>
  <div class="card mb-4">
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