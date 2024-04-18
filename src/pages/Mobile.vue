<template>
  <div class="mobile">
    <main class="iphone-13-14-1">
      <img
        class="iphone-13-14-1-child"
        loading="lazy"
        alt=""
        src="/line-11.svg"
      />
      <img class="iphone-13-14-1-item" alt="" src="/line-1-11.svg" />
      <header class="main-content">
        <nav class="content-wrapper">
          <div class="home">.home</div>
          <div class="about-me">.about me</div>
          <div class="projects1">.projects</div>
          <div class="contact">.contact</div>
        </nav>
      </header>
      <img class="mid-divider-icon" alt="" />
      <img class="bottom-divider-icon" loading="lazy" alt="" />
      <section class="info-wrapper-parent">
        <InfoWrapper /><Frame2 /><Frame1 /><frame /><SummerJobBlock /><ContactForm />
      </section>
    </main>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import InfoWrapper from "../components/InfoWrapper.vue";
  import Frame2 from "../components/Frame2.vue";
  import Frame1 from "../components/Frame1.vue";
  import Frame from "../components/Frame.vue";
  import SummerJobBlock from "../components/SummerJobBlock.vue";
  import ContactForm from "../components/ContactForm.vue";

  export default defineComponent({
    name: "Mobile",
    components: {
      InfoWrapper,
      Frame2,
      Frame1,
      Frame,
      SummerJobBlock,
      ContactForm,
    },
  });
</script>
<style scoped>
  .iphone-13-14-1-child {
    width: 0px;
    height: 234px;
    position: absolute;
    margin: 0 !important;
    top: 1726px;
    left: 44px;
    object-fit: contain;
    z-index: 1;
  }
  .iphone-13-14-1-item {
    width: 0px;
    height: 271px;
    position: absolute;
    margin: 0 !important;
    top: 816px;
    left: 44px;
    object-fit: contain;
    z-index: 1;
  }
  .home {
    position: relative;
    font-weight: 500;
    display: inline-block;
    min-width: 42px;
  }
  .about-me {
    position: relative;
    font-weight: 500;
    display: inline-block;
    min-width: 68px;
    white-space: nowrap;
  }
  .projects1 {
    position: relative;
    font-weight: 500;
    display: inline-block;
    min-width: 57px;
  }
  .contact {
    position: relative;
    font-weight: 500;
    display: inline-block;
    min-width: 54px;
  }
  .content-wrapper {
    margin: 0;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
    text-align: left;
    font-size: var(--font-size-smi);
    color: var(--white);
    font-family: var(--font-poppins);
  }
  .main-content {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 24px 0px var(--padding-lgi);
    box-sizing: border-box;
    top: 0;
    z-index: 99;
    position: sticky;
    max-width: 100%;
  }
  .mid-divider-icon {
    width: 22px;
    height: 22px;
    position: absolute;
    margin: 0 !important;
    right: -135px;
    bottom: 217px;
    object-fit: contain;
  }
  .bottom-divider-icon {
    width: 13px;
    height: 13px;
    position: absolute;
    margin: 0 !important;
    right: -134px;
    bottom: 218px;
    object-fit: contain;
    z-index: 1;
  }
  .info-wrapper-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 38px;
    max-width: 100%;
  }
  .iphone-13-14-1 {
    flex: 1;
    background-color: var(--color-gray-300);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-25xl) 0px 0px;
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-12xl);
    max-width: 100%;
  }
  .mobile {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    line-height: normal;
    letter-spacing: normal;
  }
</style>
