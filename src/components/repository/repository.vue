<template>
  <div>
    <e-header></e-header>
    <div class="system">
      <menu-list :list="list"></menu-list>
    </div>
  </div>

</template>


<script>

  import  menuList from '../menu/menu.vue'
  import eHeader from '../header/header.vue'
  export default {
    data() {
      return {}
    },
    components: {
      menuList,
      eHeader
    },
    computed: {
      list(){
        let allMenuList = JSON.parse(sessionStorage.getItem('allMenuList'));
        return allMenuList.repository;
      }
    }

  }
</script>

