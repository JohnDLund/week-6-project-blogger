import Vue from "vue";
import Vuex, { Store } from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: {},
    comments: [],
    profileBlogs: [],

  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, blogs) {
      state.blogs = blogs
    },
    setActiveBlog(state, blogData) {
      state.activeBlog = blogData
    },
    setComments(state, commentsData) {
      state.comments = commentsData
    },
    addComments(state, newCommentsData) {
      state.comments += newCommentsData
    },
    setProfileBlogs(state, profileBlogData) {
      state.profileBlogs = profileBlogData
    }
  },
  actions: {

    async getBlogs({ commit }) {
      try {
        let res = await api.get("blogs")
        commit("setBlogs", res.data)
      } catch (error) {
        console.error(error);
      }
    },

    async getActiveBlog({ commit }, blogId) {
      try {
        let res = await api.get("blogs/" + blogId)
        console.log("got a blog:", res.data.blog);
        console.log("got comments:", res.data.comments);
        commit("setActiveBlog", res.data.blog)
        commit("setComments", res.data.comments)
      } catch (error) {
        console.error(error);
      }
    },

    async getProfileBlogs({ commit }) {
      try {
        let res = await api.get("profile/blogs")
        console.log(res.data)
        commit("setProfileBlogs", res.data)
      } catch (error) {
        console.error(error);
      }
    },

    async postBlog({dispatch}, blogData) {
      try {
        let res = await api.post("blogs", blogData)
        console.log(res.data)
        this.dispatch("getProfileBlogs")
      } catch (error) {
        console.error(error);
      }
    },

    async deleteBlog({dispatch}, blogId) {
      try{
        let res = await api.delete("blogs/" + blogId)
        console.log(res.data)
        this.dispatch("getProfileBlogs")
      } catch (error) {
        console.error(error)
      }
    },

    async editBlog({dispatch}, editedBlog) {
      console.log(editedBlog)
      try{
        let res = await api.put("blogs/" + editedBlog._id, editedBlog.data)
        console.log(res.data)
        this.dispatch("getProfileBlogs")
      } catch (error) {
        console.error(error)
      }
    },

    async postComment({commit}, activeBlogData) {
      try {
        let res = await api.post("comments/", activeBlogData)
        console.log(res.data)
        this.commit("addComments", res.data)
      } catch (error) {
        console.error(error);
      }
    },


    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
