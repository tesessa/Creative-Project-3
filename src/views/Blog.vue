/* eslint-disable */
<template>
<div>
     <BlogList :blogs="blogs" />
   </div>
 </template>


<script>
import BlogList from "../components/BlogList.vue"
export default {
name: 'MyBlog',
   components: {
     BlogList
   },
   data() {
     return {
      }
    },
   computed: {
     blogs() {
       return this.$root.$data.blogs;
     }
   },
}
</script>

<style scoped>
.wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
