<template>
  <section class="social-media-links">
    <div class="footer-background" />
    <img class="social-media-links-child" alt="" src="/ellipse-2.svg" />
    <img class="social-media-links-item" alt="" src="/ellipse-2.svg" />
    <img class="social-media-links-inner" alt="" src="/ellipse-2.svg" />
    <a href="https://linkedin.com/in/kristijan-horvat-488b6227b/" target="_blank" style="text-decoration: none; color: inherit;">
    <img class="linkedin-icon1" alt="" src="/linkedin@2x.png" /> </a>
    <a href="https://www.facebook.com/kristijan.horvat.3958/" target="_blank" style="text-decoration: none; color: inherit;">
    <img class="image-6-icon" alt="" src="/image-6@2x.png" /> </a>
    <a href="https://github.com/krihor176" target="_blank" style="text-decoration: none; color: inherit;">
    <img class="github-icon1" alt="" src="/github@2x.png" /> </a>
  </section>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "SocialMediaLinks",
  });
</script>
<style scoped>
  .footer-background {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-darkslategray);
    width: 100%;
    height: 100%;
  }
  .social-media-links-child {
    position: absolute;
    top: 78px;
    left: 156px;
    width: 9px;
    height: 9px;
    z-index: 1;
  }
  .social-media-links-item {
    position: absolute;
    top: 78px;
    left: 374px;
    width: 9px;
    height: 9px;
    z-index: 1;
  }
  .social-media-links-inner {
    position: absolute;
    top: 78px;
    left: 605px;
    width: 9px;
    height: 9px;
    z-index: 1;
  }
  .linkedin-icon1 {
    position: absolute;
    top: 110px;
    left: 351px;
    width: 55px;
    height: 55px;
    object-fit: contain;
    z-index: 1;
  }
  .image-6-icon {
    position: absolute;
    top: 194px;
    left: 351px;
    width: 55px;
    height: 55px;
    object-fit: contain;
    z-index: 1;
  }
  .github-icon1 {
    position: absolute;
    top: 278px;
    left: 351px;
    width: 55px;
    height: 55px;
    object-fit: contain;
    z-index: 1;
  }
  .social-media-links {
    width: 100%;
    height: 591px;
    position: absolute;
    margin: 0 !important;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
</style>
