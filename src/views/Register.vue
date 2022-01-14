<template>
  <div>
    <div class="container">
      <div class="row justify-content-center align-items-center mt-4">
        <div class="col-lg-4 col-sm-8 col-md-8 bg-muted">
          <div class="text-center">
            <img
              src="https://iconape.com/wp-content/png_logo_vector/funding-circle.png"
              class="img-fluid mx-auto"
              style="max-width: 200px"
              alt=""
            />
          </div>
          <div>
            <form @submit.prevent>
              <div class="form-group">
                <label for="name">Nama...</label>
                <input type="name" class="form-control p-3" id="name" aria-describedby="nameHelp" v-model="login.name" />
              </div>
              <div class="form-group">
                <label for="email">Email...</label>
                <input type="email" class="form-control p-3" id="email" aria-describedby="emailHelp" v-model="login.email" />
              </div>
              <div class="form-group mt-3">
                <label for="passowrd">Password</label>
                <input type="password" class="form-control p-3" id="passowrd" v-model="login.password" />
              </div>
              <div v-if="successRegister == true" class="alert alert-success">
                  <small>Berhasil Mendaftar, harap tunggu!</small>
              </div>
               <div v-if="errorRegister == true" class="alert alert-danger">
                  <small>Silahkan cek kelengkapan data!</small>
              </div>
              <button type="submit" class="btn btn-primary mt-4 btn-block p-3" @click="auth()">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'Login',
    data() {
        return {
            login: {
                email: '',
                password: '',
                name: ''
            },
            successRegister: false,
            errorRegister: false
        }
    },

    methods: {
        auth() {
            axios.post(process.env.VUE_APP_API + 'register', this.login).then((resp) => {
                if(resp.status == 201) {

                    this.successRegister = true;

                    setTimeout(() => {
                        this.$router.push('/login');
                    }, 2000);
                } else {
                    this.errorRegister = true;
                }
            }).catch(() => {
                this.errorRegister = true;
            })           
        }
    }
};
</script>

<style>
</style>