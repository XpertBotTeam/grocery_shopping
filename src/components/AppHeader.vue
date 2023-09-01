<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
<nav>
  <div class="header">
    <router-link to="/" class="navbar-brand" >
    <img src="https://img.freepik.com/premium-vector/grocery-logo-vector-template_180868-2480.jpg"  alt="Logo" >
    </router-link>
    <div>
      <ul>
        <li>
          <router-link to="/login" class="btn btn-outline-light btn-lg px-5">Login</router-link>
        </li>
        <li>
          <router-link to="/register" class="btn btn-outline-light btn-lg px-3">Regsiter Now </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>



<!-- <nav class="navbar navbar-expand-lg navbar-light bg-success">
    <router-link to="/" class="navbar-brand" >
    <img src="https://img.freepik.com/premium-vector/grocery-logo-vector-template_180868-2480.jpg"  alt="Logo" >
    </router-link>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/login"  class="nav-link text-light" >Login</router-link>
      </li>
      <li class="nav-item">
        <button class="register-btn"><router-link to="/register"  class="nav-link text-light" >Register Now</router-link></button>
      </li>
    </ul>
  </div>
</nav> -->
</template>



<style scoped>
.header{
  background-color: #b6c7ac;
  height: 80px;

}
img{
    width: 70px;
    border-radius: 70px;
    margin-left: 15px;
    margin-top: 7px;
}

ul{
  display: flex;
  justify-content: flex-end;
  margin-top: -60px;
  list-style-type: none;
}
ul li{
  margin-right:4px ;
}
</style>
