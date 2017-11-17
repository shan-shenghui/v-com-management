<template>
  <div id="app">
    <loading :show="show"></loading>
    <!--<e-header :username="username"></e-header>-->

    <router-view></router-view>

  </div>
</template>

<script>
  import loading from './components/loading/loading'


  export default {
    name: 'app',
    data() {
      return {};
    },
    computed: {
      show() {
        return !this.$store.state.loadding;
      },
//      username (){
//        debugger
//        let userName = sessionStorage.getItem('userName');
//        if (userName) {
//          return userName;
//        } else {
//          return localStorage.getItem('userName');
//        }
//      }
    },
    components: {
      loading
    }

  }
</script>
