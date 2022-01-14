<template>
  <div>
      <navbar-top></navbar-top>
      <div>
          <div class="container">
              <div class="row mt-4">
                  <div class="col">
                      <div class="font-weight-bold">
                          Riwayat Funding Saya
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col">
                      <div class="mt-2 card" v-for="item in fundingTransactions" :key="item.id">
                          <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    Rp. {{Intl.NumberFormat().format(item.amount)}}
                                </div>

                                <div class="col">
                                    Rp. {{Intl.NumberFormat().format(item.amount)}}
                                </div>

                                <div class="col-auto mr-1">
                                    <div v-if="item.status == 'paid'" class="badge badge-success">Paid</div>
                                    <div v-if="item.status == 'unpaid'" class="badge badge-danger">Unpaid</div>
                                </div>
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
import axios from 'axios'
import NavbarTop from '../components/NavbarTop.vue'
export default {
  components: { NavbarTop },
    name: 'MyFunding',


    data() {
        return {
            fundingTransactions: [],
        }
    },
    

    methods: {
        loadMyFunding() {
            axios.post(process.env.VUE_APP_API + 'myfunding', {}, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then((resp) => {
                console.log('=== my funding ===')
                console.log(resp);
                this.fundingTransactions = resp.data.data.transactions;
            })
        }
    },

    beforeMount() {
        this.loadMyFunding();
    }
}
</script>

<style>

</style>