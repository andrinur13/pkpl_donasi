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
                <label for="email">Email...</label>
                <input type="email" class="form-control p-3" id="email" aria-describedby="emailHelp" v-model="login.email" />
              </div>
              <div class="form-group mt-3">
                <label for="passowrd">Password</label>
                <input type="password" class="form-control p-3" id="passowrd" v-model="login.password" />
              </div>
              <div v-if="successLogin == true" class="alert alert-success">
                  <small>Berhasil login, harap tunggu!</small>
              </div>
              <button type="submit" class="btn btn-primary mt-4 btn-block p-3" @click="auth()">Login</button>
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
                password: ''
            },
            successLogin: false
        }
    },

    methods: {
        auth() {
            axios.post(process.env.VUE_APP_API + 'login', this.login).then((resp) => {
                if(resp.status == 200) {
                    let token = resp.data.data.token;
                    localStorage.setItem('token', token)
                    this.successLogin = true;

                    // data user
                    let datauser = {
                      name: resp.data.data.name,
                      email: resp.data.data.email
                    }

                    localStorage.setItem('data_donasiku', JSON.stringify(datauser));

                    setTimeout(() => {
                        this.$router.push('/');
                    }, 2000);
                }
            })            
        }
    }
};
</script>

<style>
</style>