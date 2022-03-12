/* eslint-disable */
<template>
<div>
  <h1>Blog</h1>
     <BlogList :blog="blog" />
   </div>
 </template>


<script>
import BlogList from "../components/BlogList.vue"
export default {
name: 'MyBlog',
   components: {
     BlogList
   },
   computed: {
     blog() {
       return this.$root.$data.blog;
     }
   },
};
</script>
