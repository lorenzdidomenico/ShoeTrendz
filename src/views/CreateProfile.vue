<template>
  <div>
    <h1>Profilo utente</h1>
    <create-profile-form></create-profile-form>
  </div>
</template>

<script>
import CreateProfileForm from "@/components/CreateProfileForm.vue"; 

export default {
  components: {
    CreateProfileForm,
  },
};
</script>
