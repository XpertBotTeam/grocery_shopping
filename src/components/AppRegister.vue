<template>
<section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card text-white" style="border-radius: 1rem;">
                    <form @submit.prevent="signIn">
                        <div class="card-body p-5 text-center">
                            <div class="mb-md-5 mt-md-4 pb-5">
                                <h2 class="fw-bold mb-5 text-uppercase">Create account</h2>
                                <br><br>
                                <br>
                                <div class="form-outline form-white mb-2">
                                    <input type="text" v-model.trim="username" autocomplete="on" autofocus placeholder="Username" id="username" class="form-control form-control-lg " required />
                                </div>
                                <div class="form-outline form-white mb-2">
                                    <input type="email" v-model.trim="email" placeholder="Email" id="typeEmailX" class="form-control form-control-lg" required />
                                </div>
                                <div class="form-outline form-white mb-2">
                                    <input type="password" v-model.trim="password" placeholder="Password" id="typePasswordX" class="form-control form-control-lg" required />
                                </div>
                                <div class="form-outline form-white mb-2">
                                    <input type="password" v-model.trim="confirmPassword" placeholder=" Confirm Password" id="typeCPasswordX" class="form-control form-control-lg" required />
                                </div>
                                <div class="errorMsg" v-for="errors in error" :key="errors">{{ errors }}</div>

                                <button class="btn btn-outline-light btn-lg px-5 mt-5" type="submit">Sign in</button>
                            </div>
                            <div>
                                <p class="mb-3">Already have an account? <router-link to="/login" class="text-white-50 fw-bold"> Login in </router-link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'AppRegister',
    data() {
        return {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            error: []
        }
    },

    methods: {
        errors: function () {
            this.error = []
            if (this.password != this.confirmPassword) {
                this.error.push("Passwords didn't match ")
            }
            if (this.password != "" && (this.password.length > 8 || this.password.length < 8)) {
                this.error.push("Password should be 8 character ")
            }
            else{
                return
            }
            
        },
        async signIn() {
            this.errors()
            let result = await axios.post("http://localhost:3000/users", {
                username: this.username,
                email: this.email,
                password: this.password
            }
            );
//if no errors found
            if (result.status == 201) {
                window.localStorage.setItem("user-data", JSON.stringify(result.data))
                this.$router.push("/login")

            }

        },
    }
}
</script>

<style>
.errorMsg {
    color: red;
    font-weight: bold;
    margin-top: 5px;
}

.card {
    background-color: #9EB384;
}
</style>
