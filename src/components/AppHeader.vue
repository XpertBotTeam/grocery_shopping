<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-light bg-success">
    <router-link to="/" class="navbar-brand" >
    <img src="https://img.freepik.com/premium-vector/grocery-logo-vector-template_180868-2480.jpg"  alt="Logo" >
    </router-link>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/login"  class="nav-link text-light" >Login</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/register"  class="nav-link text-light" >Register Now</router-link>

      </li>
    </ul>
  </div>
</nav>
</template>



<style>
img{
    width: 70px;
    border-radius: 70px;
    margin-left: 15px;
}
</style>
