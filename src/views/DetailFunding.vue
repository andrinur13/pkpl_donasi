<template>
  <div>
    <navbar-top></navbar-top>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <img src="https://www.malasngoding.com/wp-content/uploads/2019/07/card-decks-bootstrap-4.png" class="img-fluid" alt="" />
        </div>
        <div class="col-4">
          <div class="card mt-4">
            <div class="card-body">
              <div class="font-weight-bold">Project Leader</div>
              <div class="row mt-2">
                <div class="col-auto">
                  <img :src="UserCheck" class="img-fluid" style="max-width: 50px" alt="" />
                </div>
                <div class="col">
                  <div class="font-weight-bold">
                    {{ campaign.user.name }}
                  </div>
                  <div class="text-muted">
                    {{ campaign.backer_count }}
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col font-weight-bold">What will You get</div>
              </div>
              <div class="row">
                <div class="col">
                  <ul>
                    <li v-for="perk in campaign.perks" :key="perk.id">{{ perk }}</li>
                  </ul>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col">
                  <div>
                    <input type="number" class="form-control" style="border-radius: 30px; padding: 25px" v-model="input.amount" />
                  </div>
                  <div>
                    <button @click="fundProcess()" class="btn btn-primary btn-block mt-3" style="border-radius: 30px; padding: 15px">Fund Now!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" style="margin-top: 100px">
        <div class="col">
          <div class="font-weight-bold h1">
            {{ campaign.name }}
          </div>
          <div>
            {{ campaign.short_description }}
          </div>
          <div style="margin-top: 50px">
            <b-progress max="100" class="">
              <b-progress-bar :value="(campaign.current_amount / campaign.goal_amount) * 100"></b-progress-bar>
            </b-progress>
          </div>
          <div class="row mt-2 h3">
            <div class="col">{{ parseInt((campaign.current_amount / campaign.goal_amount) * 100) }} %</div>
            <div class="col text-right">Rp. {{ new Intl.NumberFormat().format(campaign.goal_amount) }}</div>
          </div>
          <div class="text-muted mt-4">
              {{campaign.description}}
          </div>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import axios from "axios";
import NavbarTop from "../components/NavbarTop.vue";
import UserCheck from "../assets/user-check.png";
import FooterComponent from "../components/Footer.vue";
export default {
  name: "DetailFunding",
  components: {
    NavbarTop, FooterComponent
  },

  data() {
    return {
      campaign: {
        user: {
          name: "",
        },
      },
      UserCheck,
      input: {
        amount: 0,
      },
    };
  },

  beforeMount() {
      this.loadCampaignDetail();
  },

  methods: {
    loadCampaignDetail() {
      let params = this.$route.params.id;
      let paramsArray = params.split("-");

      let id_campaign = paramsArray[paramsArray.length - 1];

      axios.get(process.env.VUE_APP_API + "campaigns/" + id_campaign).then((resp) => {
        if (resp.status == 200) {
          if (resp.data.data.slug != params) {
            console.log("failed");
          } else {
            this.campaign = resp.data.data;
          }
        }
      });
    },

    fundProcess() {
        console.log('detail funding clicked')
        let token = 'Bearer ' + localStorage.getItem('token');
        console.log(token);
        let response = axios.post(process.env.VUE_APP_API + 'transactions', {
          amount: this.input.amount,
          campaign_id: this.campaign.id
        }, {
          'Authorization': token
        },
        )

        console.log(response)
    }
  }
}
</script>
