<template>
  <div>
    <div class="container">
      <div class="row" style="margin-top: 100px; margin-bottom: 100px">
        <div class="col">
          <h1>The projets can you fund!</h1>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4" v-for="index in campaigns" :key="index.id">
          <div class="card h-100">
            <img src="https://www.malasngoding.com/wp-content/uploads/2019/07/card-decks-bootstrap-4.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ index.name }}</h5>
              <p class="card-text">
                {{ index.short_description }}
              </p>
            </div>
            <div class="m-2">
              <div class="row">
                <div class="col">
                  <b-progress max="100" class="">
                    <b-progress-bar :value="(index.current_amount / index.goal_amount) * 100"></b-progress-bar>
                  </b-progress>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col">{{ parseInt((index.current_amount / index.goal_amount) * 100) }} %</div>
                <div class="col text-right">Rp. {{ index.goal_amount.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.") }}</div>
              </div>
              <div class="row mt-3">
                <div class="col">
                  <button @click="goFund(index.slug)" class="btn btn-primary py-2 btn-block" style="border-radius: 20px">Funding Now!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Project",

  data() {
    return {
      campaigns: [],
    };
  },

  methods: {
    loadCampaigns() {
      axios.get(process.env.VUE_APP_API + "campaigns").then((resp) => {
        this.campaigns = resp.data.data;
      });
    },

    goFund(slug) {
        console.log(slug);
        this.$router.push('project/' + slug);
    }
  },

  beforeMount() {
    this.loadCampaigns();
  },
};
</script>

<style>
</style>