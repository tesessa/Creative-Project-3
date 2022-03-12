<template>
  <div class="home">
    <div class="Australia">
    </div>
   <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
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
 </style>
