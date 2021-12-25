<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">Donasiku</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item ml-2">
              <router-link class="nav-link" to="/">Project</router-link>
            </li>

            <li class="nav-item ml-2">
              <router-link class="nav-link" to="/">Features</router-link>
            </li>

            <li class="nav-item ml-2">
              <router-link class="nav-link" to="/">Success Stories</router-link>
            </li>
          </ul>
        </div>

        <div class="form-inline">
          <router-link to="login" class="btn btn-success px-4 my-2 my-sm-0" style="border-radius: 30px">Login</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "NavbarTop",

  methods: {
    userFetch() {
      axios.get(process.env.VUE_APP_API + 'users/fetch', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((resp) => {
        console.log(resp)
      })
    }
  },

  beforeMount() {
    this.userFetch()
  }
};
</script>
