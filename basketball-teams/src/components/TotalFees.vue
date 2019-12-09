<template>
  <div class="container-fluid mt-4">
              <div>
                <h1>Team Member</h1>
                <p v-if="user">Team Member: {{user.email}}</p>
                <button class="ui pink submit button" @click.prevent="signout">Signout</button>
                <br>
            </div>
    <h1 class="h1">Game Records Total Paid</h1>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-col>
        <table class="table table-striped">
          <thead>
          <tr>
            <th>MemberID</th>
            <th>Total</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="record in records" :key="record.memberID">
            <td>{{ record.memberID }}</td>
            <td>{{ "$" + record.total }}</td>
          </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import api from '@/GameApiService';
export default {
data() {
      return {
        loading: false,
        records: [],
        model: {}
      };
    },
    async created() {
      this.getAllTotalPaid()


    },
    methods: {
      async getAllTotalPaid() {
        this.loading = true

        try {
          this.records = await api.getAllTotalPaid()
          console.log(this.records);
        } finally {
          this.loading = false
        }
      },
  }
}
</script>

