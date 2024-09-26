<template>
  <nav class="main-nav">
    <!-- Databinding the 'to' too use dynamic routing in case the name chganges -->
    <router-link :to="{ name: 'Home' }">Projects</router-link>
    <router-link :to="{ name: 'AddProject' }">Add a New project</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.main-nav {
  text-align: center;
  margin: 40px auto;
}
.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: #999;
  font-size: 18px;
}
a.router-link-active {
  border-bottom: 2px solid #00ce89;
  padding-bottom: 4px;
}
</style>
