<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
  import EmptyLayout from '@/layouts/EmptyLayout'
  import MainLayout from '@/layouts/MainLayout'
  export default {
    computed: {
      layout() {
        let str;
        if(this.$route.meta.layout === "main-layout"){
          str = 'main-layout'
        }else{
          str = 'empty-layout'
        }
        return str
      }
    },
    components: {
      EmptyLayout, MainLayout
    }
  }
</script>

<style lang="scss">
  @import "~materialize-css/dist/css/materialize.min.css";
  @import "assets/index.css";
</style>
