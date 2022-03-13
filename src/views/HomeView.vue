<template>
  <div class="home">
    <div class="Australia">
    </div>
    <div class="container">
     <div class="column">
	<img src="../../images/Senior3.jpg" class="avatar">
       <h3 class="username">Tessa Andersen</h3>
       <p class="comment">Louisiana Baton Rouge Mission</p>
       <p class="intro">Oh hi! My name is Tessa Andersen and this is going to be my future blog for my mission!</p>
      </div>
      </div>
      <div class="image">
      <img src="../../images/FamilySydney.jpg">
      </div>
  </div>
</template>

<script>
</script>

<style scoped>

 .Australia {
   display: flex;
   background-image: url("../../images/NoosaSunset.jpg");
   height: calc(100vh - 100px);
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   background-attachment: fixed;
   text-align: center;
   position: relative;

 }

 .home {
   }


img {
   width: 100%;
   height: 300px;
  }


.column {
	float: left;
	width: 95%;
	margin: 20px 1.15%;
	height: 250px;
	background-color: #FCF6F9;
}

.avatar {
	float: left;
	width: 200px;
	height: 200px;
	margin: 25px;
	border-radius: 50%;
	background-color: #FCF6F9;
}


.username {
	margin-top: 30px;
	font-size: 50px;
}

.comment {
	margin: 10px;
	font-size: 25px;
	overflow: hidden;
}

.image img {
	width: 75%;
	height: 75%;
}

.info {
	font-size: 15px;
}
</style>
