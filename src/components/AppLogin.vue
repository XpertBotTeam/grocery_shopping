<script>
export default {
  name: 'AppLogin',
}
</script>


<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-success text-white" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">

              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bolder mb-5 text-uppercase">Welcome Back!</h2>
                <br>
                <div class="form-outline form-white mb-2">
                  <input type="email" placeholder="Email" id="typeEmailX" class="form-control form-control-lg" />
                </div>
                <div class="form-outline form-white mb-2">
                  <input type="password" placeholder="Password" id="typePasswordX" class="form-control form-control-lg" />
                </div>
                <p class="small mb-5 pb-lg-2 "><a class="text-white-50" href="#!">Forgot password?</a></p>
                <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
              </div>
              <div>
                <p class="mb-0">New here? <router-link to="/register" class="text-white-50 fw-bold"> Create one
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


