<template>
<section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card text-white" style="border-radius: 1rem;">
                    <div class="card-body p-5 text-center">
                        <form action="/" v-on:submit.prevent="login">
                            <div class="mb-md-5 mt-md-4 pb-5">
                                <h2 class="fw-bolder mb-5 text-uppercase">Welcome Back!</h2>
                                <br>
                                <div class="errors">{{ attemptsMsg }}</div>

                                <div class="form-outline form-white mb-2">
                                    <input type="email" autofocus required  placeholder="Email" id="email" v-model="email" class="form-control form-control-lg" />
                                </div>

                                <div class="form-outline form-white mb-2">
                                    <input type="password" required placeholder="Password" id="password" v-model="password" class="form-control form-control-lg" />
                                </div>
                                <div class="invalidError ">{{ msg }}</div>
                                <br>
                                <button id="loginBtn" v-on:click="login" class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                            </div>
                        </form>
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

<script>
let attempts=4
export default {
    name: 'AppLogin',
    data() {
        return {
            email: '',
            password: '',
            msg: '',
            attemptsMsg: '',

        }
    },
    methods: {
       async login() {
            //if this account exists
            if (this.email == "admin@a.com" && this.password == "sasa") {
                //then push it to Home page 
                this.$router.push('/')

            } else {
                attempts--
                this.msg = "Invalid username or password"
                this.attemptsMsg = "You still have " + attempts + " attempts to login ";
                this.email=''
                this.password=''
                
                }
                if (attempts == 0) {
                    this.msg = ''
                    this.attemptsMsg = ''
                    document.querySelector("button").disabled = true;
                    this.$router.push('/register')
                    

                }
        }
        },
}


</script>

<style>
.errors {
    color: red;
    font-weight: bold;
    margin-bottom: 25px;
}

.invalidError {
    color: red;
    font-weight: bold;
}

</style>
