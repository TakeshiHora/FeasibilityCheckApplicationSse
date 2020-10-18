import Vue from "vue/dist/vue.esm.js"
//import axios from 'axios'
//import App from './App.vue'

Vue.config.productionTip = false
/*
new Vue({
  render: h => h(App),
}).$mount('#app')
*/


/*Polling handling
new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
   mounted :function(){
     this.todo()
   },
   methods:{
     todo : function(){
    setInterval(
      function(){
      axios
      //.get("/disaster?qzqsmdata=9AAFAB9ED64007D1F465F841F192000802DFB300F7ED004FFFFFA0100000004")
      .get("/list") //Jasonで取り出すようにする。
      .then(response => (this.info = response))}.bind(this)
      ,5000)
   }
  }
})
*/

new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
   mounted :function(){
     this.todo()
   },
   methods:{
     todo : function(){
        var sse = new EventSource("/sse");
        sse.onmessage = function (evt) {
            var el = document.getElementById('sse');
            el.appendChild(document.createTextNode(evt.data));
            el.appendChild(document.createElement('br'));
        }
    }
  }
})