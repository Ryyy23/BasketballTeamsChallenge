<template>
  <div class="container-fluid mt-4">
              <div>
                <h1>Team Member</h1>
                <p v-if="user">Team Member: {{user.email}}</p>
                <button class="ui pink submit button" @click.prevent="signout">Signout</button>
                <br>
            </div>
    <h1 class="h1">Past Game Records</h1>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-col>
        <table class="table table-striped">
          <thead>
          <tr>
            <th>GameID</th>
            <th>Venue</th>
            <th>Date</th>
            <th>Time</th>
            <th>Amount</th>
            <th>MemberID</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="record in records" :key="record.gameID">
            <td>{{ record.gameID }}</td>
            <td>{{ record.venue }}</td>
            <td>{{ record.date }}</td>
            <td>{{ record.time }}</td>
            <td>{{ "$" + record.amount }}</td>
            <td>{{ record.memberID }}</td>
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
      this.getAllPast()


    },
    methods: {
      async getAllPast() {
        this.loading = true

        try {
          this.records = await api.getAllPast()
          console.log(this.records);
        } finally {
          this.loading = false
        }
      },
  }
}
</script>

