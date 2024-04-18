<template>
  <div class="desktop-1">
    <section class="main-structure">
      <HeaderAndMain />
      <div class="languages-wrapper"><Languages /></div>
    </section>
    <section class="skillset-wrapper">
      <div class="skillset">
        <Skills />
        <div class="job-history"><Experience /></div>
      </div>
    </section>
    <div class="content">
      <div class="border" />
      <img
        class="drivingschool"
        alt=""
        src="/drivingschool.png"
      />
    </div>
    <div class="content1">
      <div class="content-child" />
      <img
        class="joblauncher"
        alt=""
        src="/joblauncher.png"
      />
    </div>
    <FrameComponent /><SocialMediaLinks />
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import HeaderAndMain from "../components/HeaderAndMain.vue";
  import Languages from "../components/Languages.vue";
  import Skills from "../components/Skills.vue";
  import Experience from "../components/Experience.vue";
  import FrameComponent from "../components/FrameComponent.vue";
  import SocialMediaLinks from "../components/SocialMediaLinks.vue";

  export default defineComponent({
    name: "Desktop",
    components: {
      HeaderAndMain,
      Languages,
      Skills,
      Experience,
      FrameComponent,
      SocialMediaLinks,
    },
  });
</script>
<style scoped>
  .languages-wrapper {
    width: 1036.5px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 52px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .main-structure {
    width: 1249px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 97px;
    max-width: 100%;
  }
  .job-history {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-3xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .skillset {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 65px;
    max-width: 100%;
  }
  .skillset-wrapper {
    width: 941px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-37xl) 257px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .border {
    height: 270px;
    width: 537px;
    position: absolute;
    margin: 0 !important;
    top: -72px;
    right: -134px;
    border-radius: var(--br-31xl);
    background-color: var(--color-darkslategray);
  }
  .drivingschool {
    height: 185px;
    flex: 1;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    object-fit: cover;
    z-index: 4;
  }
  .content {
    width: 352px;
    margin: 0 !important;
    position: absolute;
    top: 3568px;
    left: 799px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .content-child {
    height: 270px;
    width: 537px;
    position: absolute;
    margin: 0 !important;
    top: -72px;
    right: -134px;
    border-radius: var(--br-31xl);
    background-color: var(--color-darkslategray);
  }
  .joblauncher {
    height: 185px;
    flex: 1;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    object-fit: cover;
    z-index: 4;
  }
  .content1 {
    width: 352px;
    margin: 0 !important;
    position: absolute;
    top: 4108px;
    left: 799px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .desktop-1 {
    width: 100%;
    position: relative;
    background-color: var(--color-gray-300);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 33px 22px var(--padding-8xl) 54px;
    box-sizing: border-box;
    gap: 123px;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1200px) {
  .skillset-wrapper {
    padding-bottom: 109px;
    box-sizing: border-box;
  }
}

@media screen and (max-width: 1050px) {
  .languages-wrapper {
    padding-left: var(--padding-7xl);
    padding-right: var(--padding-7xl);
    box-sizing: border-box;
  }

  .skillset {
    gap: 32px;
  }

  .skillset-wrapper {
    padding-left: var(--padding-9xl);
    padding-right: var(--padding-9xl);
    box-sizing: border-box;
  }
}

@media screen and (max-width: 750px) {
  .main-structure {
    gap: 48px;
  }

  .skillset-wrapper {
    padding-bottom: 71px;
    box-sizing: border-box;
  }

  .desktop-1 {
    gap: var(--gap-42xl);
    padding-left: var(--padding-8xl);
    box-sizing: border-box;
  }
}

@media screen and (max-width: 450px) {
  .main-structure {
    gap: 24px;
  }

  .skillset {
    gap: var(--gap-base);
  }

  .desktop-1 {
    gap: var(--gap-12xl);
  }
}
</style>