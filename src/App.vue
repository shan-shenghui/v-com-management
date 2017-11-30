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
    mounted(){
      console.log(this.$route);
    },
    watch: {
      '$route' (to, from) {
        console.log(11111111111111);
        console.log(to.name);
      }
    },
    methods: {

      getMenuList (pathName){
        this.$http({
          method: 'post',
          url: '../../data.json',
          data: {}
        }).then(function (response) {
          console.log(response);
          this.$store.state.pageMenuList = response.pathName;

        }).catch(function (error) {
          console.log(error);
        });


        switch (path) {
          case
          '/system':

            break;
          case
          '/system':

            break;
        }

      }

    },
    components: {
      loading
    }

  }
</script>
