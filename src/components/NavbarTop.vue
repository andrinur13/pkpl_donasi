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
          <!-- <div class="btn btn-success px-4 my-2 my-sm-0" style="border-radius: 30px" v-if="dataUser.name != null">  </div> -->
          <div v-if="dataUser.name != null">
            <b-dropdown id="dropdown-1" :text="dataUser.name" class="m-md-2" variant="success">
              <b-dropdown-item @click="logout()">Logout</b-dropdown-item>
            </b-dropdown>
          </div>
          <router-link to="/login" class="btn btn-success px-4 my-2 my-sm-0" style="border-radius: 30px" v-else> Login </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarTop",

  data() {
    return {
      dataUser: {}
    }
  },

  methods: {
    userFetch() {
      let data_donasiku = JSON.parse(localStorage.getItem('data_donasiku'));

      if(data_donasiku ==  null) {
        localStorage.removeItem('data_donasiku');
        localStorage.removeItem('token');
      } else {
        this.dataUser = data_donasiku;
      }

    },

    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('data_donasiku');

      location.reload();
    }
  },

  beforeMount() {
    this.userFetch()
  }
};
</script>
