// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

Vue.filter('formatTS', function (value) {
  if (value) {
    let date = new Date(value)
    let year = date.getFullYear()
  //-----month formatting ---------
    let mm = date.getMonth()
    let month = new Array()
    month[0] = "January"
    month[1] = "February"
    month[2] = "March"
    month[3] = "April"
    month[4] = "May"
    month[5] = "June"
    month[6] = "July"
    month[7] = "August"
    month[8] = "September"
    month[9] = "October"
    month[10] = "November"
    month[11] = "December"
    let mnth = month[mm]
//-----day formatting ---------
    let day = date.getDate()
    day = (day > 9 ? '' : '0') + day
//-----hours formatting ---------
    let hour = date.getHours()
    let ampm = hour < 12 ? 'AM' : 'PM'
    hour > 12 ? hour -= 12 : ''
//-----minutes formatting ---------
    let min = date.getMinutes()
    min = (min > 9 ? '' : '0') + min
//-----seconds  formatting ---------
    let sec = date.getSeconds()
    sec = (sec < 10 ? "0" : "") + sec

    let strDate = mnth + ' ' + day + ', ' + year + ' ' + `${hour}:${min}:${sec} ${ampm}`

    return strDate
  }
})

let app = null;

// wait for firebase auth to init before creating the app
firebase.auth().onAuthStateChanged(() => {

  // init app if not already created
  if(!app){
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }

})

