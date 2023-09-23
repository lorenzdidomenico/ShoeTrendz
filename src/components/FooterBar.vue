<template>
  <div class="foot">
    <div class="row">
      <div class="col text-left">ShoeTrendz.com</div>
      <div class="col text-center">
        <a
          href="https://agreementservice.svs.nike.com/it/it_it/rest/agreement?agreementType=privacyPolicy&uxId=com.nike.unite&country=IT&language=it&requestType=redirect"
        >
          Informativa sulla privacy e sui cookie
        </a>
      </div>
      <div id="destra" class="col text-right">
        <a href="https://www.nike.com/it/guest/settings/privacy">
          Impostazioni sui cookie
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.foot {
  padding-top: 10px;
  padding-bottom: 10px;
}

#destra {
  text-align: right;
}

.foot a {
  color: black;
}
</style>
