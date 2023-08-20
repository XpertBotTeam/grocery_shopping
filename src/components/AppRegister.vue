<script>
export default {
  name: 'AppRegister',
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
                <h2 class="fw-bold mb-5 text-uppercase">Create account</h2>
                <br>
                <div class="form-outline form-white mb-2">
                  <input type="text" placeholder="Username" id="user" class="form-control form-control-lg" />
                </div>
                <div class="form-outline form-white mb-2">
                  <input type="email" placeholder="Email" id="typeEmailX" class="form-control form-control-lg" />
                </div>
                <div class="form-outline form-white mb-2">
                  <input type="password" placeholder="Password" id="typePasswordX" class="form-control form-control-lg" />
                </div>
                <div class="form-outline form-white mb-2">
                  <input type="password" placeholder=" Confirm Password" id="typePasswordX" class="form-control form-control-lg" />
                </div>
                <button class="btn btn-outline-light btn-lg px-5 mt-5" type="submit">Sign in</button>
              </div>
              <div>
                <p class="mb-1">Already have an account? <router-link to="/login" class="text-white-50 fw-bold"> Login in </router-link>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
 
 </template>