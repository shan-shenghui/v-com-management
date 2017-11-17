<template>
  <div>
    <e-header></e-header>
    <div class="system">
      <menu-list></menu-list>
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
    }

  }
</script>

