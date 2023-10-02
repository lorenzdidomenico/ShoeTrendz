<template>
  <div class="container">
    <div class="row">
      <div class="col-10"> 
        <div id="mioCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="require('@/assets/FirstSlide.jpg')" class="d-block w-100" alt="Prima immagine" />
              <h5 class="titolo">Unlimited You</h5>
            </div>
            <div class="carousel-item">
              <img :src="require('@/assets/SecondSlide.jpg')" class="d-block w-100" alt="Prima immagine" />
              <h5 class="titolo">Nike Hyperadapt</h5>
            </div>
            <div class="carousel-item">
              <img :src="require('@/assets/ThirdSlide.jpg')" class="d-block w-100" alt="Prima immagine" />
              <h5 class="titolo">Rise.Run.Rest.Repeat</h5>
            </div>
            <!-- Altre immagini del carousel -->
          </div>
          <button type="button" data-bs-target="#mioCarousel" data-bs-slide-to="0" class="active" aria-current="true"
            aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#mioCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#mioCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <!-- Indicatori del carousel -->
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#mioCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#mioCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
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

<style>

.titolo{
  padding-top: 20px;
}
.rosso {
  background-color: red;
}

.verde {
  background-color: green;
}
</style>
