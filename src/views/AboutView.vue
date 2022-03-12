<template>
  <div class="about">
    <div class="top">
    </div>
    <h1> about me</h1>
    <h2>Hey my name is Tessa Andersen!</h2>
    <p>but I go by Sister Andersen while on my mission</p>
    <h3>Anyways more about me!</h3>
    <p>I am from Boise, Idaho and I am a Sophmore attending BYU Provo and getting a Computer Science degree. I just paused my education to go on a mission! I was called to the Louisiana Baton Rouge mission and I start home MTC on May 30th.I am very excited to go on a mission soon, there is more info below about my mission</p>
    <br>
    <p>Some things I like to do are watercolor, play piano, and read. I have 3 older brothers and 2 loving parents. In the future I want to get a PhD in Computer Science and hopefully work at NASA someday.</p>
    <div class="photo">
    <img src="../../images/Senior2.jpg">
    </div>
  </div>
</template>


<style scoped>
.top {
   display: flex;
   height: calc(100vh - 100px);
   background-image: url("../../images/SydneyBridge.jpg");
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   background-attachment: fixed;
   text-align: center;
   position: relative;
   }

.photo {
  justify-content: center;
  align-items: center;
  text-align: center;
}

.photo img {
    width: 450px;
    height: 600px;
}

   </style>
