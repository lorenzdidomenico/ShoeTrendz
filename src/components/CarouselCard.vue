<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 offset-3">
        <div id="mioCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://picsum.photos/600/200?random=1" class="d-block w-100" alt="Prima immagine" />
            </div>
            <!-- Altre immagini del carousel -->
          </div>
          <div class="carousel-indicators">
            <!-- Indicatori del carousel -->
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#mioCarousel" data-bs-slide="prev">
            <!-- Pulsante di navigazione precedente -->
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#mioCarousel" data-bs-slide="next">
            <!-- Pulsante di navigazione successivo -->
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("content ready!");
    let c = document.getElementById("mioCarousel");
    c.setAttribute("data-bs-interval", 3000);
    c.setAttribute("data-bs-pause", "hover");

    c.addEventListener("slide.bs.carousel", () => {
      console.log("transition start!");
    });
    c.addEventListener("slid.bs.carousel", () => {
      console.log("transition stop!");
    });
  },
};
</script>

<style scoped>
.rosso {
  background-color: red;
}

.verde {
  background-color: green;
}
</style>
