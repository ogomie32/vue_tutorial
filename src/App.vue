<template>
  <div class="container-fluid">
    <div><app-top-menu></app-top-menu></div>
    <div class="row mt-4">
      <div class="col-sm-4 col-md-6 col-lg-2 pl-0" v-if="showSideMenu">
          <app-side-menu></app-side-menu>
      </div>
      <div class="col-sm-4 col-md-6 col-lg-10">
        <router-view></router-view>
        <!-- <app-contacts></app-contacts> -->
      </div>
    </div>
  </div>
</template>

<script>
  import SideMenu from './components/SideMenu.vue';
  import TopMenu from './components/TopMenu.vue';
  import Contacts from './components/contacts/Contacts.vue';

  export default {
    components: {
      appSideMenu: SideMenu,
      appTopMenu: TopMenu,
      appContacts: Contacts,
    },
    computed: {
      showSideMenu(){
        return this.$store.getters.getShowSideMenu;
      }
    }
  }
</script>

<style>
 .pointer{
   cursor: pointer;
 }
</style>
