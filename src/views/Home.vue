<template>
  <div class="home">
    <div class="header">
      <span>xxx</span>
      <span>xxx</span>
    </div>
    <div class="ConTent">
      <hello-world></hello-world>
    
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue';
export default {
  name: "Home",
  components: {
    HelloWorld
  },
};
</script>
<style scoped>
.header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ccc;
}
</style>
