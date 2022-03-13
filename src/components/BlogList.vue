/* eslint-disable */ 
<template>
 <div class="wrapped">
    <div class="blogs">
      <div class="blog" v-for="blog in blogs" :key="blog.id">
      <div class="info">
        <h1>{{blog.title}}</h1>
	<p>Author: {{blog.author}}</p>
	</div>
	<div class="image">
		<img :src="'/images/'+blog.image">
	</div>
	<div class="post">
	<p>{{blog.text}}</p>
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
	printBlog: function(blog) {
	console.log(this.$root.$data.blog);
       },
	},
};
</script>

<style scoped>
.wrapped {
	display: flex;
	align-items: center;
	justify-content: center;
}

.blogs {
	margin: 10px;
	margin-top: 50px;
	width: 400px;
}

.info {
	color: #000;
	padding: 10px 30px;
	height: 200px;
}

.info p {
	font-size: 10px;
}

.image {
	display: flex;
	justify-content: center;
	margin-bottom: 5px;
}

.image img {
	height: 75%;
	width: 75%;
}
</style>
