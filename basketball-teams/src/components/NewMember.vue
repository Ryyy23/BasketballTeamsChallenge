<template>
<div class="ui middle aligned center aligned grid">
            <div class="column">
                <h2>Welcome to Basketball Team Manager</h2>
                <p>Your Registraton is sucessfull, once a team manager or team member has approved your registration. You will have full access!!!</p>
                <h1>New Manager</h1>
                <p v-if="user">New Manager:{{user.email}}</p>
                <button class="ui pink submit button" @click="signout">Signout</button>

            </div>
        </div>
</template>

<script>
import firebase from "firebase";
export default {
    data() {
        return {
            user: null
        };
    },
    created() {
        var self = this;
        firebase.auth().onAuthStateChanged(function(user) {
            self.user = user;
        });
    },
    methods: {
        signout() {
            firebase
                .auth()
                .signOut()
                .then(user => {
                    this.$router.push("/login");
                });
        }
    }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495e;
}
</style>
