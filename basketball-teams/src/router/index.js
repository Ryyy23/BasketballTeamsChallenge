import Vue from 'vue';
import Router from 'vue-router';

// 3rd party imports
// import Auth from '@okta/okta-vue';
import firebase from 'firebase';


// our own imports
import NewMember from '@/components/NewMember';
import GameRecords from '@/components/GameRecords';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Admin from '@/components/Admin';
import TeamManager from '@/components/TeamManager';
import TeamMember from '@/components/TeamMember';

/*
Vue.use(Auth, {
  issuer: 'https://dev-168426.okta.com/oauth2/default',
  client_id: '0oa1yh1y0ywBtWlsJ357',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})
*/
Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/newmember',
      name: 'New Member',
      component: NewMember,
      meta: {
        auth: true
      }
    },
    /*
    {
      path: '/implicit/callback',
      component: Auth.handleCallback()
    },
    */
    {
      path: '/game-trackings',
      name: 'GameRecords',
      component: GameRecords,
      meta: {
        guest: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        guest: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        auth: true
      }
    },
    {
      path: '/teammanager',
      name: 'TeamManager',
      component: TeamManager,
      meta: {
        auth: true
      }
    },
    {
      path: '/teammember',
      name: 'TeamMember',
      component: TeamMember,
      meta: {
        auth: true
      }
    },

  ]
})

//router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

router.beforeEach((to, from, next) => {

  firebase.auth().onAuthStateChanged(userAuth => {

    if (userAuth) {
      firebase.auth().currentUser.getIdTokenResult()
        .then(function ({
          claims
        }) {

          if (claims.teammember) {
            if (to.path !== '/teammember')
              return next({
                path: '/teammember',
              })
          } else if (claims.admin) {
            if (to.path !== '/admin')
              return next({
                path: '/admin',
              })
          } else if (claims.teammanager) {
            if (to.path !== '/teammanager')
              return next({
                path: '/teammanager',
              })
          } else if (claims.newmember) {
            if (to.path !== '/newmember')
              return next({
                path: '/newmember',
              })
          }

        })
    } else {
      if (to.matched.some(record => record.meta.auth)) {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        })
      } else {
        next()
      }
    }

  })

  next()

})
export default router;



