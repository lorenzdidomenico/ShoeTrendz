<template>
  <div class="container">
    <div class="row"></div>
    <div class="row">
      <div class="col">
        <NavBar></NavBar>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-md-9 col-sm-12">
        <router-view />
      </div>
      <div class="col-md-3 d-none d-md-block">
        <SideBar></SideBar>
      </div>
    </div>
    <div class="row grigio">
      <div class="col">
        <FooterBar></FooterBar>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  components: {
    NavBar,
    FooterBar,
    SideBar,
  },
};
</script>

<style scoped>
.grigio {
  background-color: #0cadbe;
}
</style>
