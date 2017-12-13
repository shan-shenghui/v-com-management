<template>
  <div id="app" style="width: 100%;height: 100%;">
    <loading :show="show"></loading>
    <!--<e-header :username="username"></e-header>-->

    <router-view></router-view>

  </div>
</template>

<script>
  import loading from './components/loading/loading';

  export default {
    name: 'app',
    data() {
      return {};
    },
    computed: {
      show() {
        return !this.$store.state.loadding;
      }
    },
    components: {
      loading
    }

  }
</script>
