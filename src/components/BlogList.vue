<template>
 <div class="wrapped">
    <div class="blogs">
      <div class="blog" v-for="blog in blogs" :key="blog.id">
      <div class="info">
        <h1>{{blog.title}}</h1>
	<p>Author: {{blog.author}}</p>
	</div>
	<div class="post">
	  <p>{{blog.post}}</p>
	  
	 </div>
     </div>
   </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
	name: 'BlogList',
	props: {
		blogs: Array
	},
	methods: {
	},
};
</script>

<style scoped>
.wrapped {
	display: flex;
	align-items: center;
	justify-content: center;
}

</style>
