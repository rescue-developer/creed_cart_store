<template>
  <footer id="footer">
    <div class="foot-logo">
      <img src="@/assets/web-assets/assets/images/company-logo-removebg-preview.png" width="200px" height="250px" alt="Creed Cart">
    </div>
    <div class="info d-flex">
      <div class="links">
        <h6 class="text-c-white fw-700">Quick Links</h6>
        <ul>
          <router-link to="/"><li>Home</li></router-link>
          <router-link to="/about"><li>About Us</li></router-link>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Story</a></li>
          <li><a href="#">Blogs</a></li>
        </ul>
      </div>
      <div class="links">
        <h6 class="text-c-white fw-700">Getting Started</h6>
        <ul>
          <router-link to="/"><li>Home</li></router-link>
          <router-link to="/about"><li>About Us</li></router-link>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Story</a></li>
          <li><a href="#">Blogs</a></li>
        </ul>
      </div>
      <div class="links">
        <h6 class="text-c-white fw-700">Policies</h6>
        <ul>
          <router-link to="/terms"><li>Terms & Condition</li></router-link>
          <router-link to="/privacy-policy"><li>Privacy Policy</li></router-link>
          <router-link to="/refund-exchange"><li>Exchange & Refund</li></router-link>
          <router-link to="/shipment-policy"><li>Shipment Policy</li></router-link>
        </ul>
      </div>
      <div class="social-desc">
        <div class="social-media">
          <h6 class="text-c-white fw-800">FOLLOW Us On</h6>
          <ul class="d-flex">
            <li><a href="#"><i class='bx bxl-facebook'></i></a></li>
            <li><a href="#"><i class='bx bxl-instagram'></i></a></li>
            <li><a href="#"><i class='bx bxl-youtube'></i></a></li>
            <li><a href="#"><i class='bx bxl-twitter' ></i></a></li>
            <li><a href="#"><i class='bx bxl-pinterest-alt'></i></a></li>
          </ul>
        </div>
        <div class="payment-methods">
          <h6 class="text-c-white fw-800">Payment Methods</h6>
          <img class="payment-method-img" src="@/assets/web-assets/assets/images/payment-methods.png" alt="Payment Methods">
          <img src="@/assets/web-assets/assets/images/payment-method-2.png" alt="Payment Method" width="60px" height="30px" style="margin-left: 3px;">
        </div>
      </div>
    </div>
    <hr>
    <div class="terms-section">
      <p>&copy; 2006 Company Name All Rights Reserved</p>
    </div>
  </footer>
</template>

<script setup>
</script>
