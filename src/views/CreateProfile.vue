<template>
  <div>
    <h1>Profilo utente</h1>
    <create-profile-form></create-profile-form>
  </div>
</template>

<script>
import CreateProfileForm from "@/components/CreateProfileForm.vue"; // Assicurati che il percorso sia corretto

export default {
  components: {
    CreateProfileForm,
  },
};
</script>
