<template>
  <div>
    <navbar-top></navbar-top>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <img :src="campaign.file_name" class="img-fluid" alt="" />
        </div>
        <div class="col-4">
          <div class="card mt-4">
            <div class="card-body">
              <div class="font-weight-bold">Jumlah Funding</div>
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
                    <input type="number" class="form-control" style="border-radius: 30px; padding: 25px" v-model="input.amount" placeholder="Rp. 0" />
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
            {{ campaign.name }} apa
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
        name: ""
      },
      UserCheck,
      input: {
        amount: null,
      },
      urlPayment: null
    };
  },

  beforeMount() {
      this.loadCampaignDetail();
  },

  methods: {
    loadCampaignDetail() {
      let params = this.$route.params.id;

      axios.get(process.env.VUE_APP_API + "campaigns/" + params).then((resp) => {
        this.campaign = resp.data.data;
      });
    },

    fundProcess() {
        console.log('detail funding clicked')

        let datafunding = {
          amount: this.input.amount,
          campaign_id: this.campaign.id
        }

        axios.post(process.env.VUE_APP_API + 'funding', datafunding, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }).then((resp) => {
          if(resp.status == 200) {
            // parse url payment
            this.urlPayment = resp.data.data.code;
          }
        }).then(() => {
          window.open(this.urlPayment, '_blank');
        })

    }
  }
}
</script>
