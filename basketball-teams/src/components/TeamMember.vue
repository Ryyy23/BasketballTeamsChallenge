<template>
  <div class="container-fluid mt-4">
              <div>
                <h1>Team Manager</h1>
                <p v-if="user">Team Manager: {{user.email}}</p>
                <button class="ui pink submit button" @click.prevent="signout">Signout</button>
                <br>
            </div>
    <h1 class="h1">Game Records</h1>
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
            <th>MemberID<th>
            <th>&nbsp;</th>
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
            <td class="text-right">
              <a href="#" @click.prevent="updateGameRecord(record)">Edit</a> -
              <a href="#" @click.prevent="deleteGameRecord(record.gameID)">Delete</a>
            </td>
          </tr>
          </tbody>
        </table>
      </b-col>
      <b-col lg="3">
        <b-card :title="(model.gameID ? 'Edit Game Record ID#' + model.gameID : 'Edit Game Record ID#')">
          <form @submit.prevent="createGameRecord">
            <div id=hide>
            <b-form-group label="GameID">
              <b-form-input type="text" v-model="model.gameID"></b-form-input>
            </b-form-group>
            <b-form-group label="Venue">
              <b-form-input rows="4" v-model="model.venue" type="text"></b-form-input>
            </b-form-group>
            <b-form-group label="Date">
              <b-form-input rows="4" v-model="model.date" type="text"></b-form-input>
            </b-form-group>
            <b-form-group label="Time">
              <b-form-input rows="4" v-model="model.time" type="text"></b-form-input>
            </b-form-group>
            </div>
            <b-form-group label="Amount">
              <b-form-input rows="4" v-model="model.amount" type="text"></b-form-input>
            </b-form-group>
            <b-form-group label="MemberID">
              <b-form-input rows="4" v-model="model.memberID" type="text"></b-form-input>
            </b-form-group>
            <div>
              <b-btn type="submit" variant="success">Save Game</b-btn>
            </div>
          </form>
        </b-card>
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
      this.getAll()


    },
    methods: {
      async getAll() {
        this.loading = true

        try {
          this.records = await api.getAll()
          console.log(this.records);
        } finally {
          this.loading = false
        }
      },
      async updateGameRecord(gameRecord) {

        this.model = Object.assign({}, gameRecord)
      },
      async createGameRecord() {
        const isUpdate = !!this.model.id;

        if (isUpdate) {
          await api.update(this.model.id, this.model)
        } else {
          await api.create(this.model)
        }

        this.model = {}

        await this.getAll()
      },
      async deleteGameRecord(gameID) {
        if (confirm('Are you sure you want to delete this record?')) {
          if (this.model.gameID === gameID) {
            this.model = {}
          }

          await api.delete(gameID)
          await this.getAll()
        }
      }
  }
}
</script>

