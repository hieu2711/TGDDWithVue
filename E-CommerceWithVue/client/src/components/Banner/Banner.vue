<template>
    <div class="relative">
      <img class="relative z-10 w-full" style="height: 450px;" src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/05/banner/Banner-Big-1920x450-3.png" />
      <div class="absolute inset-x-0 bottom-[-50px] mx-auto w-full carousel-container container">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="d-flex rounded-lg overflow-hidden">
                <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/06/banner/Laptop-Xin-via-MB-720x220.png" class="d-block w-50 mr-3 rounded-lg" alt="...">
                <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/06/banner/720-220-720x220-2.png" class="d-block w-50 rounded-lg" alt="...">
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-flex rounded-lg overflow-hidden">
                <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/06/banner/720x220-720x220-40.png" class="d-block w-50 mr-3 rounded-lg" alt="...">
                <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/06/banner/iPhone-14--15-Pro-Max---1--2--720x220-1.png" class="d-block w-50 rounded-lg" alt="...">
              </div>
            </div>
          </div>
    
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import 'bootstrap/dist/css/bootstrap.min.css';
  </script>
  
  <style>
  .carousel-item img {
    height: auto; 
  }
  .rounded-lg {
    border-radius: 10px; 
  }
  .carousel-container {
    bottom: -90px;
    z-index: 20;
    position: absolute; 
  }
  </style>
  